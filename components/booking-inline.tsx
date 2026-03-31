'use client';

import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Search } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { SlotSelection, formatSlotRange, formatDuration } from '@/lib/time-slots';

interface BookingInlineProps {
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  confirmedTime: SlotSelection | null;
  onTimeClick: () => void;
  onCheckAvailability: () => void;
}

export function BookingInline({
  selectedDate,
  onDateSelect,
  confirmedTime,
  onTimeClick,
  onCheckAvailability,
}: BookingInlineProps) {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const hasDate = !!selectedDate;
  const hasTime = !!confirmedTime?.startSlot && !!confirmedTime?.endSlot;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <CalendarIcon className="w-4 h-4 text-lime" />
        <span className="text-sm font-medium text-white">Start by picking your date</span>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex-1">
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left">
                <CalendarIcon className="w-4 h-4 text-lime shrink-0" />
                <span className={selectedDate ? 'text-white text-sm' : 'text-slate-400 text-sm'}>
                  {selectedDate ? format(selectedDate, 'EEEE, MMMM d') : 'Select a date...'}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 bg-forest-light border-white/10"
              align="start"
            >
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  onDateSelect(date);
                  setCalendarOpen(false);
                }}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                className="text-white"
                classNames={{
                  day_selected: 'bg-lime text-forest hover:bg-lime hover:text-forest focus:bg-lime focus:text-forest',
                  day_today: 'bg-white/10 text-white',
                  day: 'h-9 w-9 p-0 font-normal text-white/70 hover:bg-white/10 hover:text-white aria-selected:opacity-100 rounded-lg',
                  head_cell: 'text-slate-400 rounded-md w-9 font-normal text-[0.8rem]',
                  caption_label: 'text-white text-sm font-medium',
                  nav_button: 'h-7 w-7 bg-transparent p-0 text-white/50 hover:text-white hover:bg-white/10 rounded-lg border-0',
                  nav_button_previous: 'absolute left-1',
                  nav_button_next: 'absolute right-1',
                  table: 'w-full border-collapse space-y-1',
                  head_row: 'flex',
                  row: 'flex w-full mt-2',
                  cell: 'h-9 w-9 text-center text-sm p-0 relative rounded-lg',
                  day_outside: 'text-white/20 opacity-50',
                  day_disabled: 'text-white/20 opacity-50',
                  months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                  month: 'space-y-4',
                  caption: 'flex justify-center pt-1 relative items-center',
                  nav: 'space-x-1 flex items-center',
                  day_range_end: 'day-range-end',
                  day_range_middle: '',
                  day_hidden: 'invisible',
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className={`flex-1 transition-all duration-300 ${hasDate ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
          <button
            onClick={onTimeClick}
            disabled={!hasDate}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left h-12"
          >
            <Clock className="w-4 h-4 text-lime shrink-0" />
            {hasTime ? (
              <div className="flex items-center gap-2">
                <span className="text-lime text-sm font-semibold">
                  {formatSlotRange(confirmedTime!.startSlot!, confirmedTime!.endSlot!)}
                </span>
                <span className="text-white/30 text-xs">
                  {formatDuration(confirmedTime!.startSlot!, confirmedTime!.endSlot!)}
                </span>
              </div>
            ) : (
              <span className="text-slate-400 text-sm">Select a time slot...</span>
            )}
          </button>
        </div>

        <Button
          onClick={onCheckAvailability}
          disabled={!hasDate || !hasTime}
          className="bg-lime text-forest font-semibold hover:bg-lime-dim rounded-xl h-12 px-6 transition-all duration-200 hover:shadow-lg hover:shadow-lime/20 shrink-0 disabled:opacity-30"
        >
          <Search className="w-4 h-4 mr-2" />
          Check Availability
        </Button>
      </div>
    </div>
  );
}
