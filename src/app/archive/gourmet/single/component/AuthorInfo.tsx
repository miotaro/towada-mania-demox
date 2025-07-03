import Button from "@/component/Button"

export default function AuthorInfo() {
  return (
    <>
      <div className="author-info">
        <h2 className="author-info__title"><span className="tab-label --orange-a50">この記事を書いた人</span></h2>
        <div className="author-info__badge">
          <svg viewBox="0 0 53 53"><use href="../../img/badges.svg#badge-md"></use></svg>
          <div className="_logo"><img className="" src="../../img/logo_type01.svg" width="100%" height="auto" alt="トワダマニア" /></div>
        </div>
        <div className="author-info__inner yeltb-box --gc-fulled">
          <figure className="person-about">
            <span className="person-about__thumb"><img className="u-cover-img" src="../../img/contributor_sample.webp" width="100%" height="auto" alt="" /></span>
            <figcaption className="person-about__title">
              <span className="_position">カフェバー トワダマニア 店主</span>
              <span className="_name">山田 太郎</span>
            </figcaption>
            <p className="person-about__text">
              美食を求めて世界中を旅する、食の探検家。特にフレンチとイタリアンには目がない。休日は必ず新しいレストランを開拓し、味覚の探求に余念がない。最近は、発酵食品にも興味津々。
            </p>
            <hr />
            <ul className="person-about__list">
              <li>経歴など補足内容</li>
              <li>ああああああああああああああああ</li>
            </ul>
          </figure>

          <Button
            groupClass="person-about__btns"
            linkClass="btn-primary"
            title="もっと詳しく"
            href="#"
          >
            <img src="/img/character06_02.png" width="391" height="138" alt="" />
          </Button>
        </div>
      </div>
    </>
  )
}