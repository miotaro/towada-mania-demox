'use client'
import Calendar from "./Calendar";
import { useCalendar } from "./useDateStateCalendar";

export default function EventsCalendar() {
  const { selectedDate } = useCalendar();

  const handleCalendarRendered = () => {
    const todayEl = document.querySelector('.cld-day.today') as HTMLElement | null;
    const numberEl = todayEl?.querySelector('.cld-number') as HTMLElement | null;
    const todayFrame = document.querySelector('.today-frame') as HTMLElement | null;
    const calendarEl = document.querySelector('.events-calendar') as HTMLElement | null;
    const displayMonth = selectedDate.getMonth();
    const displayYear = selectedDate.getFullYear();

    if (!todayEl || !numberEl || !todayFrame || !calendarEl) {
      todayFrame?.style.setProperty("display", "none");
      return;
    }
    //cld-numberからISO形式の日付を取得
    const todayDateStr = numberEl.dataset.date;
    if (!todayDateStr) {
      todayFrame.style.display = 'none';
      return;
    }

    const date = new Date(todayDateStr);
    const todayMonth = date.getUTCMonth();
    const todayYear = date.getUTCFullYear();

    //今日の日付じゃないなら
    if (todayMonth !== displayMonth || todayYear !== displayYear) {
      todayFrame.style.display = 'none';
      return;
    }
    //位置とサイズを取得するメソッド
    const dayRect = todayEl.getBoundingClientRect();
    const calendarRect = calendarEl.getBoundingClientRect();

    const top = dayRect.top - calendarRect.top;
    const left = dayRect.left - calendarRect.left;

    todayFrame.style.top = `${top}px`;
    todayFrame.style.left = `${left}px`;
    todayFrame.style.width = `${dayRect.width}px`;
    todayFrame.style.height = `${dayRect.height}px`;
    todayFrame.style.display = 'block';
  };

  return (
    <>
      <div className="events-calendar">
        <div className="today-frame">{/* 今日のフレーム */}</div>
        <div className="bubchar-hdg --left">
          <h2 className="bubchar-hdg__title --type-01">
            <span className="_text">今日の<br />イベントは<br />何かな？</span>
          </h2>
          <span className="bubchar-hdg__chara"><img src="/img/character05.png" width="100%" height="auto" alt="" /></span>
        </div>

        <div className="events-calendar__inner gutter-container">
          <Calendar onRendered={handleCalendarRendered}/>
          <ul className="events-calendar__explanation">
            <li className="events-calendar__exp-item">
              <span className="_icon _today"></span>
              <span className="_text">今日</span>
            </li>
            <li className="events-calendar__exp-item">
              <span className="_icon _badge-ev">1</span>
              <span className="_text">イベント件数</span>
            </li>
            <li className="events-calendar__exp-item">
              <span className="_icon _badge-end">1</span>
              <span className="_text">終了したイベント</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}