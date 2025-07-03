export default function EventTitle() {
  return (
    <>
      <div className="events-intro gutter-container">
        <h1 className="events-intro__title">
          <img src="/img/event_cal_text.svg" width="100%" height="auto" alt="イベントカレンダー" />
        </h1>
        <p className="events-intro__text">
          カレンダーの日付を選択すると、その日のイベント一覧を見ることができます。
        </p>
      </div>
    </>
  )
}