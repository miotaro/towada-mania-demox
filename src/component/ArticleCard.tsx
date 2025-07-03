import NewMark from "./NewMark";

type ArticleCardProps = {
  size?: "lg" | "sm";
  isPR?: boolean;
  category: string;
  title: string;
  tags: string[];
  contributorName: string;
  contributorImg?: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  showNewMark?: boolean;
};

export default function ArticleCard({
  size = "sm",
  isPR = false,
  category,
  title,
  tags,
  contributorName,
  contributorImg = "/img/no_img_contributor01.webp",
  imageSrc,
  imageAlt = "",
  href = "#",
  showNewMark = false,
}: ArticleCardProps) {
  const cardClass = `article-card --card-${size}${isPR ? " --PR" : ""}`;

  return (
    <article className={cardClass} data-category="event">
      <a className="article-card__link" href={href}>
        {showNewMark && <NewMark />}
        <p className="article-card__cat">{category}</p>
        <figure className="article-card__thumb">
          <img className="u-cover-img" src={imageSrc} width="100%" height="auto" alt={imageAlt} />
        </figure>
        <div className="article-card__ttlcont">
          <h2 className="article-card__title">{title}</h2>
          <div className="post-contributor">
            <div className="_icon"><img className="u-cover-img" src={contributorImg} width="100%" height="auto" alt="" /></div>
            <p className="_name">{contributorName}</p>
          </div>
        </div>
        <div className="article-card__tags">
          {tags.map((tag, index) => (
            <span className="_tag" key={index}>{tag}</span>
          ))}
        </div>
      </a>
    </article>
  )
}