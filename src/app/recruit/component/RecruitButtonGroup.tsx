import Button from "@/component/Button";

type RecruitButtonGroupProps = {
  link: string;
};

export default function RecruitButtonGroup({ link }: RecruitButtonGroupProps) {
  return (
    <Button
      groupClass="flyer-btn-group"
      linkClass="btn-secondary"
      title="掲載元で見る"
      href={link}
    />
  );
}
