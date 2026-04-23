'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ArrowRight, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { BOOKING_URL } from '@/lib/constants';
import { LanguageSwitcher } from '@/components/navigation/language-switcher';
import { useLanguage } from '@/lib/language-context';
import { ContactPanel } from '@/components/contact-panel';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [contactExpanded, setContactExpanded] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const { lang, t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navLinks = [
    { label: t.mobile.howItWorks, href: '#how-it-works' },
    { label: t.mobile.ourFacility, href: '#courts' },
    { label: t.mobile.pricing, href: '#pricing' },
    { label: t.mobile.testimonials, href: '#testimonials' },
    { label: t.mobile.tournaments, href: '#tournaments' },
    { label: t.mobile.faq, href: '#faq' },
  ];

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      const timeout = setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timeout);
    } else {
      setIsVisible(false);
      document.body.style.overflow = '';
      setContactExpanded(false);

      if (window.innerWidth >= 768) {
        const timer = setTimeout(() => {
          setIsRendered(false);
        }, 300);
        return () => clearTimeout(timer);
      } else {
        setIsRendered(false);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (contactExpanded && contactRef.current) {
      const timer = setTimeout(() => {
        contactRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [contactExpanded]);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 220);
  }, [onClose, triggerRef]);

  const handleNavClick = useCallback((href: string, e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      onClose();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          // Adjust offsets here to fine-tune section scroll positions.
          // Negative value: scrolls less (leaves MORE space above the section title)
          // Positive/Smaller negative: scrolls more (leaves LESS space above the section title)
          const isMobile = window.innerWidth < 768;

          // Default gap for sections not specified below
          let yOffset = isMobile ? -80 : -100;

          if (href === '#how-it-works') {
            // How it works: increase the gap (scroll less)
            yOffset = isMobile ? -60 : -20;
          } else if (href === '#courts') {
            // Courts: increase the gap (scroll less)
            yOffset = isMobile ? -80 : -60;
          } else if (href === '#pricing') {
            // Pricing: reduce the gap (scroll further down)
            yOffset = isMobile ? 0 : 30;
          } else if (href === '#testimonials') {
            // Testimonials: increase the gap (scroll less)
            yOffset = isMobile ? -40 : -60;
          } else if (href === '#tournaments') {
            // Tournament
            yOffset = isMobile ? -100 : -110;
          } else if (href === '#faq') {
            yOffset = isMobile ? -60 : 10;
          }


          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 220);
    } else {
      onClose();
    }
  }, [onClose, isHomePage]);

  const handleCtaClick = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isRendered) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[50] hidden md:block bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-0 z-[60] flex flex-col md:left-auto md:right-0 md:w-[380px] lg:w-[420px] md:border-l md:border-white/10 md:shadow-2xl md:transition-transform md:duration-300 md:ease-out ${!isVisible ? 'md:translate-x-full' : 'md:translate-x-0'} animate-fade-in md:animate-none`}
        style={{ backgroundColor: '#0a1a0c' }}
        role="menu"
        aria-label="Navigation menu"
      >
        {/* ── Header: logo + close ── */}
        <div className="flex items-center justify-between px-4 h-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <a href={`/?lang=${lang}`} className="flex items-center gap-2">
            <Image
              src="/courtyard_logo.webp"
              alt="Courtyard Pickle Logo"
              width={72}
              height={72}
              className="h-[72px] w-auto"
              priority
            />
          </a>
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            aria-label="Close menu"
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <X
              className="w-[14px] h-[14px]"
              style={{ stroke: 'rgba(255,255,255,0.7)', strokeWidth: '1.5px', strokeLinecap: 'round' }}
            />
          </button>
        </div>

        {/* ── Language switcher strip (mobile only) ── */}
        <div
          className="px-6 md:hidden"
          style={{
            paddingTop: '16px',
            paddingBottom: '16px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            {t.mobile.language}
          </p>
          <LanguageSwitcher currentLang={lang} variant="mobile" />
        </div>

        {/* ── Scrollable nav links ── */}
        <div className="flex-1 overflow-y-auto px-6 pt-4">
          <nav>
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={isHomePage ? link.href : `/?lang=${lang}${link.href}`}
                role="menuitem"
                onClick={(e) => {
                  handleNavClick(link.href, e);
                }}
                className="flex items-center justify-between transition-colors"
                style={{
                  padding: '18px 0',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#fff',
                  letterSpacing: '-0.01em',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  outline: 'none',
                }}
              >
                {link.label}
                <ArrowRight className="w-4 h-4" style={{ opacity: 0.3 }} />
              </a>
            ))}

            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <button
                onClick={() => setContactExpanded(!contactExpanded)}
                className="flex items-center justify-between w-full transition-colors"
                style={{
                  padding: '18px 0',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#fff',
                  letterSpacing: '-0.01em',
                  outline: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                {t.mobile.contact}
                <ChevronDown
                  className="w-[14px] h-[14px]"
                  style={{
                    opacity: 0.3,
                    transition: 'transform 0.2s ease',
                    transform: contactExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <div
                ref={contactRef}
                style={{
                  maxHeight: contactExpanded ? '1000px' : '0px',
                  opacity: contactExpanded ? 1 : 0,
                  overflow: 'hidden',
                  transition: contactExpanded
                    ? 'max-height 0.35s ease-out, opacity 0.2s ease-out'
                    : 'max-height 0.15s ease-in, opacity 0.15s ease-in',
                }}
              >
                <div style={{ paddingBottom: '16px' }}>
                  <ContactPanel />
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* ── Sticky CTA footer ── */}
        <div
          className="px-6 py-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="flex items-center justify-center w-full transition-opacity hover:opacity-90"
            style={{
              backgroundColor: '#ccff00',
              color: '#0a1a0c',
              fontSize: '15px',
              fontWeight: 600,
              padding: '16px 0',
              borderRadius: '12px',
            }}
          >
            {t.mobile.secureYourCourt}&nbsp;&rarr;
          </a>
        </div>
      </div>
    </>
  );
}
