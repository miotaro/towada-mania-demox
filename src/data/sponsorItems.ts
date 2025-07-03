export type Sponsor = {
  name: string;
  image: string;
  link: string;
};

export type SponsorSection = {
  title: string;
  modifierClass: string;
  colClass: string;
  sponsors: Sponsor[];
};

export const sponsorSections: SponsorSection[] = [
  {
    title: "スペシャルスポンサー",
    modifierClass: "--mcb-tr",
    colClass: "--col-1",
    sponsors: [
      {
        name: "みずほ証券株式会社(Mizuho Securities Co., Ltd.)",
        image: "/img/sponsor_sample01.webp",
        link: "#",
      },
      {
        name: "SMBC日興証券株式会社(SMBC Nikko Securities Inc.)",
        image: "/img/sponsor_sample02.webp",
        link: "#",
      },
    ],
  },
  {
    title: "ゴールドスポンサー",
    modifierClass: "--mcb-tl",
    colClass: "--col-2",
    sponsors: [
      {
        name: "大和証券株式会社(Daiwa Securities Co. Ltd.)",
        image: "/img/sponsor_sample03.webp",
        link: "#",
      },
      {
        name: "ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)",
        image: "/img/sponsor_sample04.webp",
        link: "#",
      },
      {
        name: "大和証券株式会社(Daiwa Securities Co. Ltd.)",
        image: "/img/sponsor_sample03.webp",
        link: "#",
      },
      {
        name: "ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)",
        image: "/img/sponsor_sample04.webp",
        link: "#",
      },
    ],
  },
  {
    title: "シルバースポンサー",
    modifierClass: "--mcb-tl",
    colClass: "--col-2",
    sponsors: [
      {
        name: "大和証券株式会社(Daiwa Securities Co. Ltd.)",
        image: "/img/sponsor_sample03.webp",
        link: "#",
      },
      {
        name: "ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)",
        image: "/img/sponsor_sample04.webp",
        link: "#",
      },
      {
        name: "大和証券株式会社(Daiwa Securities Co. Ltd.)",
        image: "/img/sponsor_sample03.webp",
        link: "#",
      },
      {
        name: "ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)",
        image: "/img/sponsor_sample04.webp",
        link: "#",
      },
    ],
  },
  {
    title: "ブロンズスポンサー",
    modifierClass: "--mcb-tl",
    colClass: "--col-2",
    sponsors: [
      {
        name: "大和証券株式会社(Daiwa Securities Co. Ltd.)",
        image: "/img/sponsor_sample03.webp",
        link: "#",
      },
      {
        name: "ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)",
        image: "/img/sponsor_sample04.webp",
        link: "#",
      },
      {
        name: "大和証券株式会社(Daiwa Securities Co. Ltd.)",
        image: "/img/sponsor_sample03.webp",
        link: "#",
      },
      {
        name: "ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)",
        image: "/img/sponsor_sample04.webp",
        link: "#",
      },
    ],
  },
  {
    title: "レギュラースポンサー",
    modifierClass: "--mcb-sb",
    colClass: "--col-3",
    sponsors: [
      {
        name: "大和証券株式会社(Daiwa Securities Co. Ltd.)",
        image: "/img/sponsor_sample03.webp",
        link: "#",
      },
      {
        name: "ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)",
        image: "/img/sponsor_sample04.webp",
        link: "#",
      },
      {
        name: "大和証券株式会社(Daiwa Securities Co. Ltd.)",
        image: "/img/sponsor_sample03.webp",
        link: "#",
      },
      {
        name: "ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)",
        image: "/img/sponsor_sample04.webp",
        link: "#",
      },
    ],
  },
];
