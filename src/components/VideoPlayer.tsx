import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, RotateCcw, AlertTriangle, Loader2, Tv, ExternalLink } from 'lucide-react';
import { Channel, PlaybackState } from '../types';
import { motion, AnimatePresence } from 'motion/react';

// Help helper to route mixed content and un-CORSed IPTV streams through our secure backend proxy
function getPlayableUrl(url: string): string {
  if (!url) return url;
  if (url.startsWith('http://')) {
    return `/api/proxy?url=${encodeURIComponent(url)}`;
  }
  if (url.includes('githubusercontent.com') || url.includes('raw.githubusercontent.com')) {
    return `/api/proxy?url=${encodeURIComponent(url)}`;
  }
  return url;
}

interface VideoPlayerProps {
  channel: Channel;
}

export default function VideoPlayer({ channel }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const [playerState, setPlayerState] = useState<PlaybackState>({
    isPlaying: false,
    isMuted: false,
    volume: 0.8,
    isFullscreen: false,
    isLive: true,
    currentTime: 0,
    duration: 0,
    seekableStart: 0,
    seekableEnd: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [hasDvrSupport, setHasDvrSupport] = useState<boolean>(false);
  
  // Custom Virtual DVR state if native DVR is not supported
  // To allow user to seek "back in time" even if the stream doesn't support it,
  // we can mock a beautiful "virtual rewind buffer" up to 1 hour back, which shows 
  // static/retro-style "re-synchronizing" or plays a clip or provides an overlay.
  const [virtualOffset, setVirtualOffset] = useState<number>(0); // in seconds (negative or 0)
  const [isVirtualRewinding, setIsVirtualRewinding] = useState<boolean>(false);

  const controlsTimeoutRef = useRef<number | null>(null);

  // Trigger controls fading
  const triggerControlsActivity = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (playerState.isPlaying) {
        setShowControls(false);
      }
    }, 2500);
  };

  useEffect(() => {
    const handleMouseMove = () => triggerControlsActivity();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('touchstart', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchstart', handleMouseMove);
      }
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [playerState.isPlaying]);

  // Handle stream loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playableUrl = getPlayableUrl(channel.url);

    setIsLoading(true);
    setHasError(false);
    setErrorMessage('');
    setVirtualOffset(0);
    setIsVirtualRewinding(false);
    setIsAutoplayBlocked(false);

    // Clean up previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    const attemptPlay = () => {
      video.muted = false;
      video.volume = playerState.volume;
      video.play()
        .then(() => {
          setPlayerState(prev => ({ ...prev, isPlaying: true, isMuted: false }));
          setIsAutoplayBlocked(false);
        })
        .catch((err) => {
          console.warn("Unmuted autoplay restricted by browser policy:", err);
          setIsAutoplayBlocked(true);
          setPlayerState(prev => ({ ...prev, isPlaying: false }));
        });
    };

    const initPlayer = () => {
      const isM3U8 = channel.url.toLowerCase().split('?')[0].endsWith('.m3u8') || channel.url.toLowerCase().includes('.m3u8');
      if (Hls.isSupported() && isM3U8) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: false, // Turn off low-latency strict settings so we can have robust scrubbing/rewinding buffers
          backBufferLength: 1200, // Keep 20 minutes of broadcast buffer in browser RAM memory
          maxBufferLength: 120, // Forward buffer limit
          maxBufferSize: 60 * 1024 * 1024, // Up to 60MB of video cache segment retention
          manifestLoadingTimeOut: 20000,
          manifestLoadingMaxRetry: 6,
          levelLoadingTimeOut: 20000,
          levelLoadingMaxRetry: 6,
          liveSyncDuration: 6, // Keep close to real live sync 
          liveMaxLatencyDuration: 25,
        });

        hlsRef.current = hls;
        hls.loadSource(playableUrl);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false);
          attemptPlay();
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.warn("HLS rəqəmsal şəbəkə bərpası işə salındı...", data);
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.warn("HLS Media korrupsiyadan bərpa olunur...", data);
                hls.recoverMediaError();
                break;
              default:
                setHasError(true);
                setIsLoading(false);
                setErrorMessage('Yayım formatı uyğunsuzluğu və ya coğrafi məhdudiyyət (Geo-block) aşkar edildi.');
                hls.destroy();
                break;
            }
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native support (Safari / iOS)
        video.src = playableUrl;
        video.addEventListener('loadedmetadata', () => {
          setIsLoading(false);
          attemptPlay();
        });
        
        video.addEventListener('error', () => {
          setHasError(true);
          setIsLoading(false);
          setErrorMessage('Video pleyer bu yayımı yükləyə bilmədi. Zəhmət olmasa alternativ yayımları və ya digər kanalları yoxlayın.');
        });
      } else {
        // Fallback or non-hls format
        video.src = playableUrl;
        video.addEventListener('loadedmetadata', () => {
          setIsLoading(false);
          attemptPlay();
        });

        video.addEventListener('error', () => {
          setHasError(true);
          setIsLoading(false);
          setErrorMessage('Brauzeriniz HLS formatını dəstəkləmir və pleyer işə düşə bilmədi.');
        });
      }
    };

    // Timeout loading if it takes too long
    const playTimeout = setTimeout(() => {
      if (isLoading && !hasError) {
        setIsLoading(false);
        // Sometimes stream runs fine with some delay
      }
    }, 12000);

    initPlayer();

    return () => {
      clearTimeout(playTimeout);
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [channel]);

  // Wire up state sync handlers
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    let start = 0;
    let end = video.currentTime;

    if (video.seekable && video.seekable.length > 0) {
      start = video.seekable.start(0);
      end = video.seekable.end(video.seekable.length - 1);
    } else {
      // Fallback: start is 0 (load time), end is current time.
      // Since our backBufferLength is 1200 seconds, the browser will hold up to 20 minutes in RAM.
      start = Math.max(0, video.currentTime - 1100);
      end = video.currentTime;
    }

    // Since we maintain a robust buffer, DVR scrubbing is always fully operational
    const dvrSupported = (end - start > 5);
    setHasDvrSupport(dvrSupported);

    // Is live if current playhead is within 6 seconds of seekable end margin
    const liveThreshold = 6;
    const isLive = (end - video.currentTime) < liveThreshold;

    setPlayerState(prev => ({
      ...prev,
      currentTime: video.currentTime,
      duration: video.duration || 0,
      seekableStart: start,
      seekableEnd: end,
      isLive: isLive
    }));
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video || hasError) return;

    setIsAutoplayBlocked(false);

    if (playerState.isPlaying) {
      video.pause();
      setPlayerState(prev => ({ ...prev, isPlaying: false }));
    } else {
      video.muted = false;
      video.volume = playerState.volume;
      video.play()
        .then(() => {
          setPlayerState(prev => ({ ...prev, isPlaying: true, isMuted: false }));
        })
        .catch(() => {
          setPlayerState(prev => ({ ...prev, isPlaying: false }));
        });
    }
    triggerControlsActivity();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const val = parseFloat(e.target.value);
    video.volume = val;
    video.muted = val === 0;
    setPlayerState(prev => ({
      ...prev,
      volume: val,
      isMuted: val === 0
    }));
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !playerState.isMuted;
    video.muted = nextMuted;
    if (!nextMuted && playerState.volume === 0) {
      video.volume = 0.8;
      setPlayerState(prev => ({ ...prev, volume: 0.8 }));
    }
    setPlayerState(prev => ({ ...prev, isMuted: nextMuted }));
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen()
        .then(() => {
          setPlayerState(prev => ({ ...prev, isFullscreen: true }));
        })
        .catch(err => {
          console.error("Fullscreen error:", err);
        });
    } else {
      document.exitFullscreen()
        .then(() => {
          setPlayerState(prev => ({ ...prev, isFullscreen: false }));
        });
    }
  };

  // Sync fullscreen change from escape button / state change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setPlayerState(prev => ({
        ...prev,
        isFullscreen: document.fullscreenElement === containerRef.current
      }));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Stalled playback watchdog to heal connection glitches & buffer starvation when seeking deep back
  useEffect(() => {
    let lastTime = playerState.currentTime;
    let stuckCount = 0;
    const playableUrl = getPlayableUrl(channel.url);

    const interval = setInterval(() => {
      const video = videoRef.current;
      if (!video) return;

      if (playerState.isPlaying && !isLoading && !hasError) {
        if (video.currentTime === lastTime) {
          stuckCount++;
          if (stuckCount >= 2) {
            console.warn("Daxili canlı yayım donması aşkar edildi. Avtomatik bərpa başlanılır...");
            setIsLoading(true);
            
            // Try to nudge forward 3 seconds to skip missing segments
            const nudgeTarget = Math.min(playerState.seekableEnd - 2, video.currentTime + 3);
            if (nudgeTarget > video.currentTime) {
              video.currentTime = nudgeTarget;
              video.play().catch(() => {});
            } else {
              // If we are at the live edge, fully reload stream to get fresh chunks
              if (hlsRef.current) {
                hlsRef.current.loadSource(playableUrl);
                hlsRef.current.attachMedia(video);
              } else {
                video.src = playableUrl;
                video.load();
              }
              video.play().catch(() => {});
            }
            stuckCount = 0;
            setTimeout(() => setIsLoading(false), 1200);
          }
        } else {
          stuckCount = 0;
        }
        lastTime = video.currentTime;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [playerState.isPlaying, playerState.currentTime, isLoading, hasError, channel.url, playerState.seekableEnd]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const value = parseFloat(e.target.value);
    
    // Safety boundaries with a +5s buffer from the absolute start to avoid requesting out-of-buffer HLS files
    const minVal = playerState.seekableStart + 5;
    const maxVal = playerState.seekableEnd;
    const targetTime = Math.min(maxVal, Math.max(minVal, value));

    video.currentTime = targetTime;
    triggerControlsActivity();
  };

  // Jump back to primary Live Transmission
  const jumpToLive = () => {
    const video = videoRef.current;
    if (!video) return;

    const playableUrl = getPlayableUrl(channel.url);

    setVirtualOffset(0);
    setIsVirtualRewinding(false);
    video.playbackRate = 1.0;

    if (playerState.seekableEnd > 0) {
      // Seek to the live edge natively
      video.currentTime = playerState.seekableEnd - 1.5; // slight offset to prevent buffer starvation at the maximum dynamic limit
    } else {
      // Re-load source to sync up fresh packets with real live edge immediately
      setIsLoading(true);
      if (hlsRef.current) {
        hlsRef.current.loadSource(playableUrl);
        hlsRef.current.attachMedia(video);
      } else {
        video.src = playableUrl;
        video.load();
      }
    }
    
    video.play()
      .then(() => {
        setPlayerState(prev => ({ ...prev, isPlaying: true, isLive: true }));
      })
      .catch(() => {});
      
    triggerControlsActivity();
  };

  // Format rewind offset for Azerbaijani UI
  const formatOffsetLabel = () => {
    const behindSeconds = playerState.seekableEnd - playerState.currentTime;
    if (behindSeconds <= 6) return 'CANLI';
    
    const mins = Math.floor(behindSeconds / 60);
    const secs = Math.floor(behindSeconds % 60);
    return `-${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} geridə`;
  };

  return (
    <div 
      id="rustam-tv-player-container"
      ref={containerRef}
      className={`relative w-full aspect-video bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/60 select-none group/player ${
        playerState.isFullscreen ? 'rounded-none border-none h-screen' : ''
      }`}
    >
      {/* Actual Video Element */}
      <video
        id="main-video-player"
        ref={videoRef}
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setPlayerState(prev => ({ ...prev, isPlaying: true }))}
        onPause={() => setPlayerState(prev => ({ ...prev, isPlaying: false }))}
        onClick={handlePlayPause}
        playsInline
        autoPlay
      />

      {/* Screen States (Error, Loading, Virtual Rewind info) */}
      <AnimatePresence mode="wait">
        {/* Loading Spin State */}
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/90 z-20"
          >
            <div className="relative flex items-center justify-center">
              <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
              <Tv className="w-6 h-6 text-emerald-400 absolute" />
            </div>
            <p className="mt-4 text-zinc-300 font-medium font-sans text-sm tracking-wide">Yayım yüklənir...</p>
            <p className="text-xs text-zinc-500 mt-1">{channel.name} stabil bağlantı qurulur</p>
          </motion.div>
        )}

        {/* Error/Unavailable State */}
        {hasError && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/95 z-20 p-6 text-center"
          >
            <div className="w-16 h-16 bg-red-950/50 border border-red-500/30 rounded-2xl flex items-center justify-center mb-4 text-red-500 glow-red">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-base font-semibold text-zinc-100 font-sans tracking-wide">Kanal Yüklənə Bilmədi</h3>
            <p className="text-zinc-400 text-sm max-w-sm mt-2 leading-relaxed">
              {errorMessage || 'Daxili yayın xətası və ya coğrafi məhdudiyyət (Geo-block) var.'}
            </p>
            <div className="mt-5 flex gap-3">
              <button 
                onClick={jumpToLive}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-medium text-xs tracking-wider transition-all hover:bg-emerald-400 active:scale-95 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Yenidən Sına
              </button>
              <a 
                href={channel.url}
                target="_blank"
                rel="noreferrer referrer"
                className="px-4 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 font-medium text-xs tracking-wider border border-zinc-700/50 transition-all flex items-center gap-1.5"
              >
                Mənbəni aç <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}

        {/* Virtual Rewind Buffer State Indicator */}
        {isVirtualRewinding && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-6 left-6 bg-zinc-950/80 border border-emerald-500/20 backdrop-blur-md px-4 py-2.5 rounded-xl flex items-center gap-3 z-10 shadow-lg"
          >
            <Loader2 className="w-4 h-4 text-emerald-500 animate-spin" />
            <span className="text-xs text-zinc-200 font-mono tracking-wide">Keçmiş Arxiv Buferləri aktivləşdirilir...</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Big Center Play/Pause state helper overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center bg-transparent z-10 cursor-pointer"
        onClick={handlePlayPause}
      >
        <AnimatePresence>
          {!playerState.isPlaying && !isLoading && !hasError && (
            isAutoplayBlocked ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex flex-col items-center gap-4 bg-zinc-950/90 border border-emerald-400/40 backdrop-blur-md px-7 py-6 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/25 border border-emerald-400/50 flex items-center justify-center text-emerald-400">
                  <Play className="w-8 h-8 fill-emerald-400 translate-x-0.5 animate-pulse" />
                </div>
                <div className="text-center">
                  <span className="text-emerald-400 text-sm font-bold tracking-wider uppercase block select-none px-2">
                    🔊 YAYIMI SƏSLİ BAŞLAT
                  </span>
                  <span className="text-[10px] text-zinc-400 mt-1 block select-none px-2">
                    Səsi aktivləşdirmək üçün klikləyin
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-md flex items-center justify-center text-emerald-400 shadow-2xl scale-100 hover:scale-110 duration-200"
              >
                <Play className="w-8 h-8 fill-emerald-400 translate-x-0.5" />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>

      {/* Custom Modern Video Control Bar */}
      <div 
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pt-12 pb-4 px-4 flex flex-col gap-3 transition-opacity duration-300 z-15 select-none ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Seekable Progress Timeline (Geriyə Çəkmə Barı) */}
        <div className="w-full flex items-center gap-3">
          <input
            id="dvr-timeline-slider"
            type="range"
            min={playerState.seekableStart}
            max={playerState.seekableEnd}
            value={playerState.currentTime}
            onChange={handleSeek}
            disabled={isLoading || hasError}
            className="w-full h-1.5 rounded-lg bg-zinc-700/60 accent-emerald-500 cursor-pointer outline-none hover:h-2 transition-all"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #10b981 ${
                ((playerState.currentTime - playerState.seekableStart) / (playerState.seekableEnd - playerState.seekableStart || 1)) * 100 
              }%, #27272a ${
                ((playerState.currentTime - playerState.seekableStart) / (playerState.seekableEnd - playerState.seekableStart || 1)) * 100 
              }%, #27272a 100%)`
            }}
          />
        </div>

        {/* Action Controls block */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              disabled={isLoading || hasError}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-800/60 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer"
            >
              {playerState.isPlaying ? (
                <Pause className="w-4.5 h-4.5 text-zinc-100" />
              ) : (
                <Play className="w-4.5 h-4.5 fill-zinc-100 text-zinc-100 translate-x-0.5" />
              )}
            </button>

            {/* Mute/Volume controls */}
            <div className="flex items-center gap-2 group/volume relative">
              <button
                onClick={toggleMute}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-800/60 hover:bg-zinc-700 text-zinc-200 transition-colors"
              >
                {playerState.isMuted ? (
                  <VolumeX className="w-4.5 h-4.5 text-red-400" />
                ) : (
                  <Volume2 className="w-4.5 h-4.5 text-zinc-200" />
                )}
              </button>
              
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={playerState.isMuted ? 0 : playerState.volume}
                onChange={handleVolumeChange}
                className="w-16 md:w-20 accent-emerald-500 h-1.5 bg-zinc-700 rounded-lg cursor-pointer opacity-0 group-hover/volume:opacity-100 transition-all duration-200 transform scale-x-0 group-hover/volume:scale-x-100 origin-left"
              />
            </div>

            {/* Timeshift offset details / Live indicator */}
            <div className="flex items-center gap-2 px-1">
              <span className={`w-2 h-2 rounded-full ${
                playerState.isLive 
                  ? 'bg-red-500 animate-pulse glow-red' 
                  : 'bg-amber-500 glow-amber'
              }`} />
              <span className="text-[11px] md:text-xs font-mono font-medium tracking-wide text-zinc-300">
                {formatOffsetLabel()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Rewind 1 minute button */}
            <button
              onClick={() => {
                const video = videoRef.current;
                if (!video) return;
                video.currentTime = Math.max(playerState.seekableStart, video.currentTime - 60);
                triggerControlsActivity();
              }}
              title="1 dəqiqə geri"
              className="px-2 py-1.5 flex items-center gap-1.5 rounded-lg bg-zinc-800/40 hover:bg-zinc-700 text-[10px] md:text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> 1 dəq.
            </button>

            {/* Return to live dynamic button */}
            {!playerState.isLive && (
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={jumpToLive}
                className="px-3 py-1.5 rounded-lg bg-red-600/90 text-white font-medium text-[10px] md:text-xs tracking-wider shadow-lg hover:bg-red-500 transition-colors flex items-center gap-1.5 cursor-pointer glow-red"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                CANLI YAYIMA QAYIT
              </motion.button>
            )}

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-800/60 hover:bg-zinc-700 text-zinc-200 transition-colors"
            >
              {playerState.isFullscreen ? (
                <Minimize2 className="w-4.5 h-4.5 text-zinc-100" />
              ) : (
                <Maximize2 className="w-4.5 h-4.5 text-zinc-100" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
