type Props = {
  size: "lg" | "sm";
  imageSrc: string;
  isNew?: boolean;
  title: string;
  dateRange: string;
  link: string;
};

export default function FlyerCard({
  size,
  imageSrc,
  isNew = false,
  title,
  dateRange,
  link,
}: Props) {
  return (
    <article className={`flyer-list__card card-${size}`}>
      <a href={link}>
        {isNew && (
          <p className="_label">
            <span>NEW</span>
          </p>
        )}
        <figure className="_thumb">
          <img
            className="u-cover-img"
            src={imageSrc}
            width="100%"
            height="auto"
            alt=""
          />
        </figure>
        <div className="flyer-info">
          <p className="flyer-info__date">
            <time dateTime="">{dateRange}まで</time>
          </p>
          <h3 className="flyer-info__title">{title}</h3>
        </div>
      </a>
    </article>
  );
}
