import { Channel } from '../types';
import { Play, Heart } from 'lucide-react';

interface ChannelCardProps {
  channel: Channel;
  isActive: boolean;
  onSelect: () => void;
  viewMode?: 'grid' | 'list';
}

export default function ChannelCard({ channel, isActive, onSelect, viewMode = 'list' }: ChannelCardProps) {
  if (viewMode === 'grid') {
    return (
      <button
        id={`channel-card-${channel.id}`}
        onClick={onSelect}
        className={`relative w-full aspect-square flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 outline-none group cursor-pointer ${
          isActive
            ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_20px_-3px_rgba(16,185,129,0.25)]'
            : 'bg-zinc-900/40 hover:bg-zinc-800/80 border-zinc-900 hover:border-zinc-700/80'
        }`}
      >
        {/* Country badge */}
        <span className="absolute top-2 right-2 text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded font-bold font-mono bg-zinc-950/70 text-zinc-400 group-hover:bg-zinc-900 select-none">
          {channel.country === 'az' ? 'AZE' : 'TUR'}
        </span>

        {/* Channel Logo Frame */}
        <div className="relative w-16 h-16 rounded-xl bg-zinc-950/90 flex items-center justify-center p-2.5 border border-zinc-800/80 overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300">
          {channel.logo ? (
            <img
              src={channel.logo}
              alt={`${channel.name} logo`}
              className="max-w-full max-h-full object-contain filter drop-shadow-md brightness-95 group-hover:brightness-100 transition-all duration-300"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent && !parent.querySelector('.fallback-txt')) {
                  const textSpan = document.createElement('span');
                  textSpan.className = 'fallback-txt text-sm font-bold text-zinc-500';
                  textSpan.innerText = channel.name.substring(0, 2).toUpperCase();
                  parent.appendChild(textSpan);
                }
              }}
            />
          ) : (
            <span className="text-zinc-500 text-sm font-bold">
              {channel.name.substring(0, 2).toUpperCase()}
            </span>
          )}

          {/* Play hover cover overlay */}
          <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <Play className="w-5 h-5 text-emerald-400 fill-emerald-400" />
          </div>
        </div>

        {/* Title & Metadata details */}
        <div className="w-full min-w-0 px-1">
          <div className="flex items-center justify-center gap-1">
            <h4 className={`text-xs md:text-sm font-semibold truncate tracking-wide ${
              isActive ? 'text-emerald-400' : 'text-zinc-200 group-hover:text-zinc-100'
            }`}>
              {channel.name}
            </h4>
            {channel.isHd && (
              <span className="text-[7px] font-bold px-1 rounded bg-zinc-800 border border-zinc-700 text-emerald-400">
                HD
              </span>
            )}
          </div>
          
          <p className="text-[10px] text-zinc-500 mt-1 truncate">
            {channel.category}
          </p>
        </div>

        {/* Selected Pulse indicator bottom center */}
        {isActive && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-[2px] h-2 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[8px] font-bold font-mono text-emerald-400">YAYIMDA</span>
          </div>
        )}
      </button>
    );
  }

  // Traditional List mode
  return (
    <button
      id={`channel-card-${channel.id}`}
      onClick={onSelect}
      className={`relative w-full flex items-center gap-3.5 p-3 rounded-xl border text-left transition-all duration-200 outline-none group cursor-pointer ${
        isActive
          ? 'bg-emerald-500/10 border-emerald-500/40 shadow-[0_0_15px_-3px_rgba(16,185,129,0.15)]'
          : 'bg-zinc-900/60 hover:bg-zinc-800/80 border-zinc-850/80 hover:border-zinc-750/80'
      }`}
    >
      {/* Country badge */}
      <span className="absolute top-2.5 right-2.5 text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-md font-bold font-mono bg-zinc-800 text-zinc-400 group-hover:bg-zinc-750 select-none">
        {channel.country === 'az' ? 'AZE' : 'TUR'}
      </span>

      {/* Channel Logo Frame */}
      <div className="relative w-12 h-12 rounded-lg bg-zinc-950 flex items-center justify-center p-1 border border-zinc-805/80 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-200">
        {channel.logo ? (
          <img
            src={channel.logo}
            alt={`${channel.name} logo`}
            className="max-w-full max-h-full object-contain filter drop-shadow-md brightness-95 group-hover:brightness-100 transition-all"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent && !parent.querySelector('.fallback-txt')) {
                const textSpan = document.createElement('span');
                textSpan.className = 'fallback-txt text-xs font-bold text-zinc-500';
                textSpan.innerText = channel.name.substring(0, 2).toUpperCase();
                parent.appendChild(textSpan);
              }
            }}
          />
        ) : (
          <span className="text-zinc-500 text-sm font-bold">
            {channel.name.substring(0, 2).toUpperCase()}
          </span>
        )}

        {/* Play hover cover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
        </div>
      </div>

      {/* Title & Metadata details */}
      <div className="flex-1 min-w-0 pr-6">
        <div className="flex items-center gap-1.5">
          <h4 className={`text-sm font-medium truncate font-sans tracking-wide ${
            isActive ? 'text-emerald-400' : 'text-zinc-200 group-hover:text-zinc-100'
          }`}>
            {channel.name}
          </h4>
          {channel.isHd && (
            <span className="text-[8px] font-bold px-1 rounded bg-zinc-850 border border-zinc-750 text-emerald-400 py-[1px]">
              HD
            </span>
          )}
        </div>
        
        <p className="text-zinc-500 text-xs mt-0.5 truncate flex items-center gap-1">
          <span>{channel.category}</span>
          <span className="inline-block w-1 h-1 rounded-full bg-zinc-800" />
          <span className="capitalize">{channel.country === 'az' ? 'Azərbaycan' : 'Türkiyə'}</span>
        </p>
      </div>

      {/* Selected Indicator visual (right side) */}
      {isActive && (
        <div className="flex items-center gap-1 right-3 select-none">
          {/* Wave animation bars to indicate live status */}
          <div className="flex items-end gap-[2px] h-3">
            <span className="w-[2px] bg-emerald-500 animate-[bounce_1s_infinite_100ms] h-1.5" />
            <span className="w-[2px] bg-emerald-500 animate-[bounce_1.2s_infinite_300ms] h-3" />
            <span className="w-[2px] bg-emerald-500 animate-[bounce_0.8s_infinite_500ms] h-2" />
          </div>
        </div>
      )}
    </button>
  );
}
