'use client';

import { useRef, useEffect } from 'react';
import { TimeSlot, isSlotInRange } from '@/lib/time-slots';
import { SlotSelection } from '@/lib/time-slots';
import { TimeSlotChip } from './time-slot-chip';

interface TimeSlotRowProps {
  label: string;
  slots: TimeSlot[];
  selection: SlotSelection;
  onSlotTap: (time: string) => void;
}

function getChipState(
  slot: TimeSlot,
  selection: SlotSelection
): 'available' | 'selected-start' | 'selected-end' | 'in-range' | 'occupied' {
  if (!slot.available) return 'occupied';
  if (slot.time === selection.startSlot) return 'selected-start';
  if (slot.time === selection.endSlot) return 'selected-end';
  if (isSlotInRange(slot.time, selection.startSlot, selection.endSlot)) return 'in-range';
  return 'available';
}

export function TimeSlotRow({ label, slots, selection, onSlotTap }: TimeSlotRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selection.startSlot && scrollRef.current) {
      const startIndex = slots.findIndex((s) => s.time === selection.startSlot);
      if (startIndex >= 0) {
        const chip = scrollRef.current.children[startIndex] as HTMLElement;
        if (chip) {
          chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    }
  }, [selection.startSlot, slots]);

  if (slots.length === 0) return null;

  return (
    <div className="space-y-2">
      <span className="text-[10px] font-semibold tracking-widest uppercase text-white/30 px-1">
        {label}
      </span>
      <div
        ref={scrollRef}
        className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {slots.map((slot) => (
          <TimeSlotChip
            key={slot.time}
            slot={slot}
            state={getChipState(slot, selection)}
            onTap={onSlotTap}
          />
        ))}
      </div>
    </div>
  );
}
