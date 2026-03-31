'use client';

import { useState, useMemo, useCallback } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isBefore,
  format,
  eachDayOfInterval,
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SheetCalendarProps {
  confirmedDate: Date;
  onConfirm: (date: Date) => void;
  onBack: () => void;
}

const DAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export function SheetCalendar({ confirmedDate, onConfirm, onBack }: SheetCalendarProps) {
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(confirmedDate));
  const [highlighted, setHighlighted] = useState<Date>(confirmedDate);

  const today = useMemo(() => new Date(new Date().setHours(0, 0, 0, 0)), []);
  const todayMonth = useMemo(() => startOfMonth(today), [today]);

  const canGoPrev = useMemo(
    () => viewMonth > todayMonth,
    [viewMonth, todayMonth]
  );

  const days = useMemo(() => {
    const monthStart = startOfMonth(viewMonth);
    const monthEnd = endOfMonth(viewMonth);
    const calStart = startOfWeek(monthStart, { weekStartsOn: 1 });
    const calEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
    return eachDayOfInterval({ start: calStart, end: calEnd });
  }, [viewMonth]);

  const handlePrev = useCallback(() => {
    if (canGoPrev) setViewMonth((m) => subMonths(m, 1));
  }, [canGoPrev]);

  const handleNext = useCallback(() => {
    setViewMonth((m) => addMonths(m, 1));
  }, []);

  const isDifferent = !isSameDay(highlighted, confirmedDate);

  return (
    <div className="px-5 py-3">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.1] transition-colors disabled:opacity-20 disabled:cursor-default"
        >
          <ChevronLeft className="w-4 h-4 text-white/70" />
        </button>
        <span className="text-sm font-medium text-white">
          {format(viewMonth, 'MMMM yyyy')}
        </span>
        <button
          onClick={handleNext}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.1] transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map((d, i) => (
          <div
            key={i}
            className="h-8 flex items-center justify-center text-[10px] font-semibold uppercase tracking-widest text-white/30"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {days.map((day, i) => {
          const inMonth = isSameMonth(day, viewMonth);
          const isPast = isBefore(day, today) && !isSameDay(day, today);
          const isToday = isSameDay(day, today);
          const isHighlighted = isSameDay(day, highlighted);
          const tappable = inMonth && !isPast;

          let cellClass =
            'h-10 flex items-center justify-center rounded-md text-sm transition-all duration-150 ';

          if (!inMonth) {
            cellClass += 'text-transparent cursor-default';
          } else if (isHighlighted) {
            cellClass += 'bg-lime text-forest font-medium';
          } else if (isPast) {
            cellClass += 'text-white/20 cursor-default';
          } else if (isToday) {
            cellClass += 'text-lime border border-lime/30 cursor-pointer hover:bg-white/[0.06]';
          } else {
            cellClass += 'text-white/65 cursor-pointer hover:bg-white/[0.06]';
          }

          return (
            <button
              key={i}
              disabled={!tappable}
              onClick={() => tappable && setHighlighted(day)}
              className={cellClass}
            >
              {inMonth ? day.getDate() : ''}
            </button>
          );
        })}
      </div>

      <div className="pt-4 pb-2">
        <button
          onClick={() => isDifferent && onConfirm(highlighted)}
          disabled={!isDifferent}
          className={`w-full h-11 rounded-[10px] text-[13px] font-medium transition-all duration-200 ${
            isDifferent
              ? 'bg-lime text-forest hover:bg-lime-dim active:scale-[0.98]'
              : 'bg-lime/40 text-forest/60 cursor-default'
          }`}
        >
          Confirm date
        </button>
      </div>
    </div>
  );
}
