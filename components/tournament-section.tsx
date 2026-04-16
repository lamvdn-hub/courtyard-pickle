'use client';

import { Trophy, ExternalLink, Calendar } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { FACEBOOK_URL } from '@/lib/constants';

export function TournamentSection() {
  const { t } = useLanguage();

  const isTournamentUpcoming = t.tournaments.date && t.tournaments.date.trim() !== '';

  return (
    <section id="tournaments" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {t.tournaments.header}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-lime" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {isTournamentUpcoming ? t.tournaments.date : t.tournaments.comingSoonDate}
                </h3>
                {isTournamentUpcoming && (
                  <p className="text-slate-400 mt-1">{t.tournaments.description}</p>
                )}
              </div>
            </div>

            {isTournamentUpcoming ? (
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 px-6 bg-lime text-black font-semibold rounded-xl hover:bg-lime-dim transition-colors group"
              >
                {t.tournaments.detailsBtn}
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <div className="mt-4 flex items-center justify-center gap-2 w-full py-3 px-6 bg-white/[0.05] text-slate-400 font-medium rounded-xl border border-white/[0.05]">
                <Calendar className="w-4 h-4" />
                <span>{t.tournaments.comingSoonDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
