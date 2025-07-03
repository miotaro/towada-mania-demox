type RecruitHeaderProps = {
  isNew?: boolean;
  title: string;
  jobType: string;
  companyName: string;
  location: string;
  employmentType: string;
  children: React.ReactNode
};

export default function RecruitDetailHeader({
  isNew = false,
  title,
  jobType,
  companyName,
  location,
  employmentType,
  children
}: RecruitHeaderProps) {
  return (
    <header className="recruit-head">
      {isNew && <span className="recruit-head__label">NEW</span>}
      <h1 className="recruit-head__title">{title}</h1>
      <ul className="recruit-head__data recruit-dtl-section">
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
      {children}
    </header>
  );
}
