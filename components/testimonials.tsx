'use client';

import { Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Reveal } from '@/components/ui/reveal';

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.testimonials.header}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {t.testimonials.reviews.map((review, index) => (
            <Reveal key={index} delay={index * 100}>
              <div
                className="flex flex-col bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 group h-full"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="flex-1 text-slate-300 text-lg leading-relaxed mb-8 italic">
                  "{review.text}"
                </blockquote>

                {/* Reviewer */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center text-lime font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="font-semibold text-white">
                    {review.name}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View more link */}
        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <a
              href="https://www.google.com/search?q=courtyard+pickle+da+nang#irp="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lime hover:text-lime-dim transition-colors font-medium group"
            >
              {t.testimonials.viewMore}
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
