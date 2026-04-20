import { StickyNav } from '@/components/sticky-nav';
import { Footer } from '@/components/footer';
import { MobileBottomCTA } from '@/components/mobile-bottom-cta';
import { ScrollReset } from '@/components/scroll-reset';
import { LanguageProvider } from '@/lib/language-context';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <LanguageProvider defaultLang="en">
      <main className="relative flex flex-col min-h-screen pt-[104px]">
        <ScrollReset />
        <StickyNav />
        
        <div className="flex-grow w-full max-w-[720px] mx-auto px-6 py-12">
          <Link 
            href="/?lang=en" 
            className="inline-flex items-center text-sm transition-colors mb-8 text-white/70 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-dm-serif-display)]">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-white/80" style={{ lineHeight: 1.7 }}>
            <p><strong>Last updated:</strong> April 13, 2026</p>
            
            <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Who We Are</h2>
            <p>Courtyard Pickle ("we", "us", "our") operates the website <a href="https://courtyardpickledanang.com" className="text-lime hover:underline">courtyardpickledanang.com</a> (the "Site").</p>
            <p><strong>Registered address:</strong><br />27 Dương Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam</p>
            <p><strong>Privacy contact:</strong><br />courtyard.picklecafe@gmail.com</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Scope</h2>
            <p>This policy explains what data is collected when you visit this Site, by whom, the lawful basis for processing, and your rights under current Vietnamese personal data protection law. This English version is provided alongside the full Vietnamese version.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Data We Collect Directly</h2>
            <p>We do not collect any personal data directly. This Site has no user accounts, no contact forms, no payment processing, and no data submission mechanisms of any kind.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Data Collected Automatically by Infrastructure Providers</h2>
            <p>The following providers power the Site's hosting and network infrastructure. They collect limited technical data (IP addresses, browser type, request timestamps) automatically. We do not control, access, or process this data ourselves.</p>
            <p>Lawful basis: Processing is necessary for performance of the contract to deliver the website service, as permitted under current Vietnamese personal data protection law without separate consent.</p>
            
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.1 Vercel (Hosting)</h3>
            <p>The Site is hosted on Vercel, Inc. Vercel collects technical request data for security and performance.<br />Vercel Privacy Policy: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://vercel.com/legal/privacy-policy</a></p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.2 Cloudflare (Domain and Network Security)</h3>
            <p>The Site's domain is managed through Cloudflare, Inc., which processes network traffic for DNS and security. Cloudflare may log connection metadata.<br />Cloudflare Privacy Policy: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://www.cloudflare.com/privacypolicy/</a></p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Analytics and Tracking Tools</h2>
            <p>Lawful basis: Your explicit consent, as required under current Vietnamese personal data protection law.</p>
            <p>The following tools load only after explicit consent via the cookie consent banner on first visit. If consent is declined, no tools activate and no data is collected. Consent can be changed via the cookie settings link in the footer.</p>
            
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.1 Google Analytics 4 (GA4), via Google Tag Manager</h3>
            <p>GA4 collects behavioral data (pages visited, session duration, device type, approximate location, browser information). Data is processed by Google LLC on servers outside Vietnam.<br />Google Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://policies.google.com/privacy</a></p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.2 Microsoft Clarity</h3>
            <p>Microsoft Clarity records anonymized session data (mouse movement, clicks, scroll behavior) and may generate session replays. Data is processed by Microsoft Corporation on servers outside Vietnam.<br />Microsoft Privacy Statement: <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://privacy.microsoft.com/privacystatement</a></p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.3 Google Search Console</h3>
            <p>Google Search Console provides aggregated data on Site appearance in search results. It does not execute in the browser, set cookies, or collect personal data from your session.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Third-Party Links and Services</h2>
            <p>Links and buttons redirect to third-party platforms. This Privacy Policy ceases to apply once you leave the Site.</p>
            <p>• <strong>Booking platform:</strong> Redirects to third-party booking site. We receive no data.<br />• <strong>Facebook:</strong> Links to official page governed by Meta.<br />Meta Privacy Policy: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://www.facebook.com/privacy/policy/</a><br />• <strong>Phone numbers:</strong> Opens device dialer. No data transmitted to us.</p>
            <p>We are not responsible for third-party practices.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Cross-Border Data Transfer</h2>
            <p>Consent to analytics tools constitutes consent to transfer and processing on servers outside Vietnam by Google LLC (United States) and Microsoft Corporation (United States). Vercel and Cloudflare may process connection data outside Vietnam in normal operations.</p>
            <p>Cross-border transfers occur under each provider's standard safeguards. We maintain the required transfer impact assessment dossier internally per current Vietnamese personal data protection law. A copy is available on request at courtyard.picklecafe@gmail.com.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Your Rights Under Current Vietnamese Personal Data Protection Law</h2>
            <p>You have the right to:</p>
            <p>• Know what personal data is collected and the purpose<br />• Access your personal data<br />• Correct inaccurate personal data<br />• Delete your personal data<br />• Restrict processing of your personal data<br />• Withdraw consent at any time without penalty (use footer cookie settings)<br />• Object to processing that harms your legal rights or interests<br />• Claim compensation for damages from violations<br />• Complain to the Ministry of Public Security's Department of Cybersecurity and High-Tech Crime Prevention</p>
            <p>Contact courtyard.picklecafe@gmail.com to exercise rights regarding analytics providers. We will facilitate with the provider.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">9. Data Security</h2>
            <p>Although we do not store personal data directly, we require service providers to maintain technical and organizational measures (encryption in transit, access controls, regular audits) in compliance with current Vietnamese personal data protection law.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">10. Data Retention</h2>
            <p>We do not store personal data. Retention by Vercel, Cloudflare, Google, and Microsoft is governed solely by their linked privacy policies.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">11. Children's Privacy</h2>
            <p>This Site is not directed at children under 16. We do not knowingly collect personal data from minors. If we discover data of a minor under 16 was collected without verifiable parental or guardian consent, we will delete it immediately and notify the parent or guardian where feasible.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">12. Changes to This Policy</h2>
            <p>We may update this policy for tools, legal requirements, or functionality. The "Last updated" date changes accordingly. Material changes are notified prominently on the Site. Where changes affect consent-based processing, we provide opportunity to review and renew consent. Continued use after notification constitutes acceptance where legally permitted.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">13. Contact</h2>
            <p><strong>Courtyard Pickle</strong><br />27 Dương Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam<br />Email: courtyard.picklecafe@gmail.com<br />Website: courtyardpickledanang.com</p>
          </div>
        </div>

        <Footer />
        <MobileBottomCTA />
      </main>
    </LanguageProvider>
  );
}
