import { StickyNav } from '@/components/sticky-nav';
import { HeroSection } from '@/components/hero-section';
import { HowItWorks } from '@/components/how-it-works';
import { CourtsShowcase } from '@/components/courts-showcase';
import { PrimaryCTA } from '@/components/primary-cta';
import { FAQSection } from '@/components/faq/faq-section';
import { PricingSection } from '@/components/pricing-section';
import { Footer } from '@/components/footer';
import { Testimonials } from '@/components/testimonials';
import { TournamentSection } from '@/components/tournament-section';
import { MobileBottomCTA } from '@/components/mobile-bottom-cta';
import { ScrollReset } from '@/components/scroll-reset';
import { LanguageProvider } from '@/lib/language-context';

export async function generateMetadata({ searchParams }: { searchParams: any }) {
  const params = await searchParams;
  const lang = params?.lang;
  const canonical = lang 
    ? `https://courtyardpickledanang.com/?lang=${lang}`
    : 'https://courtyardpickledanang.com';

  return {
    alternates: {
      canonical,
      languages: {
        'vi': 'https://courtyardpickledanang.com/?lang=vi',
        'en': 'https://courtyardpickledanang.com/?lang=en',
      },
    },
  };
}

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative">
        <ScrollReset />
        <StickyNav />
        <HeroSection />
        <HowItWorks />
        <CourtsShowcase />
        <Testimonials />
        <TournamentSection />
        <PrimaryCTA />
        <PricingSection />
        <FAQSection />
        <Footer />
        <MobileBottomCTA />
      </main>
    </LanguageProvider>
  );
}
