'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { PhoneCall, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { PHONE_NUMBER_PRIMARY, PHONE_NUMBER_SECONDARY } from '@/lib/constants';

const PHONE_PRIMARY_RAW = '+84932150006';
const PHONE_SECONDARY_RAW = '0708191711';

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

export function PhoneContact() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);

  useEffect(() => {
    if (panelRef.current) {
      setPanelHeight(panelRef.current.scrollHeight);
    }
  }, [expanded]);

  const copyToClipboard = useCallback((number: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(number);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = number;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedNumber(number);
      setTimeout(() => setCopiedNumber(null), 2000);
    } catch {
      /* silently fail */
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: expanded ? '10px 10px 0 0' : '10px',
          padding: '10px 16px',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.6)',
          cursor: 'pointer',
          transition: 'background 0.2s, border-color 0.2s, border-radius 0.15s',
          textAlign: 'left',
          borderBottom: expanded ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.09)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = expanded ? 'transparent' : 'rgba(255,255,255,0.1)';
          if (expanded) {
            (e.currentTarget as HTMLButtonElement).style.borderLeftColor = 'rgba(255,255,255,0.1)';
            (e.currentTarget as HTMLButtonElement).style.borderRightColor = 'rgba(255,255,255,0.1)';
            (e.currentTarget as HTMLButtonElement).style.borderTopColor = 'rgba(255,255,255,0.1)';
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
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <div
        style={{
          maxHeight: expanded ? `${panelHeight}px` : '0px',
          opacity: expanded ? 1 : 0,
          overflow: 'hidden',
          transition: expanded
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
                onCopy={copyToClipboard}
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
                onCopy={copyToClipboard}
                labelCopy={t.footer.copyNumber}
                labelCopied={t.footer.copiedNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
