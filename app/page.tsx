import { StickyNav } from '@/components/sticky-nav';
import { HeroSection } from '@/components/hero-section';
import { HowItWorks } from '@/components/how-it-works';
import { CourtsShowcase } from '@/components/courts-showcase';
import { PrimaryCTA } from '@/components/primary-cta';
import { FAQSchema } from '@/components/faq/faq-schema';
import { FAQSection } from '@/components/faq/faq-section';
import { Footer } from '@/components/footer';
import { MobileBottomCTA } from '@/components/mobile-bottom-cta';

export default function Home() {
  return (
    <main className="relative">
      <StickyNav />
      <HeroSection />
      <HowItWorks />
      <CourtsShowcase />
      <PrimaryCTA />
      <FAQSchema />
      <FAQSection />
      <Footer />
      <MobileBottomCTA />
    </main>
  );
}
