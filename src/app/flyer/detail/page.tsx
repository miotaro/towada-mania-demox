import PageLoader from "@/component/PageLoader";
import SlidePanel from "@/component/SlidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/Footer";
import MobileWindow from "@/component/MobileWindow";
import TabPanel from "@/component/TabPanels";
import Breadcrumb from "@/component/Breadcrumb";

export default function Detail() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: 'チラシ', href: '/flyer' }, 
    { label: 'トワダマニア商店チラシ', href: '/flyer/shop' }, 
    { label: 'チラシ詳細' }, 
  ];
  return (
    <>
      <div className="page-flyer-detail">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>

          <BtmfixMenu current="null" />

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

              <Breadcrumb items={breadcrumbItems} />

              <TabPanel
                className="flyer-detail"
                tabButtons={[
                  { id: 'flyer', label: 'チラシ' },
                  { id: 'shop-info', label: '店舗詳細' },
                ]}
              >

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
                <div>
                  <div className="shop-head">
                    <span className="shop-head__thumb"><img className="u-cover-img" src="../img/no_img_contributor03.webp" width="100%" height="auto" alt="" /></span>
                    <h2 className="shop-head__title">トワダマニア商店</h2>
                  </div >
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
              </TabPanel>
              <div className="flyer-btn-group">
                <a className="btn btn-md btn-secondary" href="/flyer">チラシ一覧に戻る<span className="btn-arrow"></span></a>
              </div>
            </main>
            <Footer />
          </div>
        </MobileWindow >
      </div >

    </>
  )
}