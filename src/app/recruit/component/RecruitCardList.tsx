import RecruitCard from "./RecruitCard";

type Recruit = {
  isNew?: boolean;
  title: string;
  jobType: string;
  companyName: string;
  location: string;
  employmentType: string;
  detailLink: string;
};

type Props = {
  recruitList: Recruit[];
};

export default function RecruitCardList({ recruitList }: Props) {
  return (
    <div className="recruit-result serch-result">
      {recruitList.map((item, i) => (
        <RecruitCard key={i} {...item} />
      ))}
    </div>
  );
}
