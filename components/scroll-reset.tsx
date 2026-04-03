'use client';

import { useEffect } from 'react';

export function ScrollReset() {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return null;
}
