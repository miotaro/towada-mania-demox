import PageLoader from "@/component/PageLoader";
import SlidePanel from "@/component/SlidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/Footer";
import MobileWindow from "@/component/MobileWindow";
import PulldownBox from "@/component/PulldownBox";
import Breadcrumb from "@/component/Breadcrumb";

export const metadata = {
  title: '十和田市の最新チラシ情報｜トワダマニア',
  description: '青森県十和田市のチラシ情報をまとめてチェック！トワダマニアが地域の情報を集めます！',
  openGraph: {
    title: '十和田市の最新チラシ情報｜トワダマニア',
    description: '青森県十和田市のチラシ情報をまとめてチェック！トワダマニアが地域の情報を集めます！',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '十和田市の最新チラシ情報｜トワダマニア',
    description: '青森県十和田市のチラシ情報をまとめてチェック！トワダマニアが地域の情報を集めます！',
    images: ['/icons/favicon.ico'],
  }
};

export default function Flyer() {
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

          <BtmfixMenu current="flyer" />

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

              <div className="check-serchbox --cs-warm">
                <PulldownBox
                  pulldownName="flyerCategory"
                  className="check-serchbox__item"
                  trigger={
                    <button type="button" className="check-serchbox__toggle js-pulldown__btn">
                      <span className="_text">カテゴリ</span>
                      <span className="pd-cross-icon"></span>
                    </button>
                  }
                >
                  <div className="js-pulldown__box">
                    <div className="js-pulldown__box__inner">
                      <ul className="check-serchbox__list">
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>広報・政治</span>
                          </label>
                        </li>
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>日用品・食品</span>
                          </label>
                        </li>
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>求人</span>
                          </label>
                        </li>
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>車</span>
                          </label>
                        </li>
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>住宅</span>
                          </label>
                        </li>
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>買い取り</span>
                          </label>
                        </li>
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>デリバリー</span>
                          </label>
                        </li>
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>勉強会</span>
                          </label>
                        </li>
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>アパレル</span>
                          </label>
                        </li>
                        <li className="check-serchbox__list-item">
                          <label className="label-checkbox">
                            <input type="checkbox" name="" value="" /><span>家具・家電</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </PulldownBox>

                <div className="btn-group">
                  <button type="button" className="btn btn-md btn-white btn-fulled js-uncheckAll">クリア</button>
                  <button type="submit" className="btn btn-md btn-primary btn-fulled">検索する</button>
                </div>
                <div className="check-serchbox__result">
                  <p className="_number">検索結果<span>10</span>件</p>
                  <p className="_distext">（1〜10件を表示）</p>
                </div>
              </div>
              {/* <!-- /.check-serchbox --> */}


              <div className="shop-result serch-result">
                <section className="shop-result__card">
                  <div className="shop-head">
                    <span className="shop-head__thumb"><img className="u-cover-img" src="/img/no_img_contributor03.webp" width="100%" height="auto" alt="" /></span>
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
                  <a className="shop-result__btn" href="/flyer/shop">
                    <span className="_inner">チラシをもっと見る<span className="_num">（全0枚）</span></span>
                    <span className="btn-arrow"></span>
                  </a>
                </section>
                <section className="shop-result__card">
                  <div className="shop-head">
                    <span className="shop-head__thumb"><img className="u-cover-img" src="/img/no_img_contributor03.webp" width="100%" height="auto" alt="" /></span>
                    <h2 className="shop-head__title">トワダマニア商店</h2>
                  </div >
                  <div className="flyer-list">
                    <article className="flyer-list__card card-lg">
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
                    <article className="flyer-list__card card-lg">
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
                  </div>
                  <a className="shop-result__btn" href="/flyer/shop">
                    <span className="_inner">チラシをもっと見る<span className="_num">（全0枚）</span></span>
                    <span className="btn-arrow"></span>
                  </a>
                </section>
              </div>
              {/* <!-- /.serch-result --> */}

              <nav className="pagination" role="navigation" aria-label="pagination">
                <a className="pagination__prev" href="#"></a>
                <ul className="pagination__list">
                  <li><a className="pagination__link" href="#">1</a></li>
                  <li><a className="pagination__link" href="#">2</a></li>
                  <li><a className="pagination__link is-current" href="#">3</a></li>
                  <li><span className="pagination__ellipsis">・・・</span></li>
                  <li><a className="pagination__link" href="#">4</a></li>
                </ul>
                <a className="pagination__next" href="#"></a>
              </nav>
            </main>
            <Footer />
          </div>
        </MobileWindow>
      </div>
    </>
  )
}