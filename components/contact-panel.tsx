'use client';

import { useState, useRef, useCallback } from 'react';
import { PhoneCall, ChevronDown, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { FACEBOOK_URL, PHONE_NUMBER_PRIMARY, PHONE_NUMBER_SECONDARY, CONTACT_EMAIL } from '@/lib/constants';

const PHONE_PRIMARY_RAW = '+84932150006';
const PHONE_SECONDARY_RAW = '0708191711';

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
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <PhoneCall size={11} color="#fff" />
    </div>
  );
}

function EmailButtonIcon() {
  return (
    <div style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#6366f1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <Mail size={11} color="#fff" />
    </div>
  );
}

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
      style={{
        padding: '5px 10px',
        background: isCopied ? 'rgba(204,255,0,0.1)' : 'rgba(255,255,255,0.08)',
        border: 'none',
        borderRadius: '20px',
        fontSize: '11px',
        fontWeight: 500,
        color: isCopied ? '#ccff00' : 'rgba(255,255,255,0.5)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        if (!isCopied) {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)';
        }
      }}
      onMouseLeave={e => {
        if (!isCopied) {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
        }
      }}
    >
      {isCopied ? labelCopied : labelCopy}
    </button>
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
  textDecoration: 'none',
};

interface ContactPanelProps {
  showHeading?: boolean;
}

export function ContactPanel({ showHeading = false }: ContactPanelProps) {
  const { t } = useLanguage();
  const [phoneExpanded, setPhoneExpanded] = useState(false);
  const [emailExpanded, setEmailExpanded] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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
    <div>
      {showHeading && (
        <div style={{
          fontSize: '10px',
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '12px',
          fontWeight: 500,
        }}>
          {t.footer.contactTitle}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: phoneExpanded ? '10px 10px 0 0' : '10px',
              padding: '10px 16px',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s, border-radius 0.15s',
              textAlign: 'left',
              borderBottom: phoneExpanded ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.09)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
              if (phoneExpanded) {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLButtonElement).style.borderBottomColor = 'transparent';
              } else {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
              }
            }}
          >
            <PhoneButtonIcon />
            <span style={{ flex: 1 }}>{t.footer.callUs}</span>
            <ChevronDown
              size={12}
              style={{
                color: 'rgba(255,255,255,0.3)',
                transition: 'transform 0.2s ease',
                transform: phoneExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </button>

          <div
            style={{
              maxHeight: phoneExpanded ? '500px' : '0px',
              opacity: phoneExpanded ? 1 : 0,
              overflow: 'hidden',
              transition: phoneExpanded
                ? 'max-height 0.2s ease-out, opacity 0.2s ease-out'
                : 'max-height 0.15s ease-in, opacity 0.15s ease-in',
            }}
          >
            <div
              ref={panelRef}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderLeft: '1px solid rgba(255,255,255,0.1)',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                borderTop: 'none',
                borderRadius: '0 0 10px 10px',
                padding: '12px 16px',
              }}
            >
              <div style={{ marginBottom: '12px' }}>
                <div style={{
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontWeight: 500,
                }}>
                  {t.footer.primaryPhone}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minHeight: '44px' }}>
                  <a
                    href={`tel:${PHONE_PRIMARY_RAW}`}
                    style={{
                      fontSize: '16px',
                      color: '#fff',
                      fontWeight: 500,
                      textDecoration: 'none',
                      flex: 1,
                    }}
                  >
                    {PHONE_NUMBER_PRIMARY}
                  </a>
                  <CopyButton
                    number={PHONE_NUMBER_PRIMARY}
                    copiedNumber={copiedNumber}
                    onCopy={(num) => copyToClipboard(num, 'phone')}
                    labelCopy={t.footer.copyNumber}
                    labelCopied={t.footer.copiedNumber}
                  />
                </div>
              </div>

              <div style={{
                height: '1px',
                background: 'rgba(255,255,255,0.06)',
                marginBottom: '12px',
              }} />

              <div>
                <div style={{
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontWeight: 500,
                }}>
                  {t.footer.secondaryPhone}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minHeight: '44px' }}>
                  <a
                    href={`tel:${PHONE_SECONDARY_RAW}`}
                    style={{
                      fontSize: '16px',
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: 500,
                      textDecoration: 'none',
                      flex: 1,
                    }}
                  >
                    {PHONE_NUMBER_SECONDARY}
                  </a>
                  <CopyButton
                    number={PHONE_NUMBER_SECONDARY}
                    copiedNumber={copiedNumber}
                    onCopy={(num) => copyToClipboard(num, 'phone')}
                    labelCopy={t.footer.copyNumber}
                    labelCopied={t.footer.copiedNumber}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={() => setEmailExpanded(!emailExpanded)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: emailExpanded ? '10px 10px 0 0' : '10px',
              padding: '10px 16px',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s, border-radius 0.15s',
              textAlign: 'left',
              borderBottom: emailExpanded ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.09)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
              if (emailExpanded) {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLButtonElement).style.borderBottomColor = 'transparent';
              } else {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
              }
            }}
          >
            <EmailButtonIcon />
            <span style={{ flex: 1 }}>{t.footer.emailUs}</span>
            <ChevronDown
              size={12}
              style={{
                color: 'rgba(255,255,255,0.3)',
                transition: 'transform 0.2s ease',
                transform: emailExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </button>

          <div
            style={{
              maxHeight: emailExpanded ? '500px' : '0px',
              opacity: emailExpanded ? 1 : 0,
              overflow: 'hidden',
              transition: emailExpanded
                ? 'max-height 0.2s ease-out, opacity 0.2s ease-out'
                : 'max-height 0.15s ease-in, opacity 0.15s ease-in',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderLeft: '1px solid rgba(255,255,255,0.1)',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                borderTop: 'none',
                borderRadius: '0 0 10px 10px',
                padding: '12px 16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minHeight: '44px' }}>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  style={{
                    fontSize: '14px',
                    color: '#fff',
                    fontWeight: 500,
                    textDecoration: 'none',
                    flex: 1,
                    wordBreak: 'break-all',
                    marginRight: '8px'
                  }}
                >
                  {CONTACT_EMAIL}
                </a>
                <CopyButton
                  number={CONTACT_EMAIL}
                  copiedNumber={copiedEmail}
                  onCopy={(text) => copyToClipboard(text, 'email')}
                  labelCopy={t.footer.copyEmail}
                  labelCopied={t.footer.copiedEmail}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
