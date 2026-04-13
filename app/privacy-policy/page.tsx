import { StickyNav } from '@/components/sticky-nav';
import { Footer } from '@/components/footer';
import { MobileBottomCTA } from '@/components/mobile-bottom-cta';
import { ScrollReset } from '@/components/scroll-reset';
import { LanguageProvider } from '@/lib/language-context';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <LanguageProvider>
      <main className="relative flex flex-col min-h-screen pt-[104px]">
        <ScrollReset />
        <StickyNav />
        
        <div className="flex-grow w-full max-w-[720px] mx-auto px-6 py-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm transition-colors mb-8 text-white/70 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-dm-serif-display)]">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-white/80" style={{ lineHeight: 1.7 }}>
            {/* INSERT PRIVACY POLICY TEXT HERE */}
            <p>
              Please insert the privacy policy text here.
            </p>
          </div>
        </div>

        <Footer />
        <MobileBottomCTA />
      </main>
    </LanguageProvider>
  );
}
