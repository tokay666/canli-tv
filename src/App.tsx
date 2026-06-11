import React, { useState, useEffect } from 'react';
import { channels } from './channels';
import { Channel } from './types';
import VideoPlayer from './components/VideoPlayer';
import ChannelCard from './components/ChannelCard';
import { 
  Search, 
  Tv, 
  Heart, 
  Sparkles, 
  Info,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Monitor,
  Eye,
  CheckCircle2,
  Zap,
  Globe,
  ShieldCheck,
  Scale,
  Award,
  Lock,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Default to Ictimai TV (first channel)
  const [selectedChannel, setSelectedChannel] = useState<Channel>(() => {
    const defaultChan = channels.find(c => c.id === 'IctimaiTV.az@SD');
    return defaultChan || channels[0];
  });

  // Filter, search & viewing modes states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<'all' | 'az' | 'tr'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('Hamısı');
  
  // Layout views state
  const [channelViewMode, setChannelViewMode] = useState<'grid' | 'list'>(() => {
    const saved = localStorage.getItem('rustam-tv-view-mode');
    return (saved as 'grid' | 'list') || 'list';
  });

  // Cinema Mode (Wide/Theater layout)
  const [isCinemaMode, setIsCinemaMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('rustam-tv-cinema');
    return saved === 'true';
  });

  // Floating sticky state for mobile devices
  const [isStickyMobile, setIsStickyMobile] = useState(false);

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('rustam-tv-favorites');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Azerbaijani system message states
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMsg, setNotificationMsg] = useState<string>('');

  // Legal Modal and Developer info states
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);

  // Time state for visual HUD
  const [currentTime, setCurrentTime] = useState<string>('');

  // Persist settings
  useEffect(() => {
    localStorage.setItem('rustam-tv-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('rustam-tv-view-mode', channelViewMode);
  }, [channelViewMode]);

  useEffect(() => {
    localStorage.setItem('rustam-tv-cinema', String(isCinemaMode));
  }, [isCinemaMode]);

  // Make sure body has dark mode styles strictly
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
  }, []);

  // Mobile scroll detector for Sticky PIP Video
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        const playerContainer = document.getElementById('rustam-tv-player-container');
        if (playerContainer) {
          const rect = playerContainer.getBoundingClientRect();
          // If the bottom of the original player container goes off-screen
          setIsStickyMobile(rect.bottom < 0);
        }
      } else {
        setIsStickyMobile(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update clock effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerNotification = (msg: string) => {
    setNotificationMsg(msg);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const toggleFavorite = (channelId: string, name: string) => {
    if (favorites.includes(channelId)) {
      setFavorites(favorites.filter(id => id !== channelId));
      triggerNotification(`"${name}" sevimlilərdən silindi.`);
    } else {
      setFavorites([...favorites, channelId]);
      triggerNotification(`"${name}" sevimlilərə əlavə edildi!`);
    }
  };

  // Dynamically compute active category list
  const categoryList = ['Hamısı', ...Array.from(new Set(channels.map(c => c.category)))];

  // Filters logic
  const filteredChannels = channels.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          channel.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || channel.country === selectedCountry;
    const matchesCategory = selectedCategory === 'Hamısı' || channel.category === selectedCategory;
    const isFavorite = selectedCategory === 'Sevimlilər' ? favorites.includes(channel.id) : true;
    
    return matchesSearch && matchesCountry && matchesCategory && isFavorite;
  });



  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans relative selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Premium Visual Background Gradient Aura */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full filter blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none -z-10" />

      {/* Floating Notifications */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-6 right-6 z-50 bg-zinc-900 border border-zinc-800 text-emerald-400 px-5 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-medium text-xs tracking-wider flex items-center gap-2.5"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {notificationMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Player View overlay (Optimized for Mobile, no blockings) */}
      <AnimatePresence>
        {isStickyMobile && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md shadow-2xl border-b border-zinc-900 flex items-center justify-between p-2.5"
          >
            <div 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-[110px] sm:w-[130px] aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shrink-0 relative flex items-center justify-center p-2 cursor-pointer group active:scale-95 transition-all"
            >
              <img 
                src={selectedChannel.logo} 
                alt="" 
                className="max-w-full max-h-full object-contain filter drop-shadow opacity-80 group-hover:opacity-100 transition-opacity" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1 left-1.5 flex items-center gap-1.5 bg-zinc-900/90 px-1.5 py-0.5 rounded text-[7px] tracking-widest text-emerald-400 font-mono scale-90 border border-emerald-500/20">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                <span>CANLI</span>
              </div>
            </div>
            <div className="flex-1 min-w-0 px-3">
              <h4 className="text-xs font-bold text-zinc-100 truncate">{selectedChannel.name}</h4>
              <p className="text-[10px] text-zinc-500 truncate mt-0.5">{selectedChannel.category}</p>
            </div>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-zinc-950 text-[10px] font-bold shrink-0 mx-1 uppercase tracking-wide cursor-pointer flex items-center gap-1 transition-all"
            >
              <Eye className="w-3.5 h-3.5" /> Pleyerə qayıt
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Official Navigation Header */}
      <header className="sticky top-0 z-45 backdrop-blur-md border-b bg-zinc-950/80 border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-zinc-950 shadow-lg shadow-emerald-500/20">
              <Tv className="w-5.5 h-5.5 stroke-[2.25]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black tracking-wider bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Rüstəm TV
                </h1>
                <span className="text-[8px] font-mono font-black border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded-sm select-none">
                  PRO
                </span>
              </div>
              <p className="text-[9px] text-zinc-400 font-medium tracking-widest uppercase">Rəsmi Rəqəmsal Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Developer Tag */}
            <div className="hidden md:flex items-center gap-1.5 border border-zinc-850 bg-zinc-900/40 px-3 py-1.5 rounded-xl text-[11px] font-medium text-zinc-300">
              <span className="text-zinc-500">Hazırladı:</span>
              <span className="font-bold text-emerald-400">Tokay Bayramlı</span>
            </div>

            {/* Live Clock HUD */}
            <div className="hidden sm:flex items-center gap-2 bg-zinc-900/60 border border-zinc-850 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold tracking-widest text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {currentTime || '00:00:00'}
            </div>

            {/* Legal / License Button */}
            <button
              onClick={() => setLegalModalOpen(true)}
              className="px-3.5 py-1.5 bg-zinc-900/85 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-xs font-bold text-zinc-300 hover:text-emerald-400 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-sm"
              title="Hüquqi Lisenziyalar & DMCA"
            >
              <Scale className="w-4 h-4 text-emerald-400" />
              <span className="hidden xs:inline">Hüquqi Şərtlər</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        {/* Active stream details hero section */}
        <div className="mb-6">
          <div className="p-4 md:p-6 rounded-2xl border bg-gradient-to-r from-zinc-900 to-zinc-950 border-zinc-900/90 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              <div className="flex items-center gap-4">
                {/* Active Channel Emblem */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center p-1.5 shrink-0 bg-zinc-950 border border-zinc-850/80 shadow-inner">
                  <img 
                    src={selectedChannel.logo} 
                    alt={selectedChannel.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow brightness-95"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/HzY4VMo.png';
                    }}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg md:text-2xl font-bold tracking-tight text-white">{selectedChannel.name}</h2>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 select-none">
                      RƏSMİ WEB STREAM
                    </span>
                    {selectedChannel.isHd && (
                      <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 select-none">
                        FHD 1080p
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 font-sans mt-1 flex items-center gap-1.5 flex-wrap">
                    <span>{selectedChannel.category}</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="uppercase text-zinc-300 font-semibold">{selectedChannel.country === 'az' ? 'Azərbaycan' : 'Türkiyə'}</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="text-slate-500 text-[11px]">Şifrələnmiş HLS (m3u8) Protokolu</span>
                  </p>
                </div>
              </div>

              {/* Action and Layout Switch utilities */}
              <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                {/* Cinema Mode Toggle (Desktops only) */}
                <button
                  onClick={() => setIsCinemaMode(!isCinemaMode)}
                  className={`hidden lg:flex px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all border items-center gap-2 cursor-pointer active:scale-95 ${
                    isCinemaMode
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-md'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-emerald-400'
                  }`}
                  title={isCinemaMode ? 'Klassik pəncərə rejiminə keç' : 'Teatr rejimini aktivləşdir'}
                >
                  <Monitor className="w-4 h-4" />
                  {isCinemaMode ? 'Pəncərə Görünüşü' : 'Teatr Rejimi'}
                </button>

                {/* Favorites button */}
                <button
                  onClick={() => toggleFavorite(selectedChannel.id, selectedChannel.name)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all border flex items-center gap-2 cursor-pointer active:scale-95 ${
                    favorites.includes(selectedChannel.id)
                      ? 'bg-rose-500/10 border-rose-500/40 text-rose-400'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-rose-400'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${favorites.includes(selectedChannel.id) ? 'bg-rose-500 animate-ping' : 'bg-zinc-700'} transition-all`} />
                  {favorites.includes(selectedChannel.id) ? 'Seçilmiş' : 'Sevimlilər'}
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* Dynamic Space for Developer Notification Card on Mobile */}
        <div className="md:hidden mb-4 p-3 rounded-xl bg-zinc-900 border border-zinc-850 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] text-zinc-400">Portalın Baş Developer-i: <b className="text-zinc-100">Tokay Bayramlı</b></span>
          </div>
          <button 
            onClick={() => setLegalModalOpen(true)}
            className="text-[10px] text-emerald-400 font-bold hover:underline"
          >
            Hüquqi Şərtlər
          </button>
        </div>

        {/* Dynamic Layout Stage based on Cinema Mode */}
        {isCinemaMode && (
          <div className="w-full mb-6">
            <VideoPlayer channel={selectedChannel} />
          </div>
        )}

        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Stage (If not cinema mode, video is here) */}
          <div className={`lg:col-span-2 space-y-6 ${isCinemaMode ? 'hidden lg:block' : ''}`}>
            {!isCinemaMode && (
              <VideoPlayer channel={selectedChannel} />
            )}

            {/* Official Legal & Compliance Banner (Replacing explanatory note with a super official legal guidelines card) */}
            <div className="p-5 rounded-2xl border bg-zinc-900/35 border-zinc-900 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 h-fit w-fit">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2 tracking-wide uppercase">
                    RƏSMİ TRANSMİSSİYA və HÜQUQİ PROTOKOL
                  </h3>
                  <p className="text-xs mt-2 leading-relaxed text-zinc-400">
                    Rüstəm TV platforması daxilində yayımlanan bütün televiziya kanalları dövlət və regional teleradio yayım kanallarının kütləvi paylaşıma açıq m3u8 protokollarından istifadə edərək birbaşa brauzerdə sinxronizasiya edilməkdədir. Heç bir video kontent öz daxili serverlərimizdə saxlanılmır və qeyri-qanuni re-transmissiya olunmur. Yayım donduqda və ya sinxronizasiya itdikdə, pleyer daxilindəki <b className="text-emerald-400">"CANLI YAYIMA QAYIT"</b> düyməsini sıxın.
                  </p>
                  
                  {/* Digital Signature line */}
                  <div className="mt-4 pt-3 border-t border-zinc-850/60 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                    <span>Transmissiya Memarı: <b className="text-zinc-400 text-[11px]">Tokay Bayramlı</b></span>
                    <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-500" /> SSL / SECURED DECRYPTION</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Catalog list (Only shown on Desktop Cinema Mode to fill negative space beautifully) */}
            {isCinemaMode && (
              <div className="p-6 rounded-2xl border bg-zinc-900/20 border-zinc-900 shadow-sm">
                <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-zinc-400">Tövsiyə Edilən Kanallar</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {channels.slice(0, 6).map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => setSelectedChannel(channel)}
                      className={`p-3 rounded-xl border flex items-center gap-3 text-left transition-all cursor-pointer active:scale-95 ${
                        selectedChannel.id === channel.id
                          ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                          : 'bg-zinc-900/40 hover:bg-zinc-800/80 border-zinc-850'
                      }`}
                    >
                      <div className="w-9 h-9 rounded bg-black flex items-center justify-center p-1 border border-zinc-800 shrink-0">
                        <img src={channel.logo} alt="" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-xs font-semibold truncate flex-1">{channel.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Catalog Sidebar Control Panel Column */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Unified search, filter & lists */}
            <div className="p-5 rounded-2xl border pb-6 space-y-5 bg-zinc-900/40 border-zinc-900 shadow-lg">
              
              {/* Header inside sidebar */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-500" /> Kanalları Süzgəclə
                </span>
                <span className="text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-md">
                  {filteredChannels.length} tapıldı
                </span>
              </div>

              {/* View layout Toggle Row & Flag Stats */}
              <div className="flex items-center justify-between gap-2 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-850/80">
                <div className="flex gap-1.5 items-center">
                  <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-emerald-500" /> Bölmə:
                  </span>
                  <div className="text-[10px] font-bold font-mono px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded">
                    AZ ({channels.filter(c => c.country === 'az').length})
                  </div>
                  <div className="text-[10px] font-bold font-mono px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded">
                    TR ({channels.filter(c => c.country === 'tr').length})
                  </div>
                </div>

                {/* View Mode Toggle Switch */}
                <div className="flex items-center border border-zinc-800 rounded-lg overflow-hidden shrink-0">
                  <button
                    onClick={() => setChannelViewMode('list')}
                    className={`p-2 cursor-pointer active:scale-90 transition-all ${
                      channelViewMode === 'list' 
                        ? 'bg-emerald-500 text-zinc-950' 
                        : 'bg-zinc-900/30 text-zinc-400 hover:text-zinc-200'
                    }`}
                    title="Siyahı görünüşü"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setChannelViewMode('grid')}
                    className={`p-2 cursor-pointer active:scale-90 transition-all ${
                      channelViewMode === 'grid' 
                        ? 'bg-emerald-500 text-zinc-950' 
                        : 'bg-zinc-900/30 text-zinc-400 hover:text-zinc-200'
                    }`}
                    title="Şəbəkə görünüşü"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Advanced search bar */}
              <div className="relative">
                <input
                  id="channels-sidebar-search-bar"
                  type="text"
                  placeholder="Kanal və ya kateqoriya axtar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2.5 pl-10 pr-4 rounded-xl text-sm transition-all focus:ring-1 focus:ring-emerald-500 bg-zinc-950 border border-zinc-850 text-zinc-100 placeholder-zinc-500 outline-none"
                />
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
              </div>

              {/* Country select pills */}
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { value: 'all', label: 'Hamısı' },
                  { value: 'az', label: 'Azərbaycan' },
                  { value: 'tr', label: 'Türkiyə' }
                ].map((countryItem) => (
                  <button
                    key={countryItem.value}
                    onClick={() => setSelectedCountry(countryItem.value as any)}
                    className={`py-2 px-1 rounded-xl text-center text-xs font-bold transition-all border cursor-pointer active:scale-95 ${
                      selectedCountry === countryItem.value
                        ? 'bg-emerald-500 border-emerald-400 text-zinc-950 shadow-md shadow-emerald-500/10'
                        : 'bg-zinc-950 border-zinc-850 hover:bg-zinc-800 hover:text-zinc-250 text-zinc-400'
                    }`}
                  >
                    {countryItem.label}
                  </button>
                ))}
              </div>

              {/* Category slide horizontal list */}
              <div className="space-y-2">
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wide block">Kateqoriyalar</label>
                <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none snap-x">
                  {favorites.length > 0 && (
                    <button
                      onClick={() => setSelectedCategory('Sevimlilər')}
                      className={`py-1.5 px-3 rounded-lg text-xs font-semibold tracking-wide border shrink-0 transition-all select-none cursor-pointer active:scale-95 ${
                        selectedCategory === 'Sevimlilər'
                          ? 'bg-rose-500 border-rose-400 text-white animate-pulse'
                          : 'bg-zinc-950 border-zinc-850 text-rose-400 hover:bg-zinc-900'
                      }`}
                    >
                      ★ Sevimlilər ({favorites.length})
                    </button>
                  )}

                  {categoryList.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-semibold tracking-wide border shrink-0 transition-all select-none cursor-pointer active:scale-95 ${
                        selectedCategory === category
                          ? 'bg-emerald-500 border-emerald-400 text-zinc-950'
                          : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:bg-zinc-900'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rendering list frame layout dynamically based on chosen viewMode */}
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin">
                <AnimatePresence mode="popLayout">
                  {filteredChannels.length > 0 ? (
                    <div className={channelViewMode === 'grid' 
                      ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 gap-3 pb-4' 
                      : 'space-y-2 pb-4'
                    }>
                      {filteredChannels.map((channel, i) => (
                        <motion.div
                          key={channel.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.15, delay: Math.min(i * 0.02, 0.2) }}
                        >
                          <ChannelCard
                            channel={channel}
                            isActive={selectedChannel.id === channel.id}
                            onSelect={() => setSelectedChannel(channel)}
                            viewMode={channelViewMode}
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12 px-4 rounded-xl border border-dashed border-zinc-800"
                    >
                      <Tv className="w-8 h-8 text-zinc-600 mx-auto mb-3 stroke-[1.5]" />
                      <p className="text-zinc-500 text-xs">Süzgəcə uyğun canlı kanal tapılmadı.</p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCountry('all');
                          setSelectedCategory('Hamısı');
                        }}
                        className="mt-3 text-xs font-bold text-emerald-400 hover:underline cursor-pointer"
                      >
                        Hər şeyi sıfırla
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

        </div>

        {/* Clean layout fallback for Cinema mode to show active details below */}
        {isCinemaMode && (
          <div className="mt-8">
            {/* Explanatory Note with quick recovery info */}
            <div className="p-5 rounded-2xl border bg-zinc-900/35 border-zinc-900 shadow-sm">
              <div className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 h-fit">
                  <Zap className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                    Dönmez Arxiv və Canlı Re-Sinxronizasiya (Geriyə Çəkmə)
                  </h3>
                  <p className="text-xs mt-1.5 leading-relaxed text-zinc-400">
                    Slayderi geriyə çəkərək verilişlərin bir qədər əvvəlki anlarına tam stabil baxa bilərsiniz. Canlı yayıma dərhal qayıtmaq üçün pleyer idarəetmə panelindəki <b className="text-red-400">"CANLI YAYIMA QAYIT"</b> düyməsini istifadə edin. Əgər pleyerdə gecikmə və ya donma baş verərsə, daxili stabilizator saniyələr içində canlı yayım ilə sinxronlaşmaq üçün avtomatik olaraq pleyeri tənzimləyəcəkdir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Elegant minimalist footer with clear Developer Attribution and DMCA warnings */}
      <footer className="mt-16 border-t border-zinc-900 bg-zinc-950 py-10 text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-900 pb-6 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Tv className="w-5 h-5 text-emerald-500" />
              <span className="text-xs font-black tracking-widest font-sans uppercase text-zinc-300">Rüstəm TV • Canlı Yayım Mərkəzi</span>
            </div>
            
            <div className="text-xs text-zinc-400 font-medium">
              Rəqəmsal Arxitektura & Yayım Meneceri: <span className="font-bold text-emerald-400">Tokay Bayramlı</span>
            </div>
          </div>

          <p className="text-[11px] max-w-2xl mx-auto text-center leading-relaxed text-zinc-600">
            Müəllif Hüquqları və Yayım Şərtləri: Rüstəm TV-də yayımlanan bütün televiziya axınları kanalların rəsmi saytlarından və açıq yayım (M3U8 HLS) protokollarından inteqrasiya edilmişdir. Platformamız qeyri-qanuni yayım saxlamır. Hər hansı yayımın dayandırılması və ya hüquqi müraciət üçün Tokay Bayramlı ilə əlaqə yarada bilərsiniz.
          </p>

          <div className="text-center text-[10px] font-mono text-zinc-700 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <span>&copy; {new Date().getFullYear()} Rüstəm TV. Bütün hüquqlar qorunur.</span>
            <span className="hidden sm:inline">•</span>
            <span>Mühəndislik: <b className="text-zinc-500">Tokay Bayramlı</b></span>
            <span className="hidden sm:inline">•</span>
            <button 
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-emerald-400 underline cursor-pointer"
            >
              Doğrulanmış Lisenziyalar & DMCA
            </button>
          </div>

        </div>
      </footer>

      {/* Highly Professional Legal and Developer Modal */}
      <AnimatePresence>
        {legalModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg p-6 rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-100 shadow-2xl relative"
            >
              {/* Shield Icon Accent */}
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-black tracking-wider text-zinc-100 uppercase">
                    HÜQUQİ LİSENZİYA VƏ DMCA
                  </h3>
                  <p className="text-[10px] text-zinc-400 tracking-wider">PORTAL TƏHLÜKƏSİZLİK LİSENZİYASI</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-zinc-300 leading-relaxed max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                
                <section className="space-y-1">
                  <h4 className="font-bold text-emerald-400 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" /> 1. Baş Layihə Rəhbəri və Developer
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Bu möhtəşəm TV platformasının bütün daxili tənzimləmələri, ultra-stabil axın watchdog mexanizmləri və mobil optimallaşdırılmış interfeys arxitekturası <b>Developer Tokay Bayramlı</b> tərəfindən mükəmməl şəkildə hazırlanaraq rəsmi lisenziyaya uyğunlaşdırılmışdır.
                  </p>
                </section>

                <section className="space-y-1">
                  <h4 className="font-bold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 2. Rəsmi m3u8 Protokolu süzgəci
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Sistemə inteqrasiya edilmiş HLS axınları yalnız açıq və asanlıqla əldə edilən rəsmi və qanuni linklərdir. Bütün yayımlar birbaşa müvafiq teleradio təşkilatının rəsmi şəbəkəsindən gəlir, heç bir kənar server vasitəçi rolu oynamır.
                  </p>
                </section>

                <section className="space-y-1">
                  <h4 className="font-bold text-emerald-400 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> 3. DMCA & Müəllif Hüquqları Müraciətləri
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Hər hansı bir televiziya yayım şirkəti və ya rəsmi nümayəndəlik öz kanalının bu portalda yer almasını istəmirsə və ya silinməsini tələb edirsə, rəsmi sorğu göndərdikdən dərhal sonra (maksimum 24 saat ərzində) müvafiq kanal ləğv ediləcəkdir.
                  </p>
                </section>

                <section className="space-y-1">
                  <h4 className="font-bold text-emerald-400 flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5" /> 4. Mobil Cihaz Optimallaşdırılması
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Portal mobil telefonlar (iOS və Android) üçün xüsusi optimallaşdırılmışdır. Küçədə və ya yolda olduğunuz zaman axın kəskin dəyişmələrində daxili HLS watchdog donmaları dərhal bərpa edir və şəbəkə itkisinin qarşısını alır.
                  </p>
                </section>

              </div>

              <div className="flex justify-end pt-4 border-t border-zinc-800 mt-4">
                <button
                  type="button"
                  onClick={() => setLegalModalOpen(false)}
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all cursor-pointer active:scale-95 shadow-md shadow-emerald-500/10"
                >
                  Şərtləri Qəbul Edirəm
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
