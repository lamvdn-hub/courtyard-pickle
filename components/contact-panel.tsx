'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Phone, ChevronDown, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { FACEBOOK_URL, PHONE_NUMBER_PRIMARY, PHONE_NUMBER_SECONDARY, CONTACT_EMAIL } from '@/lib/constants';

const PHONE_PRIMARY_RAW = '+84932150006';
const PHONE_SECONDARY_RAW = '0708191711';

function CopyButton({
  number,
  copiedNumber,
  onCopy,
  labelCopy,
  labelCopied,
}: {
  number: string;
  copiedNumber: string | null;
  onCopy: (num: string) => void;
  labelCopy: string;
  labelCopied: string;
}) {
  const isCopied = copiedNumber === number;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onCopy(number);
      }}
      className={`text-[11px] px-2 py-1 rounded-md border transition-all duration-200 ${isCopied
          ? 'text-lime border-lime/30 bg-lime/10'
          : 'text-white/55 border-white/10 bg-white/[0.07] hover:bg-white/[0.12]'
        }`}
    >
      {isCopied ? labelCopied : labelCopy}
    </button>
  );
}

interface ContactPanelProps {
  showHeading?: boolean;
}

export function ContactPanel({ showHeading = false }: ContactPanelProps) {
  const { t } = useLanguage();
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [emailExpanded, setEmailExpanded] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const phoneRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCallOpen && phoneRef.current && window.innerWidth < 768) {
      const timer = setTimeout(() => {
        const element = phoneRef.current;
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const stickyCtaHeight = 90; // Approx height of sticky CTA + padding
        const viewportHeight = window.innerHeight;
        
        // Check if the bottom of the element is covered by the sticky CTA
        if (rect.bottom > viewportHeight - stickyCtaHeight) {
          const scrollAmount = rect.bottom - (viewportHeight - stickyCtaHeight) + 20;
          window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isCallOpen]);

  useEffect(() => {
    if (emailExpanded && emailRef.current && window.innerWidth < 768) {
      const timer = setTimeout(() => {
        const element = emailRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const stickyCtaHeight = 90;
        const viewportHeight = window.innerHeight;

        if (rect.bottom > viewportHeight - stickyCtaHeight) {
          const scrollAmount = rect.bottom - (viewportHeight - stickyCtaHeight) + 20;
          window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [emailExpanded]);

  const copyToClipboard = useCallback((text: string, type: 'phone' | 'email') => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      if (type === 'phone') {
        setCopiedNumber(text);
        setTimeout(() => setCopiedNumber(null), 2000);
      } else {
        setCopiedEmail(text);
        setTimeout(() => setCopiedEmail(null), 2000);
      }
    } catch {
      /* silently fail */
    }
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {showHeading && (
        <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-1">
          {t.footer.contactTitle || 'CONTACT US'}
        </p>
      )}

      {/* Facebook button */}
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl h-11 px-3 transition-colors"
      >
        <span className="w-[26px] h-[26px] rounded-full bg-[#1877f2] flex items-center justify-center text-white font-bold text-xs shrink-0">
          f
        </span>
        <span className="text-sm font-medium text-white">{t.footer.messageFacebook || 'Facebook'}</span>
      </a>

      {/* Call Us section */}
      <div className="flex flex-col">
        <button
          onClick={() => setIsCallOpen(!isCallOpen)}
          aria-expanded={isCallOpen}
          className="flex items-center gap-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl h-11 px-3 transition-colors"
        >
          <span className="w-[26px] h-[26px] rounded-full bg-[#1da462] flex items-center justify-center text-white shrink-0">
            <Phone className="w-3.5 h-3.5" />
          </span>
          <span className="text-sm font-medium text-white">{t.footer.callUs || 'Call Us'}</span>
          <ChevronDown
            className={`w-4 h-4 text-white/40 ml-auto transition-transform duration-200 ${isCallOpen ? 'rotate-180' : ''
              }`}
          />
        </button>

        <div
          ref={phoneRef}
          className={`grid transition-all duration-200 ease-out ${isCallOpen ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0 mt-0 !gap-0'
            }`}
        >
          <div className="overflow-hidden">
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-3 flex flex-col gap-3">
              {/* Primary */}
              <div>
                <p className="text-[9px] tracking-widest text-white/25 uppercase mb-1">{t.footer.primaryPhone || 'PRIMARY'}</p>
                <div className="flex items-center justify-between">
                  <a href={`tel:${PHONE_PRIMARY_RAW}`} className="text-sm font-medium text-white hover:text-lime transition-colors">
                    {PHONE_NUMBER_PRIMARY}
                  </a>
                  <CopyButton
                    number={PHONE_NUMBER_PRIMARY}
                    copiedNumber={copiedNumber}
                    onCopy={(num) => copyToClipboard(num, 'phone')}
                    labelCopy={t.footer.copyNumber || 'Copy'}
                    labelCopied={t.footer.copiedNumber || 'Copied'}
                  />
                </div>
              </div>

              <hr className="border-white/[0.06]" />

              {/* Secondary */}
              <div>
                <p className="text-[9px] tracking-widest text-white/25 uppercase mb-1">{t.footer.secondaryPhone || 'SECONDARY'}</p>
                <div className="flex items-center justify-between">
                  <a href={`tel:${PHONE_SECONDARY_RAW}`} className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                    {PHONE_NUMBER_SECONDARY}
                  </a>
                  <CopyButton
                    number={PHONE_NUMBER_SECONDARY}
                    copiedNumber={copiedNumber}
                    onCopy={(num) => copyToClipboard(num, 'phone')}
                    labelCopy={t.footer.copyNumber || 'Copy'}
                    labelCopied={t.footer.copiedNumber || 'Copied'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Us section */}
      <div className="flex flex-col">
        <button
          onClick={() => setEmailExpanded(!emailExpanded)}
          aria-expanded={emailExpanded}
          className="flex items-center gap-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl h-11 px-3 transition-colors"
        >
          <span className="w-[26px] h-[26px] rounded-full bg-[#6366f1] flex items-center justify-center text-white shrink-0">
            <Mail className="w-3.5 h-3.5" />
          </span>
          <span className="text-sm font-medium text-white">{t.footer.emailUs || 'Email Us'}</span>
          <ChevronDown
            className={`w-4 h-4 text-white/40 ml-auto transition-transform duration-200 ${emailExpanded ? 'rotate-180' : ''
              }`}
          />
        </button>

        <div
          ref={emailRef}
          className={`grid transition-all duration-200 ease-out ${emailExpanded ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0 mt-0 !gap-0'
            }`}
        >
          <div className="overflow-hidden">
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-3">
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm font-medium text-white hover:text-lime transition-colors break-all mr-2"
                >
                  {CONTACT_EMAIL}
                </a>
                <CopyButton
                  number={CONTACT_EMAIL}
                  copiedNumber={copiedEmail}
                  onCopy={(text) => copyToClipboard(text, 'email')}
                  labelCopy={t.footer.copyEmail || 'Copy'}
                  labelCopied={t.footer.copiedEmail || 'Copied'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
