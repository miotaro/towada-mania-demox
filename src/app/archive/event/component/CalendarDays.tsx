import { useModalStore } from "@/store/modalStore";
import { useEventDateStore } from "@/store/selectedEventStore";
import { CalendarEvent } from "./CalendarTypes";
import { eventData } from "@/data/eventData";

type Props = {
  year: number;
  month: number;
  today: Date;
  firstDayOfMonth: number;
  daysInMonth: number;
  events: CalendarEvent[];
  isToday: (date: Date) => boolean;
  isPastDate: (date: Date) => boolean;
};

export default function CalendarDays({
  year,
  month,
  today,
  firstDayOfMonth,
  daysInMonth,
  events,
  isToday,
  isPastDate,
}: Props) {
  
  const open = useModalStore((state) => state.open);
  const setEventDate = useEventDateStore((state) => state.setEventDate); //日付のステート

  //firstDayOfMonth = 2
  //daysInMonth = 31
  //(total = 2 + 31) / 7 = 4.714 → Math.ceil() で 5週 → 5×7=35セル
  const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7; 
  const daysArray = Array.from({ length: totalCells }, (_, index) => {
    //2025/7の場合、dayNumber===0の時は6/30
    const dayNumber = index - firstDayOfMonth + 1;
    const date = new Date(year, month, dayNumber);
    //ループ中の日付が表示中の月と同じかどうか
    const isCurrentMonth = date.getMonth() === month;

    const isoDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    // その日付にイベントがあるかを判定
    const hasEvent = eventData.some(event => event.date === isoDate);

    // 前月・次月の日付は空白として表示（クラスで見えなくする）
    if (!isCurrentMonth && date < new Date(year, month, 1)) {
      return (
        <div key={index} className="cld-day prevMonth">
          {/* 空白マス */}
          <p className="cld-number"></p>
        </div>
      );
    } else if (!isCurrentMonth && date > new Date(year, month, daysInMonth)) {
      return (
        <div key={index} className="cld-day nextMonth">
          {/* 空白マス */}
          <p className="cld-number"></p>
        </div>
      );
    }

    // クラス構築
    let classNames = "cld-day";
    if (isToday(date) && isCurrentMonth) classNames += " today";
    if (isPastDate(date)) classNames += " event-end";
    const numberClassNames = `cld-number ${hasEvent ? "eventday" : ""}`;

    
    const eventsForDay = events.filter(event =>
      event.date.getFullYear() === date.getFullYear() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getDate() === date.getDate()
    );

    return (
      <div 
        key={index} className={classNames} 
        onClick={() => {
          if (hasEvent) {
            setEventDate(isoDate);
            open('event');
          }
        }}
      >
        <p 
          className={numberClassNames}
          //ISO8601形式 例："2025-07-12T00:00:00.000Z"
          data-date={`${date.toISOString()}`}
          data-num={eventsForDay.length > 0 ? eventsForDay.length : undefined}
        >
          {dayNumber}
        </p>
      </div>
    );
  });

  return <div className="cld-days">{daysArray}</div>;
}