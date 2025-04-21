import { Button, Icon, Popover, List, ListButton, f7 } from 'framework7-react';
import { Calendar } from 'framework7/types';
import { useEffect, useRef, useState } from 'react';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const years = Array.from({ length: 40 }, (_, i) => 2010 + i);

const CustomToolbar = ({
  month,
  year,
  onPrev,
  onNext,
  onSelectMonth,
  onSelectYear,
}: {
  month: string;
  year: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectMonth: (monthIndex: number) => void;
  onSelectYear: (year: number) => void;
}) => {
  return (
    <div className="flex flex-row items-center justify-between bg-white py-5">
      <Button onClick={onPrev}>
        <Icon f7="chevron_left" size={16} className="text-gradient" />
      </Button>

      <div className="text-gradient flex items-center gap-2">
        <Button
          popoverOpen="#month-pop"
          className="text-gradient gap-1 rounded-full border border-secondary"
        >
          {month}
          <Icon f7="chevron_down" size={12} className="text-gradient" />
        </Button>

        <Button
          popoverOpen="#year-pop"
          className="text-gradient gap-1 rounded-full border border-secondary"
        >
          {year}
          <Icon f7="chevron_down" size={12} className="text-gradient" />
        </Button>
      </div>

      <Button onClick={onNext}>
        <Icon f7="chevron_right" size={16} className="text-gradient" />
      </Button>

      <Popover id="month-pop">
        <List>
          {monthNames.map((m, ids) => (
            <ListButton
              key={ids}
              onClick={() => onSelectMonth(ids)}
              popoverClose={true}
              className="text-gradient"
            >
              <span className="text-gradient">{m}</span>
            </ListButton>
          ))}
        </List>
      </Popover>

      <Popover id="year-pop">
        <List>
          {years.map((y, ids) => (
            <ListButton key={ids} onClick={() => onSelectYear(y)} popoverClose={true}>
              <span className="text-gradient">{y}</span>
            </ListButton>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export const CustomCalendar = ({ controlValue }: { controlValue: string }) => {
  const calendarEl = useRef<HTMLDivElement | null>(null);
  const calendarInline = useRef<Calendar.Calendar | null>(null);

  const [calendarData, setCalendarData] = useState({
    monthIndex: new Date().getMonth(),
    yearValue: new Date().getFullYear(),
  });

  const jumpTo = (label: string) => {
    if (!calendarInline.current) return;

    const now = new Date();
    let target = new Date(now);

    if (label === 'Yesterday') target.setDate(now.getDate() - 1);
    else if (label === 'Last Month') target = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    else if (label === 'This Month') target = new Date(now.getFullYear(), now.getMonth(), 1);

    calendarInline.current.setValue([target]);
    calendarInline.current.setYearMonth(target.getFullYear(), target.getMonth(), 200);
    setCalendarData({
      monthIndex: target.getMonth(),
      yearValue: target.getFullYear(),
    });
  };

  useEffect(() => {
    if (calendarEl.current && !calendarInline.current) {
      calendarInline.current = f7.calendar.create({
        containerEl: calendarEl.current,
        value: [new Date()],
        firstDay: 0,
        toolbar: false,
        on: {
          init(c) {
            setCalendarData({
              monthIndex: c.currentMonth,
              yearValue: c.currentYear,
            });
            jumpTo(controlValue);
          },
          monthYearChangeStart(c) {
            setCalendarData({
              monthIndex: c.currentMonth,
              yearValue: c.currentYear,
            });
          },
        },
      });
    }
  }, [controlValue]);

  useEffect(() => {
    if (calendarInline.current) {
      jumpTo(controlValue);
    }
  }, [controlValue]);

  return (
    <div className="no-padding max-w-md overflow-hidden rounded-xl">
      <CustomToolbar
        month={monthNames[calendarData.monthIndex]}
        year={calendarData.yearValue}
        onPrev={() => {
          if (calendarInline.current) {
            calendarInline.current?.prevMonth(10);
          }
        }}
        onNext={() => {
          if (calendarInline.current) {
            calendarInline.current?.nextMonth(10);
          }
        }}
        onSelectMonth={(m) => {
          calendarInline.current?.setYearMonth(calendarData.yearValue, m, 200);
          setCalendarData({ ...calendarData, monthIndex: m });
        }}
        onSelectYear={(y) => {
          calendarInline.current?.setYearMonth(y, calendarData.monthIndex, 200);
          setCalendarData({ ...calendarData, yearValue: y });
        }}
      />
      <hr className="pb-8" />
      <div ref={calendarEl} />
    </div>
  );
};
