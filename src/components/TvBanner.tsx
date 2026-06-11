import { Tv, Sparkles, AlertCircle, Info } from 'lucide-react';

interface TvBannerProps {
  channelName: string;
}

export default function TvBanner({ channelName }: TvBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800/80 p-5 md:p-6 mb-6">
      {/* Absolute Decorative Glow lines */}
      <div className="absolute top-0 right-0 w-80 h-40 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-12 w-60 h-24 bg-blue-500/5 blur-2xl rounded-full pointer-events-none" />

      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
            <Tv className="w-6 h-6 animate-[pulse_2s_infinite]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono">
                <Sparkles className="w-3 h-3" /> CANLI VERİLİŞLƏR
              </span>
              <span className="text-[10px] text-zinc-500 font-medium">Bütün Hüquqlar Qorunur</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold font-sans text-white tracking-tight mt-1.5">
              İndi Yayındadır: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-extrabold">{channelName}</span>
            </h1>
            <p className="text-zinc-400 text-xs mt-1 leading-relaxed max-w-xl">
              Rüstəm TV ilə fasiləsiz, ultra-yüksək sürətli (Low-Latency HLS) və stabil yayım keyfiyyətindən həzz alın. 
              Yayımı geriyə çəkmək barından istifadə edərək son 1 saatlıq canları və ya arxiv yayımlarını izləyə bilərsiniz.
            </p>
          </div>
        </div>

        {/* Quick helper badge info */}
        <div className="bg-zinc-900/80 border border-zinc-800/60 p-3 rounded-xl max-w-xs shrink-0 flex gap-2.5 items-start">
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed text-zinc-400">
            <strong className="text-zinc-200 block font-medium mb-0.5">Xatırlatma</strong>
            Yayımlar tam rəsmi HLS provayderlər üzərindən işləyir. Bəzi idman kanalları beynəlxalq müəllif hüquqlarına görə müvəqqəti məhdudlaşdırıla bilər.
          </div>
        </div>
      </div>
    </div>
  );
}
