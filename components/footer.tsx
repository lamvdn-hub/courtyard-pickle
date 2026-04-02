import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { FACEBOOK_URL } from '@/lib/constants';

const quickLinks = [
  { label: 'Coaching', href: '#' },
  { label: 'Contact Us', href: '#' },
];

function FacebookIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="#1877F2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-[60px] py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[2fr_1fr_2fr] sm:gap-12">
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
                COURTYARD PICKLEBALL
              </span>
            </div>
            <p
              className="text-[13px] leading-[1.6] max-w-[320px]"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              Courtyard Pickleball is Da Nang&apos;s premier pickleball facility, offering court
              rentals, coaching, and social play at 27 Th&#7883; Xu&acirc;n Qu&yacute;,
              B&#7855;c M&#7929; An, Ng&#361; H&agrave;nh S&#417;n, &#272;&agrave; N&#7861;ng
              550000, Vietnam.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border transition-all duration-200 hover:bg-white/[0.1] hover:border-white/[0.15]"
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.1)',
              }}
            >
              <FacebookIcon />
              <span
                className="text-xs"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                Facebook
              </span>
            </a>
          </div>

          <div>
            <h4
              className="font-semibold text-[11px] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold text-[11px] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}
            >
              Location
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <div>
                  <p
                    className="text-[13px]"
                    style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
                  >
                    27 Th&#7883; Xu&acirc;n Qu&yacute;
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
                  >
                    B&#7855;c M&#7929; An, Ng&#361; H&agrave;nh S&#417;n, &#272;&agrave; N&#7861;ng 550000, Vietnam
                  </p>
                </div>
              </div>
              <p
                className="text-[13px]"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                Open Daily: 5 am – 10 pm
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            &copy; {new Date().getFullYear()} Courtyard Pickleball. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs hover:text-white/60 transition-colors"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs hover:text-white/60 transition-colors"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
