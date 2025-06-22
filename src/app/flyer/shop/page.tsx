import PageLoader from "@/component/PageLoader";
import SlidePanel from "@/component/SlidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/Footer";
import MobileWindow from "@/component/MobileWindow";
import Breadcrumb from "@/component/Breadcrumb";

export default function Shop() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: 'チラシ' }, 
  ];

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

              <Breadcrumb items={breadcrumbItems} />

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
        </MobileWindow>
      </div>
    </>
  )
}