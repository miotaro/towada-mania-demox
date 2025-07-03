type Sponsor = {
  name: string;
  image: string;
  link: string;
};

type SponsorSectionProps = {
  title: string;
  modifierClass: string; // "--mcb-tl" 
  colClass: string; // "--col-2"
  sponsors: Sponsor[];
};

export default function SponsorSection({
  title,
  modifierClass,
  colClass,
  sponsors,
}: SponsorSectionProps) {
  return (
    <section className="sponsor-section gutter-container">
      <h2 className={`sponsor-section__title ${modifierClass}`}>
        <span>{title}</span>
      </h2>
      <div className={`sponsor-table ${colClass}`}>
        {sponsors.map((sponsor, i) => (
          <figure key={i} className="sponsor-table__item">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <span className="_thumb">
                <img
                  className="u-cover-img"
                  src={sponsor.image}
                  alt={sponsor.name}
                  width="100%"
                  height="auto"
                />
              </span>
              <figcaption className="_caption text-box-center">
                {sponsor.name}
              </figcaption>
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
}
