export const recruitList = [
  {
    isNew: true,
    title: "明るく楽しく！自由な環境でライフワークバランスを整えられる職場",
    jobType: "WEBデザイナー",
    companyName: "株式会社トワダマニア",
    location: "青森県十和田市",
    employmentType: "正社員",
    detailLink: "/recruit/detail"
  },
  {
    isNew: false,
    title: "とっても楽しい職場",
    jobType: "WEBエンジニア",
    companyName: "株式会社ビーコーズ",
    location: "青森県十和田市",
    employmentType: "準社員",
    detailLink: "/recruit/detail"
  },
];

// 会社概要===================================================================

export type CompanyInfoItem = {
  label: string;
  value: string;
};

export const companyInfoItems: CompanyInfoItem[] = [
  { label: "会社名", value: "トワダマニア株式会社" },
  { label: "業種", value: "製造業" },
  { label: "代表者", value: "山田 太郎" },
  { label: "設立", value: "2024年6月9日" },
  { label: "所在地", value: "青森県十和田市" },
  { label: "電話番号", value: "0123-45-6789" },
  { label: "メール", value: "towada@gmail.com" },
  { label: "HP", value: "http://www.towada.jp" },
];

// 会社詳細==================================================================

export type RecruitSectionItem = {
  title: string;
  content: string[] | string;
};

export const recruitSections: RecruitSectionItem[] = [
  {
    title: "勤務時間",
    content: "完全シフト制／自由出勤OK／１日３時間～OK",
  },
  {
    title: "福利厚生",
    content: [
      "雇用保険",
      "厚生年金",
      "労災保険",
      "健康保険",
      "交通費支給あり",
      "寮・社宅・住宅手当あり",
      "U・Iターン支援あり",
      "資格取得支援・手当あり",
      "育児支援・託児所あり",
      "時短勤務制度あり",
    ],
  },
  {
    title: "休日休暇",
    content: [
      "完全週休2日制",
      "年間休日120日以上",
      "夏季休暇",
      "年末年始休暇",
      "有給休暇",
      "慶弔休暇",
      "GW休暇",
      "ハネムーン休暇",
      "産前産後休暇（取得実績あり）etc...",
    ],
  },
  {
    title: "業務内容",
    content: "業務内容のテキスト1"
  },
  {
    title: "業務内容",
    content: "業務内容のテキスト2"
  },
  {
    title: "業務内容",
    content: "業務内容のテキスト3"
  },
];
