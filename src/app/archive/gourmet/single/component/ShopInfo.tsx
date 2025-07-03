export default function ShopInfo() {
  return (
    <>
      <div className="shop-info">
        <h2 className="shop-info__title"><span className="tab-label --pink-a50">店舗情報</span></h2>
        <div className="multi-bdr-box">
          <h3 className="shop-info__name text-box-center">カフェバー トワダマニア</h3>
          <dl className="shop-info__table dl-table">
            <div className="_row">
              <dt className="_head">住所</dt>
              <dd className="_desc">青森県十和田市〇〇〇〇〇〇〇〇〇〇〇</dd>
            </div>
            <div className="_row">
              <dt className="_head">営業時間</dt>
              <dd className="_desc">18:00~24:00</dd>
            </div>
            <div className="_row">
              <dt className="_head">定休日</dt>
              <dd className="_desc">月曜</dd>
            </div>
            <div className="_row">
              <dt className="_head">駐車場</dt>
              <dd className="_desc">あり（店舗前10台）</dd>
            </div>
            <div className="_row">
              <dt className="_head">支払方法</dt>
              <dd className="_desc">現金、電子マネー<br />クレジットカード</dd>
            </div>
            <div className="_row">
              <dt className="_head">お問合せ</dt>
              <dd className="_desc">080-1234-5678</dd>
            </div>
            <div className="_row">
              <dt className="_head">席数</dt>
              <dd className="_desc">20席</dd>
            </div>
            <div className="_row">
              <dt className="_head">席詳細</dt>
              <dd className="_desc">〇〇〇〇〇〇〇〇〇〇〇</dd>
            </div>
            <div className="_row">
              <dt className="_head">お子様連れ</dt>
              <dd className="_desc">こども可（小学生可）</dd>
            </div>
            <div className="_row">
              <dt className="_head">公式<br />HP・SNS</dt>
              <dd className="_desc"><a href="#">https://poopopo.jpInstagram</a></dd>
            </div>
          </dl>
          <div className="shop-info__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.7382984329197!2d141.20738969678956!3d40.613597300000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b43015580a9bb%3A0x67fb6168d24ce7e3!2zdGhpcmQuIC0g44OT44O844Kz44O844K6!5e0!3m2!1sja!2sjp!4v1744747101498!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}