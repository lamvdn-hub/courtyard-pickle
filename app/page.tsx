import { StickyNav } from '@/components/sticky-nav';
import { HeroSection } from '@/components/hero-section';
import { HowItWorks } from '@/components/how-it-works';
import { CourtsShowcase } from '@/components/courts-showcase';
import { PrimaryCTA } from '@/components/primary-cta';
import { FAQSection } from '@/components/faq/faq-section';
import { Footer } from '@/components/footer';
import { MobileBottomCTA } from '@/components/mobile-bottom-cta';
import { ScrollReset } from '@/components/scroll-reset';
import { LanguageProvider } from '@/lib/language-context';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative">
        <ScrollReset />
        <StickyNav />
        <HeroSection />
        <HowItWorks />
        <CourtsShowcase />
        <PrimaryCTA />
        <FAQSection />
        <Footer />
        <MobileBottomCTA />
      </main>
    </LanguageProvider>
  );
}
