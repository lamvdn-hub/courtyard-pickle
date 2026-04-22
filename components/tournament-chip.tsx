'use client';

import { Trophy, Calendar, ArrowRight } from 'lucide-react';
import { tournamentConfig, LocalizedString } from '@/config/tournament.config';
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';

// === ENTRANCE ANIMATION OPTIONS ===
// To swap animations, comment out the active one and uncomment the other.

// OPTION 1: Fade and slide down (Currently Disabled)
/*
const mountAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.4, ease: 'easeOut' as const }
};
*/

// OPTION 2: Border pulse (Currently Active)
// Pulses the border to lime once, then clears the inline style so Tailwind hover effects continue to work.
const mountAnimation = {
  initial: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0px 0px 0px rgba(212, 255, 0, 0)'
  },
  animate: {
    borderColor: ['rgba(255, 255, 255, 0.1)', 'rgba(212, 255, 0, 1)', 'rgba(255, 255, 255, 0.1)'],
    boxShadow: [
      '0px 0px clamp(0px, 0vw, 0px) rgba(212, 255, 0, 0)',
      '0px 0px clamp(6px, 4vw, 50px) rgba(212, 255, 0, 1)',
      '0px 0px clamp(0px, 0vw, 0px) rgba(212, 255, 0, 0)'
    ],
    transitionEnd: { borderColor: '', boxShadow: '' }
  },
  transition: { duration: 1.5, delay: 0.4, ease: 'easeInOut' as const, times: [0, 0.5, 1] }
};

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
    <motion.div
      {...mountAnimation}
      className="flex items-center gap-2 p-1 pl-3 pr-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group max-w-full w-fit"
    >
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
    </motion.div>
  );
}
