'use client';

import { useState, useCallback } from 'react';
import { TimeSlot, SlotSelection, hasOccupiedInRange } from '@/lib/time-slots';

export function useTimeSlotSelection(slots: TimeSlot[]) {
  const [selection, setSelection] = useState<SlotSelection>({ startSlot: null, endSlot: null });
  const [rangeError, setRangeError] = useState(false);

  const handleSlotTap = useCallback(
    (slotTime: string) => {
      const slot = slots.find((s) => s.time === slotTime);
      if (!slot || !slot.available) return;

      setSelection((prev) => {
        if (prev.startSlot && prev.endSlot) {
          if (slotTime === prev.startSlot || slotTime === prev.endSlot) {
            setRangeError(false);
            return { startSlot: null, endSlot: null };
          }
          setRangeError(false);
          return { startSlot: slotTime, endSlot: null };
        }

        if (!prev.startSlot) {
          setRangeError(false);
          return { startSlot: slotTime, endSlot: null };
        }

        if (slotTime === prev.startSlot) {
          setRangeError(false);
          return { startSlot: null, endSlot: null };
        }

        if (slotTime < prev.startSlot) {
          setRangeError(false);
          return { startSlot: slotTime, endSlot: null };
        }

        const hasOccupied = hasOccupiedInRange(slots, prev.startSlot, slotTime);
        setRangeError(hasOccupied);

        return { startSlot: prev.startSlot, endSlot: slotTime };
      });
    },
    [slots]
  );

  const resetSelection = useCallback(() => {
    setSelection({ startSlot: null, endSlot: null });
    setRangeError(false);
  }, []);

  const confirmSelection = useCallback((): SlotSelection | null => {
    if (!selection.startSlot || !selection.endSlot || rangeError) return null;
    return { ...selection };
  }, [selection, rangeError]);

  const isComplete = !!selection.startSlot && !!selection.endSlot && !rangeError;

  return {
    selection,
    rangeError,
    isComplete,
    handleSlotTap,
    resetSelection,
    confirmSelection,
    setSelection,
  };
}
