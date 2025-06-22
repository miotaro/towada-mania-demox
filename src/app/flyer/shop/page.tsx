import PageLoader from "@/component/pageLoader";
import SlidePanel from "@/component/slidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/footer";
import MobileWindow from "@/component/mobileWindow";

export default function Shop() {
  return (
    <>
      <div className="page-flyer">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>

          <BtmfixMenu current="null"/>
          
          <div className="content-body">
            <main>
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
                  <li className="breadcrumb__item" aria-current="page">
                    <span className="breadcrumb__item__current">チラシ</span>
                  </li>
                </ul>
              </div>
              {/* <!-- /.breadcrumb --> */}

              <div className="shop-flyers gutter-container">
                <div className="shop-head">
                  <span className="shop-head__thumb"><img className="u-cover-img" src="../img/no_img_contributor03.webp" width="100%" height="auto" alt="" /></span>
                  <h2 className="shop-head__title">トワダマニア商店</h2>
                </div >

                <div className="flyer-list">
                  <article className="flyer-list__card card-lg">
                    <a href="/flyer/detail">
                      <p className="_label"><span>NEW</span></p>
                      <figure className="_thumb">
                        <img className="u-cover-img" src="../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="flyer-info">
                        <p className="flyer-info__date"><time dateTime="">2025年0月0日〜0日</time>まで</p>
                        <h3 className="flyer-info__title">冬の味覚フェア</h3>
                      </div>
                    </a>
                  </article>
                  <article className="flyer-list__card card-sm">
                    <a href="/flyer/detail">
                      <p className="_label"><span>NEW</span></p>
                      <figure className="_thumb">
                        <img className="u-cover-img" src="../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="flyer-info">
                        <p className="flyer-info__date"><time dateTime="">2025年0月0日〜0日</time>まで</p>
                        <h3 className="flyer-info__title">冬の味覚フェア</h3>
                      </div>
                    </a>
                  </article>
                  <article className="flyer-list__card card-sm">
                    <a href="/flyer/detail">
                      <figure className="_thumb">
                        <img className="u-cover-img" src="/img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="flyer-info">
                        <p className="flyer-info__date"><time dateTime="">2025年0月0日〜0日</time>まで</p>
                        <h3 className="flyer-info__title">冬の味覚フェア</h3>
                      </div>
                    </a>
                  </article>
                  <article className="flyer-list__card card-sm">
                    <a href="/flyer/detail">
                      <p className="_label"><span>NEW</span></p>
                      <figure className="_thumb">
                        <img className="u-cover-img" src="/img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="flyer-info">
                        <p className="flyer-info__date"><time dateTime="">2025年0月0日〜0日</time>まで</p>
                        <h3 className="flyer-info__title">冬の味覚フェア</h3>
                      </div>
                    </a>
                  </article>
                  <article className="flyer-list__card card-sm">
                    <a href="/flyer/detail">
                      <figure className="_thumb">
                        <img className="u-cover-img" src="../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="flyer-info">
                        <p className="flyer-info__date"><time dateTime="">2025年0月0日〜0日</time>まで</p>
                        <h3 className="flyer-info__title">冬の味覚フェア</h3>
                      </div>
                    </a>
                  </article>
                  <article className="flyer-list__card card-sm">
                    <a href="/flyer/detail">
                      <p className="_label"><span>NEW</span></p>
                      <figure className="_thumb">
                        <img className="u-cover-img" src="/img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="flyer-info">
                        <p className="flyer-info__date"><time dateTime="">2025年0月0日〜0日</time>まで</p>
                        <h3 className="flyer-info__title">冬の味覚フェア</h3>
                      </div>
                    </a>
                  </article>
                  <article className="flyer-list__card card-sm">
                    <a href="/flyer/detail">
                      <figure className="_thumb">
                        <img className="u-cover-img" src="/img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="flyer-info">
                        <p className="flyer-info__date"><time dateTime="">2025年0月0日〜0日</time>まで</p>
                        <h3 className="flyer-info__title">冬の味覚フェア</h3>
                      </div>
                    </a>
                  </article>
                </div>

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