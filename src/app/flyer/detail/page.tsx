import PageLoader from "@/component/pageLoader";
import SlidePanel from "@/component/slidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/footer";
import MobileWindow from "@/component/mobileWindow";

export default function Detail() {
  return (
    <>
      <div className="page-flyer-detail">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>
          
          <BtmfixMenu current="null"/>

          <div className="content-body">
            <main className="">
              <div className="page-head phdc-bg --orange">
                <div className="page-head__inner">
                  <h1 className="page-head__text">チラシ</h1>
                  <div className="page-head__icon">
                    <img src="/img/ph-icon_flyer.svg" width="100%" height="auto" alt="" />
                  </div>
                </div>
              </div>

              <div className="breadcrumb">
                <ul className="breadcrumb__list" itemScope itemType="http://schema.org/BreadcrumbList">
                  <li className="breadcrumb__item">
                    <a href="/top" className="breadcrumb__item__page _home">
                      <svg className="_icon" viewBox="0 0 200 229" role="img" aria-label="">
                        <use href="/img/logo_symbol.svg#logo"></use>
                      </svg>
                      <span className="_text">HOME</span>
                    </a>
                    <meta itemProp="position" content="1" />
                  </li>
                  <li className="breadcrumb__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" aria-current="page">
                    <a href="/flyer" className="breadcrumb__item__page" itemProp="item" >
                    {/* href="https://technical-seo.jp/" */}
                      <span itemProp="name">チラシ</span>
                    </a>
                    <meta itemProp="position" content="2" />
                  </li>
                  <li className="breadcrumb__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" aria-current="page">
                    <a href="/flyer/shop" className="breadcrumb__item__page" itemProp="item" >
                    {/* href="https://technical-seo.jp/" */}
                      <span itemProp="name">トワダマニア商店チラシ</span>
                    </a>
                    <meta itemProp="position" content="3" />
                  </li>
                  <li className="breadcrumb__item" aria-current="page">
                    <span className="breadcrumb__item__current">チラシ詳細</span>
                  </li>
                </ul>
              </div>
              {/* <!-- /.breadcrumb --> */}

              <div className="flyer-detail gutter-container">
                <div className="swich-tab-list tab-list">
                  <button type="button" className="tab-btn js-tab-btn is-tab-current" data-tab-id="flyer"><span className="_text">チラシ</span></button>
                  <button type="button" className="tab-btn js-tab-btn" data-tab-id="shop-info"><span className="_text">店舗詳細</span></button>
                </div>
                {/* <!-- /.tab-list --> */}

                <div className="shop-head">
                  <span className="shop-head__thumb"><img className="u-cover-img" src="../img/no_img_contributor03.webp" width="100%" height="auto" alt="" /></span>
                  <h2 className="shop-head__title">トワダマニア商店</h2>
                </div >

                <div className="tab-panels">
                  <div className="js-tab-panel is-tab-current is-fade" data-tab-id="flyer">
                    <div className="flyer-info">
                      <h3 className="flyer-info__title">冬の味覚フェア</h3>
                      <p className="flyer-info__date"><time dateTime="">2025年0月0日〜0日</time>まで</p>
                    </div>

                    <div className="flyer-view js-ps-gallerie">
                      <figure className="flyer-view__item">
                        <a className="js-ps-gallerie__item" href="../img/sample_flyer_01.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
                          <img src="../img/sample_flyer_01.jpg" width="100%" height="auto" alt="" style={{ "pointer-events": "none" } as unknown as React.CSSProperties} />

                        </a>
                      </figure>
                      <figure className="flyer-view__item">
                        <a className="js-ps-gallerie__item" href="../img/sample_flyer_02.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
                          <img src="../img/sample_flyer_02.jpg" width="100%" height="auto" alt="" style={{ "pointer-events": "none" } as unknown as React.CSSProperties} />

                        </a>
                      </figure>
                      <figure className="flyer-view__item">
                        <a className="js-ps-gallerie__item" href="../img/sample_flyer_03.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
                          <img src="../img/sample_flyer_03.jpg" width="100%" height="auto" alt="" style={{ "pointer-events": "none" } as unknown as React.CSSProperties} />

                        </a>
                      </figure>
                    </div>
                  </div>
                  {/* <!-- /.js-tab-panel --> */}

                  <div className="js-tab-panel" data-tab-id="shop-info">
                    <dl className="sb-info-table dl-table">
                      <div className="_row">
                        <dt className="_head">業種</dt>
                        <dd className="_desc">製造業</dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">代表者</dt>
                        <dd className="_desc">山田　太郎</dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">設立</dt>
                        <dd className="_desc">2024年6月9日</dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">所在地</dt>
                        <dd className="_desc">青森県十和田市</dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">電話番号</dt>
                        <dd className="_desc">0123-45-6789</dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">メール</dt>
                        <dd className="_desc">towada@gmail.com</dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">HP</dt>
                        <dd className="_desc">http://www.towada.jp</dd>
                      </div>
                    </dl>
                  </div>
                  {/* <!-- /.js-tab-panel --> */}
                </div>
                {/* <!-- /.tab-panels --> */}

                <div className="flyer-btn-group">
                  <a className="btn btn-md btn-secondary" href="/flyer">チラシ一覧に戻る<span className="btn-arrow"></span></a>
                </div>
              </div>

            </main>

            <Footer />

          </div>
          {/* <!-- /.content-body --> */}
        </MobileWindow>
        
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-defs">
          <symbol viewBox="0 0 14 14" id="cross">
            <path d="M13.2,13.9l-6.2-6.2L.8,13.9l-.8-.7,6.2-6.2L0,.8.9,0l6.1,6.2L13.2,0l.8.7-6.2,6.2,6.2,6.2-.8.7Z" />
          </symbol>

          {/* <!-- <symbol viewBox="0 0 6 10" id="arrow-right">
            <path d="M.9681712,10c-.2479377,0-.4954086-.0937203-.6845136-.2816248-.3782101-.375809-.3782101-.9845269,0-1.3603359l3.379144-3.3576913L.2836576,1.6421927C-.0945525,1.2663836-.0945525.6572018.2836576.2818568.6618677-.0939523,1.2744747-.0939523,1.6526848.2818568l4.0636576,4.0383232c.3782101.375809.3782101.9845269,0,1.3603359L1.6526848,9.7183752c-.1891051.1879045-.4365759.2816248-.6845136.2816248Z" />
          </symbol> --> */}

          <symbol viewBox="0 0 6 10" id="arrow-right">
            <polyline points=".9528625 .9528625 4.9528625 4.9528625 .9528625 8.9528625" style={{ fill: "none" }} />
          </symbol>

          <symbol viewBox="0 0 18 18" id="icon-clock">
            <circle className="st0" cx="9.0000001" cy="9.0000001" r="7.9999923" />
            <polyline className="st1" points="9 4.6723194 9 9.4551239 12.6062412 9.4551239" />
          </symbol>
        </svg>
      </div>

    </>
  )
}