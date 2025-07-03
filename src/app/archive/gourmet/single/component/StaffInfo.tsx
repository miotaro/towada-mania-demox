import Button from "@/component/Button"

export default function StaffInfo() {
  return (
    <>
      <div className="staff-intro">
        <h2 className="staff-intro__title"><span className="tab-label --yellow-a50">お店の人</span></h2>
        <div className="multi-bdr-box">
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
          />
        </div>
      </div>
    </>
  )
}