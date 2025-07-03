type RecruitSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function RecruitSection({ title, children }: RecruitSectionProps) {
  return (
    <section className="recruit-dtl-section">
      <h2 className="recruit-dtl-section__title">{title}</h2>
        {children}
    </section>
  );
}
