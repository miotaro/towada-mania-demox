type CalendarOptions = {
  Color?: string;
  LinkColor?: string;
  NavShow?: boolean;
  NavVertical?: boolean;
  NavLocation?: string;
  DateTimeShow?: boolean;
  DateTimeFormat?: string;
  DatetimeLocation?: string;
  EventClick?: string;
  EventTargetWholeDay?: boolean;
  DisabledDays?: number[];
  ModelChange?: any;
};

export class Calendar {
  Options: CalendarOptions;
  Model: any;
  Today: Date & { Month?: number; Year?: number };
  Selected: Date & {
    Month?: number;
    Year?: number;
    Days?: number;
    FirstDay?: number;
    LastDay?: number;
  };
  Prev: Date & { Days?: number };

  constructor(model: any, options: CalendarOptions, date?: Date) {
    this.Options = {
      Color: '',
      LinkColor: '',
      NavShow: true,
      NavVertical: false,
      NavLocation: '',
      DateTimeShow: true,
      DateTimeFormat: 'mmm, yyyy',
      DatetimeLocation: '',
      EventClick: '',
      EventTargetWholeDay: false,
      DisabledDays: [],
      ModelChange: model
    };

    for (const key in options) {
  if (Object.prototype.hasOwnProperty.call(options, key)) {
    const optionKey = key as keyof CalendarOptions;
    this.Options[optionKey] = options[optionKey];
  }
}

    this.Model = model || {};
    this.Today = new Date();
    this.Selected = date || new Date();

    this.Today.Month = this.Today.getMonth();
    this.Today.Year = this.Today.getFullYear();

    this.Selected.Month = this.Selected.getMonth();
    this.Selected.Year = this.Selected.getFullYear();

    this.Selected.Days = new Date(this.Selected.Year, this.Selected.Month + 1, 0).getDate();
    this.Selected.FirstDay = new Date(this.Selected.Year, this.Selected.Month, 1).getDay();
    this.Selected.LastDay = new Date(this.Selected.Year, this.Selected.Month + 1, 0).getDay();

    this.Prev = new Date(this.Selected.Year, this.Selected.Month - 1, 1);
    if (this.Selected.Month === 0) {
      this.Prev = new Date(this.Selected.Year - 1, 11, 1);
    }
    this.Prev.Days = new Date(this.Prev.getFullYear(), this.Prev.getMonth() + 1, 0).getDate();
  }

  render(el: HTMLElement): void {
    el.innerHTML = ""; // 既存の内容をクリア

    const mainSection = document.createElement("div");
    mainSection.className = "cld-main";

    const card = document.createElement("div");
    card.className = "cld-card";

    // 年月表示ヘッダー
    const header = document.createElement("div");
    header.className = "cld-datetime";
    header.innerHTML = `<span class="year">${this.Selected.Year}</span>年<span class="month">${this.Selected.Month! + 1}</span>月`;
    mainSection.appendChild(header);

    // 曜日ラベル
    const labels = document.createElement("div");
    labels.className = "cld-labels";
    ["日", "月", "火", "水", "木", "金", "土"].forEach(label => {
      const el = document.createElement("div");
      el.className = "cld-label";
      el.textContent = label;
      labels.appendChild(el);
    });
    card.appendChild(labels);

    // 日付部分
    const days = document.createElement("div");
    days.className = "cld-days";

    // 前月の残り日数
    for (let i = 0; i < this.Selected.FirstDay!; i++) {
      const day = document.createElement("div");
      day.className = "cld-day prevMonth";
      const num = this.Prev.Days! - this.Selected.FirstDay! + (i + 1);
      day.innerHTML = `<p class="cld-number">${num}</p>`;
      days.appendChild(day);
    }

    // 今月の日数
    for (let i = 1; i <= this.Selected.Days!; i++) {
      const day = document.createElement("div");
      day.className = "cld-day currMonth";

      const date = new Date(this.Selected.Year!, this.Selected.Month!, i);
      const isToday = this.Today.getFullYear() === date.getFullYear() &&
                      this.Today.getMonth() === date.getMonth() &&
                      this.Today.getDate() === i;

      day.innerHTML = `<p class="cld-number">${i}</p>`;
      days.appendChild(day);
    }

    // 次月の日数（カレンダーの合計マスを42に揃えるため）
    const totalCells = this.Selected.FirstDay! + this.Selected.Days!;
    const extra = totalCells <= 35 ? 42 - totalCells : 0;

    for (let i = 1; i <= extra; i++) {
      const day = document.createElement("div");
      day.className = "cld-day nextMonth";
      day.innerHTML = `<p class="cld-number">${i}</p>`;
      days.appendChild(day);
    }

    card.appendChild(days);
    mainSection.appendChild(card);
    el.appendChild(mainSection);
  }
}
