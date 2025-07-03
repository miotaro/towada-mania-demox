export default function FirstTabPanel() {
  return (
    <div>
      <div className="shop-head">
        <span className="shop-head__thumb"><img className="u-cover-img" src="../img/no_img_contributor03.webp" width="100%" height="auto" alt="" /></span>
        <h2 className="shop-head__title">トワダマニア商店</h2>
      </div >
      <div className="flyer-info">
        <h3 className="flyer-info__title">冬の味覚フェア</h3>
        <p className="flyer-info__date"><time dateTime="">2025年0月0日〜0日</time>まで</p>
      </div>

      <div className="flyer-view js-ps-gallerie">
        <figure className="flyer-view__item">
          <a className="js-ps-gallerie__item" href="/img/sample_flyer_01.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
            <img src="/img/sample_flyer_01.jpg" width="100%" height="auto" alt="" style={{ "pointer-events": "none" } as unknown as React.CSSProperties} />

          </a>
        </figure>
        <figure className="flyer-view__item">
          <a className="js-ps-gallerie__item" href="/img/sample_flyer_02.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
            <img src="/img/sample_flyer_02.jpg" width="100%" height="auto" alt="" style={{ "pointer-events": "none" } as unknown as React.CSSProperties} />

          </a>
        </figure>
        <figure className="flyer-view__item">
          <a className="js-ps-gallerie__item" href="/img/sample_flyer_03.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
            <img src="/img/sample_flyer_03.jpg" width="100%" height="auto" alt="" style={{ "pointer-events": "none" } as unknown as React.CSSProperties} />

          </a>
        </figure>
      </div>
    </div>
  )
}