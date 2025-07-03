import { companyInfoItems } from "@/data/RecruitItems"; // ← 例：データファイルのパス

type CompanyInfoItem = {
  label: string;
  value: string;
};

type Props = {
  items: CompanyInfoItem[];
};

export default function RecruitCompanyInfo({ items }: Props) {
  return (
    <dl className="sb-info-table dl-table">
      {items.map((item, index) => (
        <div key={index} className="_row">
          <dt className="_head">{item.label}</dt>
          <dd className="_desc">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
