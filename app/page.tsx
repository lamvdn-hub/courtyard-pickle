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
import { FAQSchema } from '@/components/faq/faq-schema';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Courtyard Pickle',
  url: 'https://courtyardpickledanang.com',
  telephone: '+84 93 215 00 06',
  email: 'info@courtyardpickledanang.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27 Dương Thị Xuân Quý, Bắc Mỹ An',
    addressLocality: 'Da Nang',
    addressRegion: 'Ngũ Hành Sơn',
    postalCode: '550000',
    addressCountry: 'VN',
  },
  openingHours: 'Mo-Su 05:00-22:00',
  sport: 'Pickleball',
};

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
      <FAQSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="relative">
        <ScrollReset />
        <StickyNav />
        <HeroSection />
        <HowItWorks />
        <CourtsShowcase />
        <PricingSection />
        <Testimonials />
        <PrimaryCTA />
        <TournamentSection />
        <FAQSection />
        <Footer />
        <MobileBottomCTA />
      </main>
    </LanguageProvider>
  );
}
