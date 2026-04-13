'use client';

import { useEffect } from 'react';

export function ScrollReset() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        try {
          const el = document.querySelector(window.location.hash);
          if (el) {
            el.scrollIntoView();
          }
        } catch (e) {
          // ignore invalid selectors
        }
      }, 50);
    }
  }, []);

  return null;
}
