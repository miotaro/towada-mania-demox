export type EventItem = {
  title: string;
  startTime: string; // ISO 形式 or "YYYY-M-D HH:MM"
  endTime: string;
  image: string;
  tags: string[];
  href?: string;
};

export type EventData = {
  date: string; // 例: "2025-5-2"
  dow: string;  // 例: "金"
  events: EventItem[];
};

export const eventData: EventData[] = [
  {
    date: "2025-05-02",
    dow: "金",
    events: [
      {
        title: "十和田湖フェスティバル",
        startTime: "2025-05-02 14:00",
        endTime: "2025-05-02 17:00",
        image: "/img/01_sample.jpg",
        tags: ["家族向け", "洋食", "ランチ"],
        href: "#"
      },
      {
        title: "十和田湖フェスティバル",
        startTime: "2025-05-02 14:00",
        endTime: "2025-05-02 17:00",
        image: "/img/01_sample.jpg",
        tags: ["家族向け", "洋食", "ランチ"],
        href: "#"
      }
    ],
  },
  {
    date: "2025-05-20",
    dow: "火",
    events: [
      {
        title: "アートピクニック",
        startTime: "2025-05-20 10:00",
        endTime: "2025-05-20 16:00",
        image: "/img/01_sample.jpg",
        tags: ["アート", "屋外", "子ども向け"],
        href: "#"
      }
    ]
  },
  {
    date: "2025-07-20",
    dow: "火",
    events: [
      {
        title: "アートピクニック",
        startTime: "2025-07-20 10:00",
        endTime: "2025-07-20 16:00",
        image: "/img/01_sample.jpg",
        tags: ["アート", "屋外", "子ども向け"],
        href: "#"
      }
    ]
  },
];
