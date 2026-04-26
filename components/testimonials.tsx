'use client';

import { useState, useEffect } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Reveal } from '@/components/ui/reveal';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

// Helper component for the review card to maintain consistency between mobile and desktop
function ReviewCard({ review, t }: { review: any; t: any }) {
  return (
    <div className="flex flex-col bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-300 group h-full">
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
        "{review.text}"{" "}
        {review.url && (
          <a
            href={review.url}
            target="_blank"
            rel="noopener noreferrer"
            className="not-italic text-lime hover:text-lime-dim transition-colors text-[14px] font-medium inline whitespace-nowrap"
          >
            <span className="inline-flex items-center gap-1 align-baseline">
              {t.testimonials.readMore}
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        )}
      </blockquote>

      {/* Reviewer */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center text-lime font-bold shrink-0">
          {review.name.charAt(0)}
        </div>
        <div className="flex flex-col min-w-0">
          <div className="font-semibold text-white truncate">
            {review.name}
          </div>
          <div className="flex flex-col gap-0.5 mt-0.5">
            <div className="text-[13px] text-slate-400 flex items-center gap-1.5">
              {t.testimonials.reviewFromGoogle}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-medium text-white/90">Google</span>
            </div>
            <div className="text-[12px] text-slate-500">
              {review.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {t.testimonials.header}
            </h2>
          </div>
        </Reveal>

        {/* Mobile Swipe Carousel - visible on mobile only */}
        <div className="md:hidden">
          <Reveal>
            <div className="relative max-w-lg mx-auto">
              <Carousel
                setApi={setApi}
                opts={{
                  align: 'start',
                  loop: false,
                  dragThreshold: 30,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-0">
                  {t.testimonials.reviews.map((review, index) => (
                    <CarouselItem key={index} className="pl-0">
                      <div className="h-full">
                        <ReviewCard review={review} t={t} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Navigation Arrows - Inside the card boundary, vertically centered */}
                {canScrollPrev && (
                  <button
                    onClick={() => api?.scrollPrev()}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-400/40 hover:text-slate-400/70 transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {canScrollNext && (
                  <button
                    onClick={() => api?.scrollNext()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 text-slate-400/40 hover:text-slate-400/70 transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </Carousel>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2.5 mt-8">
                {t.testimonials.reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      current === index ? "bg-lime" : "bg-white/[0.08]"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Desktop Grid Layout - hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {t.testimonials.reviews.map((review, index) => (
            <Reveal key={index} delay={index * 100}>
              <ReviewCard review={review} t={t} />
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
