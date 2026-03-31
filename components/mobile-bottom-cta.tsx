'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileBottomCTAProps {
  onClick: () => void;
}

export function MobileBottomCTA({ onClick }: MobileBottomCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-forest/90 backdrop-blur-2xl border-t border-white/10">
      <Button
        onClick={onClick}
        className="w-full bg-lime text-forest font-bold hover:bg-lime-dim rounded-xl h-14 text-base transition-all duration-200 group"
      >
        Book Your Court
        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
