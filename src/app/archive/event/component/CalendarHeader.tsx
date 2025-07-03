type Props = {
  year: number;
  month: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function CalendarHeader({ year, month, onPrev, onNext }: Props) {
  return (
    <div className="cld-datetime">
      <div className="cld-btns">
        <span className="_text">前月</span>
        <button type="button" className="cld-nav cld-rwd" onClick={onPrev}>
          <svg viewBox="0 0 18 18">
            <polyline points="10.3 2.4 3.7 9 10.3 15.6" />
          </svg>
        </button>
      </div>

      <div className="cld-head">
        <span className="year">{year}</span>年
        <span className="month">{month + 1}</span>月
      </div>

      <div className="cld-btns">
        <span className="_text">次月</span>
        <button type="button" className="cld-nav cld-fwd" onClick={onNext}>
          <svg viewBox="0 0 18 18">
            <polyline points="7.7 2.4 14.3 9 7.7 15.6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
