import PageLoader from "@/component/PageLoader";
import SlidePanel from "@/component/SlidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/Footer";
import MobileWindow from "@/component/MobileWindow";
import PulldownBox from "@/component/PulldownBox";
import Breadcrumb from "@/component/Breadcrumb";

export const metadata = {
  title: '十和田市の求人・アルバイト採用情報一覧｜トワダマニア',
  description: '青森県十和田市の求人・バイト・採用情報をまとめて掲載中。飲食店やショップ、地域企業の募集情報やストーリーを通じて、「働くことが楽しくなる」出会いを届けます。地域で挑戦したい人を応援します。',
  openGraph: {
    title: '十和田市の求人・アルバイト採用情報一覧｜トワダマニア',
    description: '青森県十和田市の求人・バイト・採用情報をまとめて掲載中。飲食店やショップ、地域企業の募集情報やストーリーを通じて、「働くことが楽しくなる」出会いを届けます。地域で挑戦したい人を応援します。',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '十和田市の求人・アルバイト採用情報一覧｜トワダマニア',
    description: '青森県十和田市の求人・バイト・採用情報をまとめて掲載中。飲食店やショップ、地域企業の募集情報やストーリーを通じて、「働くことが楽しくなる」出会いを届けます。地域で挑戦したい人を応援します。',
    images: ['/icons/favicon.ico'],
  }
};

export default function Recruit() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '求人' }, 
  ];

  return (
    <>
      <div className="page-recruit">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>

          <BtmfixMenu current="recruit" />

          <div className="content-body">
            <main className="">
              <div className="page-head phdc-bg --pink">
                <div className="page-head__inner">
                  <h1 className="page-head__text">求人</h1>
                  <div className="page-head__icon">
                    <img src="/img/ph-icon_recruit.svg" width="100%" height="auto" alt="" />
                  </div>
                </div>
              </div>

              <Breadcrumb items={breadcrumbItems} />

              <div className="check-serchbox --cs-cool">
                <PulldownBox
                  pulldownName="recruitOccupation"
                  className="check-serchbox__item"
                  trigger={
                    <button type="button" className="check-serchbox__toggle js-pulldown__btn">
                      <span className="_text">職種</span><span className="pd-cross-icon"></span>
                    </button>
                  }
                >
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
                </PulldownBox>

                <PulldownBox
                  pulldownName="recruitType"
                  className="check-serchbox__item"
                  trigger={
                    <button type="button" className="check-serchbox__toggle js-pulldown__btn">
                      <span className="_text">雇用形態</span><span className="pd-cross-icon"></span>
                    </button>
                  }
                >
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


              <div className="recruit-result serch-result">
                <article className="recruit-card">
                  <span className="recruit-head__label">NEW</span>
                  <h2 className="recruit-head__title">明るく楽しく！自由な環境でライフワークバランスを整えられる職場</h2>
                  <ul className="recruit-head__data">

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#bag"></use></svg></div>
                      <p className="_text">WEBデザイナー</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#building"></use></svg></div>
                      <p className="_text">株式会社トワダマニア</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#map-pin"></use></svg></div>
                      <p className="_text">青森県十和田市</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#user"></use></svg></div>
                      <p className="_text">正社員</p>
                    </li>
                  </ul>
                  <a className="recruit-card__btn" href="/recruit/detail">詳細を見る<span className="btn-arrow"></span></a>
                </article>
                <article className="recruit-card">
                  <span className="recruit-head__label">NEW</span>
                  <h2 className="recruit-head__title">明るく楽しく！自由な環境でライフワークバランスを整えられる職場</h2>
                  <ul className="recruit-head__data">

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#bag"></use></svg></div>
                      <p className="_text">WEBデザイナー</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#building"></use></svg></div>
                      <p className="_text">株式会社トワダマニア</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#map-pin"></use></svg></div>
                      <p className="_text">青森県十和田市</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#user"></use></svg></div>
                      <p className="_text">正社員</p>
                    </li>
                  </ul>
                  <a className="recruit-card__btn" href="/recruit/detail">詳細を見る<span className="btn-arrow"></span></a>
                </article>
                <article className="recruit-card">
                  <span className="recruit-head__label">NEW</span>
                  <h2 className="recruit-head__title">明るく楽しく！自由な環境でライフワークバランスを整えられる職場</h2>
                  <ul className="recruit-head__data">

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#bag"></use></svg></div>
                      <p className="_text">WEBデザイナー</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#building"></use></svg></div>
                      <p className="_text">株式会社トワダマニア</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#map-pin"></use></svg></div>
                      <p className="_text">青森県十和田市</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#user"></use></svg></div>
                      <p className="_text">正社員</p>
                    </li>
                  </ul>
                  <a className="recruit-card__btn" href="/recruit/detail">詳細を見る<span className="btn-arrow"></span></a>
                </article>
                <article className="recruit-card">
                  <span className="recruit-head__label">NEW</span>
                  <h2 className="recruit-head__title">明るく楽しく！自由な環境でライフワークバランスを整えられる職場</h2>
                  <ul className="recruit-head__data">

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#bag"></use></svg></div>
                      <p className="_text">WEBデザイナー</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#building"></use></svg></div>
                      <p className="_text">株式会社トワダマニア</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#map-pin"></use></svg></div>
                      <p className="_text">青森県十和田市</p>
                    </li>

                    <li className="recruit-head__data-item">
                      <div className="_icon"><svg viewBox="0 0 20 20"><use href="../img/recruit-icon.svg#user"></use></svg></div>
                      <p className="_text">正社員</p>
                    </li>
                  </ul>
                  <a className="recruit-card__btn" href="/recruit/detail">詳細を見る<span className="btn-arrow"></span></a>
                </article>
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
