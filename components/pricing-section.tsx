'use client';

import { useLanguage } from '@/lib/language-context';
import { ArrowRight, Clock, Sun } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';

export function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-forest overflow-hidden" aria-labelledby="pricing-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-light/10 to-transparent" />

      <div className="relative mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl text-left sm:text-center sm:mx-auto mb-16">
          <p className="text-lime font-mono text-sm tracking-widest uppercase mb-4">
            {t.pricing.kicker}
          </p>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            {t.pricing.header}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.pricing.subheader}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Casual Play Card */}
          <div className="bg-forest-light border border-white/10 rounded-3xl p-8 hover:border-lime/30 transition-colors flex flex-col pt-10">
            <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.casual.title}</h3>
            <p className="text-sm text-slate-400 mb-8">{t.pricing.casual.desc}</p>
            
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-start gap-4">
                <Sun className="w-5 h-5 text-lime mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-400 mb-1">05:30 - 16:30</p>
                  <p className="text-lg font-semibold text-white">{t.pricing.casual.offPeak}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-lime mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-400 mb-1">16:30 - 22:30</p>
                  <p className="text-lg font-semibold text-white">{t.pricing.casual.peak}</p>
                </div>
              </div>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl h-12 text-sm transition-all duration-200 border border-white/10 group"
            >
              {t.pricing.bookNow}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Fixed Booking Card - Highlighted */}
          <div className="bg-forest-light border border-lime/30 rounded-3xl p-8 flex flex-col relative shadow-2xl shadow-lime/5 pt-10 lg:-mt-4 lg:mb-4">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-lime text-forest text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                Best Value
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.fixed.title}</h3>
            <p className="text-sm text-slate-400 mb-8">{t.pricing.fixed.desc}</p>
            
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-start gap-4">
                <Sun className="w-5 h-5 text-lime mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-400 mb-1">05:30 - 16:30</p>
                  <p className="text-lg font-semibold text-white">{t.pricing.fixed.offPeak}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-lime mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-slate-400 mb-1">16:30 - 22:30</p>
                  <p className="text-lg font-semibold text-white">{t.pricing.fixed.peak}</p>
                </div>
              </div>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-lime hover:bg-lime-dim text-forest font-bold rounded-xl h-12 text-sm transition-all duration-200 group"
            >
              {t.pricing.bookNow}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social Play Card */}
          <div className="bg-forest-light border border-white/10 rounded-3xl p-8 hover:border-lime/30 transition-colors flex flex-col pt-10">
            <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.social.title}</h3>
            <p className="text-sm text-slate-400 mb-8">{t.pricing.social.desc}</p>
            
            <div className="space-y-4 mb-10 flex-grow">
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-lime/20 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-lime" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Per Session / Lượt</p>
                  <p className="text-lg font-semibold text-white">{t.pricing.social.price}</p>
                </div>
              </div>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl h-12 text-sm transition-all duration-200 border border-white/10 group mt-auto"
            >
              {t.pricing.bookNow}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
