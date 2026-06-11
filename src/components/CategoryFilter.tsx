import { Tv, Globe, Trophy, PlayCircle, Baby, HelpCircle, Flame, Sparkles } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedCountry: 'all' | 'az' | 'tr';
  onSelectCountry: (country: 'all' | 'az' | 'tr') => void;
}

const CATEGORIES = [
  { id: 'all', name: 'Bütün Kateqoriyalar', icon: Tv },
  { id: 'Ümumi', name: 'Ümumi', icon: Sparkles },
  { id: 'Xəbər', name: 'Xəbərlər', icon: Globe },
  { id: 'İdman', name: 'İdman', icon: Trophy },
  { id: 'Musiqi', name: 'Musiqi', icon: PlayCircle },
  { id: 'Uşaq', name: 'Uşaq', icon: Baby },
  { id: 'Sənədli', name: 'Sənədli', icon: HelpCircle },
];

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  selectedCountry,
  onSelectCountry,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Country selection tabs */}
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-sans">Ölkə Seçimi</h3>
        <span className="text-[10px] text-zinc-500 font-medium">Bütün Azərbaycan və Türk Kanalları</span>
      </div>

      <div className="grid grid-cols-3 gap-2 bg-zinc-950/60 p-1 rounded-xl border border-zinc-800/60">
        <button
          onClick={() => onSelectCountry('all')}
          className={`py-2 px-3 rounded-lg text-xs font-medium tracking-wide transition-all outline-none cursor-pointer text-center ${
            selectedCountry === 'all'
              ? 'bg-emerald-500 text-zinc-950 shadow-md font-semibold'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
          }`}
        >
          Hamısı
        </button>
        <button
          onClick={() => onSelectCountry('az')}
          className={`py-2 px-3 rounded-lg text-xs font-medium tracking-wide transition-all outline-none cursor-pointer flex items-center justify-center gap-1.5 ${
            selectedCountry === 'az'
              ? 'bg-emerald-500 text-zinc-950 shadow-md font-semibold'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
          }`}
        >
          <span>🇦🇿</span> Azərbaycan
        </button>
        <button
          onClick={() => onSelectCountry('tr')}
          className={`py-2 px-3 rounded-lg text-xs font-medium tracking-wide transition-all outline-none cursor-pointer flex items-center justify-center gap-1.5 ${
            selectedCountry === 'tr'
              ? 'bg-emerald-500 text-zinc-950 shadow-md font-semibold'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
          }`}
        >
          <span>🇹🇷</span> Türkiyə
        </button>
      </div>

      {/* Category List */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-sans">Kateqoriyalar</h3>
        </div>

        <div className="flex flex-row md:flex-col gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            const isCatActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`py-2.5 px-3.5 rounded-xl text-left text-xs font-medium tracking-wide transition-all outline-none shrink-0 cursor-pointer flex items-center gap-3 border ${
                  isCatActive
                    ? 'bg-zinc-800 text-emerald-400 border-zinc-700 font-semibold shadow-inner'
                    : 'bg-zinc-900/30 hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 border-transparent'
                }`}
              >
                <IconComponent className={`w-4 h-4 shrink-0 ${isCatActive ? 'text-emerald-400' : 'text-zinc-500'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
