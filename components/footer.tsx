'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, PhoneCall, Check } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { FACEBOOK_URL, PHONE_NUMBER_PRIMARY, PHONE_NUMBER_SECONDARY } from '@/lib/constants';

function FacebookButtonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8.5" fill="#1877F2"/>
      <path d="M12 6.5H10.5C10.2 6.5 10 6.7 10 7V8.5H12L11.7 10.5H10V16H8V10.5H6.5V8.5H8V7C8 5.9 8.9 5 10 5H12V6.5Z" fill="#fff"/>
    </svg>
  );
}

function PhoneButtonIcon() {
  return (
    <div style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#10b981',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <PhoneCall size={11} color="#fff" />
    </div>
  );
}

const socialButtonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '10px 16px',
  fontSize: '13px',
  color: 'rgba(255,255,255,0.6)',
  cursor: 'pointer',
  transition: 'background 0.2s, border-color 0.2s',
};

export function Footer() {
  const { t } = useLanguage();
  const [phoneExpanded, setPhoneExpanded] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const copyToClipboard = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

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
                alt="Courtyard Pickleball Logo"
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={socialButtonStyle}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.09)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <FacebookButtonIcon />
                {t.footer.messageFacebook}
              </a>

              <div>
                <button
                  onClick={() => setPhoneExpanded(!phoneExpanded)}
                  style={{
                    ...socialButtonStyle,
                    textAlign: 'left'
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.09)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <PhoneButtonIcon />
                  {t.footer.callUs}
                </button>

                {phoneExpanded && (
                  <div style={{
                    marginTop: '10px',
                    padding: '12px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                  }}>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {t.footer.primaryPhone}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <a
                          href={`tel:${PHONE_NUMBER_PRIMARY}`}
                          style={{
                            fontSize: '15px',
                            color: 'rgba(255,255,255,0.85)',
                            fontWeight: 500,
                            textDecoration: 'none',
                            flex: 1
                          }}
                        >
                          {PHONE_NUMBER_PRIMARY}
                        </a>
                        <button
                          onClick={() => copyToClipboard(PHONE_NUMBER_PRIMARY)}
                          style={{
                            padding: '6px 10px',
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '6px',
                            fontSize: '11px',
                            color: 'rgba(255,255,255,0.6)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
                          }}
                        >
                          {copiedNumber === PHONE_NUMBER_PRIMARY ? (
                            <Check size={12} />
                          ) : (
                            t.footer.copyNumber
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <div style={{
                        fontSize: '10px',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {t.footer.secondaryPhone}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <a
                          href={`tel:${PHONE_NUMBER_SECONDARY}`}
                          style={{
                            fontSize: '13px',
                            color: 'rgba(255,255,255,0.6)',
                            textDecoration: 'none',
                            flex: 1
                          }}
                        >
                          {PHONE_NUMBER_SECONDARY}
                        </a>
                        <button
                          onClick={() => copyToClipboard(PHONE_NUMBER_SECONDARY)}
                          style={{
                            padding: '6px 10px',
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '6px',
                            fontSize: '11px',
                            color: 'rgba(255,255,255,0.6)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
                          }}
                        >
                          {copiedNumber === PHONE_NUMBER_SECONDARY ? (
                            <Check size={12} />
                          ) : (
                            t.footer.copyNumber
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
            <a
              href="#"
              className="text-xs hover:text-white/60 transition-colors"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
