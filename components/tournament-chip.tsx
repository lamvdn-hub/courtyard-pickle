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
        return t.tournaments.chipStatusAnnounced;
      case 'today':
        return t.tournaments.chipStatusToday;
      case 'recent':
        return t.tournaments.chipStatusRecent;
      default:
        return '';
    }
  };

  const getIcon = () => {
    switch (state) {
      case 'today':
        return <Trophy className="w-4 h-4 text-lime animate-pulse shrink-0" />;
      case 'recent':
        return <Trophy className="w-4 h-4 text-lime shrink-0" />;
      default:
        return <Calendar className="w-4 h-4 text-lime shrink-0" />;
    }
  };

  const localizedName = getLocalized(name);
  const localizedDate = getLocalized(date);
  const localizedLinkLabel = getLocalized(linkLabel);

  const Dot = () => (
    <span className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
  );

  return (
    <div className="flex items-center gap-2 p-1 pl-3 pr-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group max-w-full w-fit">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {getIcon()}
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-lime leading-none shrink-0">
            {getStatusLabel()}
          </span>
          <Dot />
          <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors truncate">
            {localizedName}
          </span>
          {state === 'announced' && (
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <Dot />
              <span className="text-sm font-medium text-white/70">{localizedDate}</span>
            </div>
          )}
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-lime text-black text-[11px] sm:text-xs font-bold hover:bg-lime-dim transition-colors shrink-0"
      >
        <span className="whitespace-nowrap">{localizedLinkLabel}</span>
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 shrink-0" />
      </a>
    </div>
  );
}
