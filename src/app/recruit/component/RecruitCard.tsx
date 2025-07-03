type RecruitCardProps = {
  isNew?: boolean;
  title: string;
  jobType: string;
  companyName: string;
  location: string;
  employmentType: string;
  detailLink: string;
};

export default function RecruitCard({
  isNew = false,
  title,
  jobType,
  companyName,
  location,
  employmentType,
  detailLink,
}: RecruitCardProps) {
  return (
    <article className="recruit-card">
      {isNew && <span className="recruit-head__label">NEW</span>}
      <h2 className="recruit-head__title">{title}</h2>
      <ul className="recruit-head__data">
        <li className="recruit-head__data-item">
          <div className="_icon"><svg viewBox="0 0 20 20"><use href="/img/recruit-icon.svg#bag" /></svg></div>
          <p className="_text">{jobType}</p>
        </li>
        <li className="recruit-head__data-item">
          <div className="_icon"><svg viewBox="0 0 20 20"><use href="/img/recruit-icon.svg#building" /></svg></div>
          <p className="_text">{companyName}</p>
        </li>
        <li className="recruit-head__data-item">
          <div className="_icon"><svg viewBox="0 0 20 20"><use href="/img/recruit-icon.svg#map-pin" /></svg></div>
          <p className="_text">{location}</p>
        </li>
        <li className="recruit-head__data-item">
          <div className="_icon"><svg viewBox="0 0 20 20"><use href="/img/recruit-icon.svg#user" /></svg></div>
          <p className="_text">{employmentType}</p>
        </li>
      </ul>
      <a className="recruit-card__btn" href={detailLink}>
        詳細を見る<span className="btn-arrow"></span>
      </a>
    </article>
  );
}
