'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from '@/lib/language-context';
import { ArrowRight, Clock, Sun, ChevronDown } from 'lucide-react';
import { BOOKING_URL, ZALO_URL } from '@/lib/constants';
import { Reveal } from '@/components/ui/reveal';
import { ContactPanel } from '@/components/contact-panel';
import { cn } from '@/lib/utils';

export function PricingSection() {
  const { t } = useLanguage();

  const [isContactOpen, setIsContactOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [opensUpward, setOpensUpward] = useState(true);

  // Accordion state for mobile
  const [expandedPlan, setExpandedPlan] = useState<'casual' | 'fixed' | null>(null);

  const POPOVER_HEIGHT_ESTIMATE = 400;

  // Handle contact toggle with dynamic positioning
  function handleContactToggle() {
    if (!isContactOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // If there's enough space above the button, open upward
      setOpensUpward(rect.top > POPOVER_HEIGHT_ESTIMATE);
    }
    setIsContactOpen(prev => !prev);
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    if (isContactOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isContactOpen]);

  const plans = [
    {
      id: 'casual' as const,
      title: t.pricing.casual.title,
      desc: t.pricing.casual.desc,
      offPeak: t.pricing.casual.offPeak,
      peak: t.pricing.casual.peak,
      ctaLabel: t.pricing.bookNow,
      ctaHref: BOOKING_URL,
      isExternal: true
    },
    {
      id: 'fixed' as const,
      title: t.pricing.fixed.title,
      desc: t.pricing.fixed.desc,
      offPeak: t.pricing.fixed.offPeak,
      peak: t.pricing.fixed.peak,
      ctaLabel: t.pricing.fixed.contactCta || "Contact Us to Arrange",
      ctaHref: '#contact',
      isExternal: false,
      bestValue: t.pricing.fixed.bestValue,
      saveOffPeak: t.pricing.fixed.save.replace('{percent}', '17'),
      savePeak: t.pricing.fixed.save.replace('{percent}', '13')
    }
  ];

  return (
    <section id="pricing" className="relative z-20 py-24 sm:py-32 bg-forest" aria-labelledby="pricing-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-light/10 to-transparent" />

      <div className="relative mx-auto px-6 lg:px-8 max-w-7xl">
        <Reveal>
          <div className="max-w-2xl text-left sm:text-center sm:mx-auto mb-8 sm:mb-16">
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
        </Reveal>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "transition-colors border rounded-3xl relative",
                expandedPlan === plan.id
                  ? plan.id === 'fixed' ? "bg-forest-light border-lime/30" : "bg-forest-light border-white/10"
                  : "bg-forest-light border-white/10"
              )}
            >
              <button
                onClick={() => {
                  setExpandedPlan(expandedPlan === plan.id ? null : plan.id);
                  if (expandedPlan !== plan.id) setIsContactOpen(false);
                }}
                className="w-full text-left p-6 flex items-center justify-between"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg font-bold text-white leading-tight">
                    {plan.title}
                  </span>
                  <span className="text-[13px] text-slate-400/80">
                    {t.pricing.from.replace('{price}', plan.offPeak)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {plan.bestValue && (
                    <span className="bg-lime text-forest text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full">
                      {plan.bestValue}
                    </span>
                  )}
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-white/40 transition-transform duration-[250ms] ease-in-out",
                      expandedPlan === plan.id ? "rotate-180" : "rotate-0"
                    )}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {expandedPlan === plan.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 space-y-6">
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {plan.desc}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Sun className="w-4 h-4 text-lime shrink-0" />
                            <span className="text-sm text-slate-300">05:30 – 16:30</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-base font-semibold text-white">{plan.offPeak}</span>
                            {plan.saveOffPeak && (
                              <span className="text-[9px] font-bold text-lime/90 bg-lime/10 rounded px-1.5 py-0.5">
                                {plan.saveOffPeak}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-lime shrink-0" />
                            <span className="text-sm text-slate-300">16:30 – 22:30</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-base font-semibold text-white">{plan.peak}</span>
                            {plan.savePeak && (
                              <span className="text-[9px] font-bold text-lime/90 bg-lime/10 rounded px-1.5 py-0.5">
                                {plan.savePeak}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {plan.id === 'fixed' ? (
                        <div ref={containerRef} className="relative">
                          {/* Popover Panel */}
                          <div
                            aria-hidden={!isContactOpen}
                            className={cn(
                              "absolute left-0 right-0 z-50 p-4 rounded-2xl bg-[#0f2213] border border-white/10 shadow-2xl transition-[opacity,transform] duration-200 ease-out",
                              isContactOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none',
                              opensUpward ? 'bottom-[calc(100%+12px)]' : 'top-[calc(100%+12px)]'
                            )}
                          >
                            <ContactPanel showHeading />

                            {/* Decorative Arrow */}
                            <div
                              className={cn(
                                "absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent",
                                opensUpward
                                  ? 'bottom-[-8px] border-t-[8px] border-t-[#0f2213]'
                                  : 'top-[-8px] border-b-[8px] border-b-[#0f2213]'
                              )}
                            />
                          </div>

                          <button
                            ref={buttonRef}
                            onClick={handleContactToggle}
                            aria-haspopup="true"
                            aria-expanded={isContactOpen}
                            className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl h-12 text-sm transition-all duration-200 border border-white/10 group"
                          >
                            {plan.ctaLabel}
                            <span className={cn("transition-transform duration-200", isContactOpen ? "rotate-180" : "")}>
                              {opensUpward ? '↑' : '↓'}
                            </span>
                          </button>
                        </div>
                      ) : (
                        <a
                          href={plan.ctaHref}
                          target={plan.isExternal ? "_blank" : undefined}
                          rel={plan.isExternal ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl h-12 text-sm transition-all duration-200 border border-white/10 group"
                        >
                          {plan.ctaLabel}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Casual Play Card */}
          <Reveal delay={100} className="h-full">
            <div className="bg-forest-light border border-white/10 rounded-3xl p-8 hover:border-lime/30 transition-colors flex flex-col pt-10 h-full">
              <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.casual.title}</h3>
              <p className="text-sm text-slate-400 mb-8">{t.pricing.casual.desc}</p>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex items-start gap-4">
                  <Sun className="w-5 h-5 text-lime mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">05:30 – 16:30</p>
                    <p className="text-lg font-semibold text-white">{t.pricing.casual.offPeak}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-lime mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">16:30 – 22:30</p>
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
          </Reveal>

          {/* Fixed Booking Card - Highlighted */}
          <Reveal delay={200} className="h-full lg:-mt-4 lg:mb-4">
            <div className="bg-forest-light border border-lime/30 rounded-3xl p-8 flex flex-col relative shadow-2xl shadow-lime/5 pt-10 h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="bg-lime text-forest text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  {t.pricing.fixed.bestValue}
                </span>
              </div>

              {/* Top content wrapper without clipping to prevent font cutting */}
              <div className="flex flex-col flex-grow rounded-3xl">
                <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.fixed.title}</h3>
                <p className="text-sm text-slate-400 mb-8">{t.pricing.fixed.desc}</p>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-4">
                      <Sun className="w-5 h-5 text-lime mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-slate-400 mb-1">05:30 – 16:30</p>
                        <p className="text-lg font-semibold text-white">{t.pricing.fixed.offPeak}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-lime/85 bg-lime/10 rounded px-1.5 py-0.5 shrink-0 mt-1">
                      {t.pricing.fixed.save.replace('{percent}', '17')}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-lime mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-slate-400 mb-1">16:30 – 22:30</p>
                        <p className="text-lg font-semibold text-white">{t.pricing.fixed.peak}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-lime/85 bg-lime/10 rounded px-1.5 py-0.5 shrink-0 mt-1">
                      {t.pricing.fixed.save.replace('{percent}', '13')}
                    </span>
                  </div>
                </div>
              </div>

              <div ref={containerRef} className="relative mt-auto">
                {/* Popover Panel */}
                <div
                  aria-hidden={!isContactOpen}
                  className={`absolute left-0 right-0 z-50 p-4 rounded-2xl bg-[#0f2213] border border-white/10 shadow-2xl transition-[opacity,transform] duration-200 ease-out ${isContactOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    } ${opensUpward ? 'bottom-[calc(100%+12px)]' : 'top-[calc(100%+12px)]'
                    }`}
                >
                  <ContactPanel showHeading />

                  {/* Decorative Arrow */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent ${opensUpward
                      ? 'bottom-[-8px] border-t-[8px] border-t-[#0f2213]'
                      : 'top-[-8px] border-b-[8px] border-b-[#0f2213]'
                      }`}
                  />
                </div>

                {/* CTA Button */}
                <button
                  ref={buttonRef}
                  onClick={handleContactToggle}
                  aria-haspopup="true"
                  aria-expanded={isContactOpen}
                  className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 text-white/70 font-medium rounded-xl h-12 text-sm transition-all duration-200 border border-white/10 group"
                >
                  {t.pricing.fixed.contactCta || "Contact Us to Arrange"}
                  <span className={`transition-transform duration-200 ${isContactOpen ? 'rotate-180' : ''}`}>
                    {opensUpward ? '↑' : '↓'}
                  </span>
                </button>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Social Play callout */}
        <div className="flex items-start gap-3 max-w-4xl mx-auto mt-5 bg-white/[0.025] border border-white/[0.06] rounded-2xl px-5 py-4">
          <div className="w-2 h-2 rounded-full bg-white/20 shrink-0 mt-[6px]" />
          <p className="text-sm text-white/32 leading-relaxed">
            <span className="font-medium text-white/45">{t.pricing.social.title}</span>
            {' '} - {t.pricing.social.calloutBody}{' '}
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime/60 hover:text-lime/80 transition-colors"
            >
              {t.pricing.social.calloutLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
