'use client';

import { Trophy, Calendar, ArrowRight } from 'lucide-react';
import { tournamentConfig, LocalizedString } from '@/config/tournament.config';
import { useLanguage } from '@/lib/language-context';

export function TournamentChip() {
  const { lang, t } = useLanguage();
  const { state, name, date, link, linkLabel } = tournamentConfig;

  if (state === 'hidden') return null;

  // Helper to get localized string based on current language
  const getLocalized = (field: LocalizedString) => {
    return field[lang as keyof LocalizedString] || field.en;
  };

  const getStatusLabel = () => {
    switch (state) {
      case 'announced':
        return lang === 'en' ? 'UPCOMING' : 'SẮP TỚI';
      case 'today':
        return lang === 'en' ? 'LIVE' : 'TRỰC TIẾP';
      case 'recent':
        return lang === 'en' ? 'RESULTS' : 'KẾT QUẢ';
      default:
        return '';
    }
  };

  const getIcon = () => {
    switch (state) {
      case 'today':
        return <Trophy className="w-4 h-4 text-lime animate-pulse" />;
      case 'recent':
        return <Trophy className="w-4 h-4 text-lime" />;
      default:
        return <Calendar className="w-4 h-4 text-lime" />;
    }
  };

  const localizedName = getLocalized(name);
  const localizedDate = getLocalized(date);
  const localizedLinkLabel = getLocalized(linkLabel);

  const getMainContent = () => {
    if (state === 'announced') return `${localizedName} • ${localizedDate}`;
    return localizedName;
  };

  return (
    <div className="inline-flex items-center gap-2 p-1 pl-3 pr-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group">
      <div className="flex items-center gap-2">
        {getIcon()}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-lime leading-none">
            {getStatusLabel()}
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
            {getMainContent()}
          </span>
        </div>
      </div>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-lime text-black text-xs font-bold hover:bg-lime-dim transition-colors ml-2"
      >
        {localizedLinkLabel}
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
