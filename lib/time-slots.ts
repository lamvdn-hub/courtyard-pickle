export interface TimeSlot {
  time: string;
  label: string;
  available: boolean;
  period: 'morning' | 'afternoon' | 'evening';
}

export interface SlotSelection {
  startSlot: string | null;
  endSlot: string | null;
}

const PERIOD_BOUNDARIES = {
  morning: { start: 6, end: 11.5 },
  afternoon: { start: 12, end: 17.5 },
  evening: { start: 18, end: 22 },
} as const;

function getPeriod(hour: number): 'morning' | 'afternoon' | 'evening' {
  if (hour < 12) return 'morning';
  if (hour < 18) return 'afternoon';
  return 'evening';
}

function formatTimeLabel(hour: number, minute: number): string {
  const h = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const m = minute === 0 ? '' : ':30';
  return `${h}${m}`;
}

function formatTime24(hour: number, minute: number): string {
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}

export function generateSlots(occupiedSlots: string[] = []): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const startHour = PERIOD_BOUNDARIES.morning.start;
  const endHour = PERIOD_BOUNDARIES.evening.end;

  for (let h = startHour; h <= endHour; h++) {
    for (const m of [0, 30]) {
      const totalHours = h + m / 60;
      if (totalHours > endHour) break;

      const time = formatTime24(h, m);
      slots.push({
        time,
        label: formatTimeLabel(h, m),
        available: !occupiedSlots.includes(time),
        period: getPeriod(h),
      });
    }
  }

  return slots;
}

export function getSlotsByPeriod(slots: TimeSlot[]) {
  return {
    morning: slots.filter((s) => s.period === 'morning'),
    afternoon: slots.filter((s) => s.period === 'afternoon'),
    evening: slots.filter((s) => s.period === 'evening'),
  };
}

export function isSlotInRange(slotTime: string, start: string | null, end: string | null): boolean {
  if (!start || !end) return false;
  return slotTime > start && slotTime < end;
}

export function hasOccupiedInRange(slots: TimeSlot[], start: string, end: string): boolean {
  return slots.some((s) => s.time >= start && s.time <= end && !s.available);
}

export function formatDuration(start: string, end: string): string {
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  const minutes = (eh * 60 + em) - (sh * 60 + sm);

  if (minutes < 60) return `${minutes} min`;
  const hours = minutes / 60;
  if (hours === 1) return '1 hr';
  return `${hours} hrs`;
}

export function formatSlotRange(start: string, end: string): string {
  const startSlot = { h: parseInt(start.split(':')[0]), m: parseInt(start.split(':')[1]) };
  const endSlot = { h: parseInt(end.split(':')[0]), m: parseInt(end.split(':')[1]) };
  return `${formatTimeLabel(startSlot.h, startSlot.m)} \u2013 ${formatTimeLabel(endSlot.h, endSlot.m)}`;
}
