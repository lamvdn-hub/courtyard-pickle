'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { ContactPanel } from '@/components/contact-panel';
import { usePathname } from 'next/navigation';

export function Footer() {
  const { t, lang } = useLanguage();
  const pathname = usePathname();
  const isPolicyPage = pathname === '/privacy-policy' || pathname === '/chinh-sach-bao-mat';

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div
        className={`relative mx-auto px-6 md:px-12 ${!isPolicyPage ? 'pb-[100px] md:pb-10' : 'pb-10'}`}
        style={{ maxWidth: '1100px', paddingTop: '40px' }}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Image
                src="/courtyard_logo.webp"
                alt="Courtyard Pickle Logo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-white font-bold text-base tracking-tight">
                COURTYARD PICKLE
              </span>
            </div>
            <p
              className="text-[13px] max-w-[380px]"
              style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}
            >
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {t.footer.contactTitle}
            </h4>
            <ContactPanel />
          </div>

          <div>
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {t.footer.locationTitle}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <div>
                  <p
                    className="text-[13px]"
                    style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
                  >
                    {t.footer.addressLine1}
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
                  >
                    {t.footer.addressLine2}
                  </p>
                </div>
              </div>
              <p
                className="text-[13px]"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {t.footer.hours}
              </p>
              <div className="pt-2">
                <div className="w-full h-[180px] rounded-xl overflow-hidden border border-white/5 relative bg-white/[0.03]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4537961171764!2d108.24151717474345!3d16.041924384633667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217003116a67d%3A0xd946bfec5ce05bfe!2sCourtyard%20Pickle!5e0!3m2!1sen!2sde!4v1776362761355!5m2!1sen!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.6) invert(0.92) contrast(0.85) brightness(0.95)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Courtyard Pickle Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={lang === 'vi' ? "/chinh-sach-bao-mat" : "/privacy-policy"}
              className="text-xs hover:text-white/60 transition-colors"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              {t.footer.privacyPolicy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
