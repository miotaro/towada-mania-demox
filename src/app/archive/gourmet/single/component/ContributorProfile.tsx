export default function ContributorProfile() {
  return(
    <>
      <div className="profile-box">
        <div className="profile-box__head">
          <h2 className="_title">
            <svg role="img" aria-label="PROFILE" viewBox="0 0 100 100">
              <path id="circle" className="_circle" d="M 0 50 A 50 50 0 1 1 0 51 z" />
              <text className="_circle-text" textLength="90%"><textPath href="#circle" textLength="90%">PROFILE</textPath></text>
            </svg>
          </h2>
          <div className="_thumb"><img className="u-cover-img" src="../../img/contributor_sample.webp" width="100%" height="auto" alt="" /></div>
        </div>
        <dl className="profile-box__table dl-table">
          <div className="_row">
            <dt className="_head">生年月日</dt>
            <dd className="_desc">1992年8月15日</dd>
          </div>
          <div className="_row">
            <dt className="_head">出身地</dt>
            <dd className="_desc">青森県十和田市</dd>
          </div>
          <div className="_row">
            <dt className="_head">学歴</dt>
            <dd className="_desc">青森調理師専門学校卒御意</dd>
          </div>
          <div className="_row">
            <dt className="_head">経歴</dt>
            <dd className="_desc">
              <ul>
                <li>2013年 東京のフレンチレストランで修行</li>
                <li>2018年　地元十和田市に戻り「カフェ湖畔」にシェフとして就任</li>
              </ul>
            </dd>
          </div>
          <div className="_row">
            <dt className="_head">資格</dt>
            <dd className="_desc">なんかの資格</dd>
          </div>
        </dl>
      </div>
    </>
  )
}