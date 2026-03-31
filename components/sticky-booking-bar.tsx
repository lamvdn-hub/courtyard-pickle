'use client';

import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { SlotSelection, formatSlotRange } from '@/lib/time-slots';

interface StickyBookingBarProps {
  visible: boolean;
  selectedDate: Date | undefined;
  confirmedTime: SlotSelection | null;
  onDateClick: () => void;
  onTimeClick: () => void;
}

export function StickyBookingBar({
  visible,
  selectedDate,
  confirmedTime,
  onDateClick,
  onTimeClick,
}: StickyBookingBarProps) {
  const hasTime = !!confirmedTime?.startSlot && !!confirmedTime?.endSlot;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-400 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <div className="bg-forest/70 backdrop-blur-2xl border-t border-lime/20 shadow-[0_-8px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-5xl mx-auto px-4 py-2.5">
          <div className="flex items-center gap-3">
            <button
              onClick={onDateClick}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] transition-colors"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-lime" />
              <span className="text-white text-sm font-medium">
                {selectedDate ? format(selectedDate, 'EEE, MMM d') : 'No date'}
              </span>
            </button>

            <button
              onClick={onTimeClick}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] transition-colors"
            >
              <Clock className="w-3.5 h-3.5 text-lime" />
              {hasTime ? (
                <span className="text-lime text-sm font-semibold">
                  {formatSlotRange(confirmedTime!.startSlot!, confirmedTime!.endSlot!)}
                </span>
              ) : (
                <span className="text-white/40 text-sm">Select a time</span>
              )}
            </button>

            <div className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
