'use client';

import { TimeSlot } from '@/lib/time-slots';

type ChipState = 'available' | 'selected-start' | 'selected-end' | 'in-range' | 'occupied';

interface TimeSlotChipProps {
  slot: TimeSlot;
  state: ChipState;
  onTap: (time: string) => void;
}

const stateStyles: Record<ChipState, string> = {
  available:
    'bg-[#0d1f0f] border-white/[0.08] text-white/70 hover:bg-white/[0.06] hover:text-white/90 active:scale-95',
  'selected-start': 'bg-lime border-lime text-forest font-semibold',
  'selected-end': 'bg-lime border-lime text-forest font-semibold',
  'in-range': 'bg-lime/[0.15] border-lime/25 text-lime',
  occupied: 'bg-[#0d1f0f] border-white/[0.06] text-white/25 line-through cursor-not-allowed',
};

export function TimeSlotChip({ slot, state, onTap }: TimeSlotChipProps) {
  const isDisabled = state === 'occupied';

  return (
    <button
      onClick={() => !isDisabled && onTap(slot.time)}
      disabled={isDisabled}
      className={`
        min-h-[44px] flex items-center justify-center
        h-8 px-2.5 rounded-lg border text-[11px] font-medium
        transition-all duration-150 shrink-0 select-none
        ${stateStyles[state]}
      `}
    >
      {slot.label}
    </button>
  );
}
