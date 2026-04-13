'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { ContactPanel } from '@/components/contact-panel';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div
        className="relative mx-auto px-6 md:px-12"
        style={{ maxWidth: '1100px', paddingTop: '40px', paddingBottom: '40px' }}
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
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
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
