import { useCalendar } from "./useDateStateCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import { CalendarEvent } from "./CalendarTypes";
import { useEffect } from "react";
import { eventData } from "@/data/eventData";

type CalendarProps = {
  onRendered?: () => void;
}
const dayLabels = ["日", "月", "火", "水", "木", "金", "土"];

function isToday(date: Date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
function isPastDate(date: Date) {
  const today = new Date();
  return date < today;
}

export default function Calendar({onRendered}: CalendarProps) {
  useEffect(() => {
    onRendered?.();
  });
  
  const {
    today,
    selectedDate,
    year,
    month,
    firstDayOfMonth,
    daysInMonth,
    goToPrevMonth,
    goToNextMonth
  } = useCalendar();

  const convertedEvents: CalendarEvent[] = eventData.flatMap(event => 
    event.events.map(e => ({
      title: e.title,
      date: new Date(event.date),
    }))
  );

  return (
    <div className="cld-main">
      <CalendarHeader
          year={year}
          month={month}
          onPrev={goToPrevMonth}
          onNext={goToNextMonth}
        />
      <div className="cld-card">

        {/* 曜日ラベル */}
        <div className="cld-labels">
          {dayLabels.map((label, index) => (
            <div key={index} className="cld-label">{label}</div>
          ))}
        </div>

        <CalendarDays
          year={year}
          month={month}
          today={today}
          firstDayOfMonth={firstDayOfMonth}
          daysInMonth={daysInMonth}
          events={convertedEvents}
          isToday={isToday}
          isPastDate={isPastDate}
        />
      </div>
    </div>
  );
}
