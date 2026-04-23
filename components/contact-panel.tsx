'use client';

import { useState, useRef, useEffect } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

interface ContactPanelProps {
  showHeading?: boolean;
}

export function ContactPanel({ showHeading = false }: ContactPanelProps) {
  const { t } = useLanguage();
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [copiedNum, setCopiedNum] = useState<string | null>(null);
  const expandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCallOpen && expandRef.current) {
      // Use a small timeout to let the grid-rows transition begin
      // so the element has a height to scroll to.
      const timer = setTimeout(() => {
        expandRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isCallOpen]);

  function copyPhone(num: string, raw: string) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(raw).catch(() => {});
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = raw;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } catch (e) {}
      document.body.removeChild(textarea);
    }
    setCopiedNum(num);
    setTimeout(() => setCopiedNum(null), 2000);
  }

  return (
    <div className="flex flex-col gap-2">
      {showHeading && (
        <p className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-1">
          {t.footer.contactTitle || 'CONTACT US'}
        </p>
      )}

      {/* Facebook button */}
      <a
        href="https://m.me/61571952061949"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl h-11 px-3 transition-colors"
      >
        <span className="w-[26px] h-[26px] rounded-full bg-[#1877f2] flex items-center justify-center text-white font-bold text-xs shrink-0">
          f
        </span>
        <span className="text-sm font-medium text-white">{t.footer.messageFacebook || 'Facebook'}</span>
      </a>

      {/* Call Us button */}
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
          className={`w-4 h-4 text-white/40 ml-auto transition-transform duration-200 ${
            isCallOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        ref={expandRef}
        className={`grid transition-all duration-200 ease-out ${
          isCallOpen ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0 mt-0 !gap-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-3 flex flex-col gap-3">
            {/* Primary */}
            <div>
              <p className="text-[9px] tracking-widest text-white/25 uppercase mb-1">{t.footer.primaryPhone || 'PRIMARY'}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">+84 93 215 00 06</span>
                <button
                  onClick={() => copyPhone('+84932150006', '+84932150006')}
                  className={`text-[11px] px-2 py-1 rounded-md border transition-colors ${
                    copiedNum === '+84932150006'
                      ? 'text-lime border-lime/30 bg-lime/10'
                      : 'text-white/55 border-white/10 bg-white/[0.07]'
                  }`}
                >
                  {copiedNum === '+84932150006' ? (t.footer.copiedNumber || 'Copied') : (t.footer.copyNumber || 'Copy')}
                </button>
              </div>
            </div>

            <hr className="border-white/[0.06]" />

            {/* Secondary */}
            <div>
              <p className="text-[9px] tracking-widest text-white/25 uppercase mb-1">{t.footer.secondaryPhone || 'SECONDARY'}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">0708 19 17 11</span>
                <button
                  onClick={() => copyPhone('0708191711', '0708191711')}
                  className={`text-[11px] px-2 py-1 rounded-md border transition-colors ${
                    copiedNum === '0708191711'
                      ? 'text-lime border-lime/30 bg-lime/10'
                      : 'text-white/55 border-white/10 bg-white/[0.07]'
                  }`}
                >
                  {copiedNum === '0708191711' ? (t.footer.copiedNumber || 'Copied') : (t.footer.copyNumber || 'Copy')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
