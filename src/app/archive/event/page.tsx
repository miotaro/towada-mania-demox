import SlidePanel from "@/component/SlidePanel";
import PageLoader from "@/component/PageLoader";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/Footer";
import PageHeadNav from "@/component/PageHeadNav";
import MobileWindow from "@/component/MobileWindow";

export default function Event() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '記事', href: '/archive' }, 
    { label: 'イベント' }, 
  ];
  
  return (
    <>
      <div className="page-event">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>
          
          <BtmfixMenu current="null"/>

          <div className="content-body">
            <main>

              <PageHeadNav current="イベント"/>

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
                    <a href="/archive" className="breadcrumb__item__page" itemProp="item">
                     {/* href="https://technical-seo.jp/" */}
                      <span itemProp="name">記事</span>
                    </a>
                    <meta itemProp="position" content="2" />
                  </li>
                  <li className="breadcrumb__item" aria-current="page">
                    <span className="breadcrumb__item__current">イベント</span>
                  </li>
                </ul>
              </div>
              {/* <!-- /.breadcrumb --> */}


              <div className="events-intro gutter-container">
                <h1 className="events-intro__title">
                  <img src="/img/event_cal_text.svg" width="100%" height="auto" alt="イベントカレンダー" />
                </h1>
                <p className="events-intro__text">
                  カレンダーの日付を選択すると、その日のイベント一覧を見ることができます。
                </p>
              </div>

              <div className="events-calendar">
                <div className="today-frame"></div>
                <div className="bubchar-hdg --left">
                  <h2 className="bubchar-hdg__title --type-01">
                    <span className="_text">今日の<br/>イベントは<br/>何かな？</span>
                  </h2>
                  <span className="bubchar-hdg__chara"><img src="/img/character05.png" width="100%" height="auto" alt="" /></span>
                </div>
                {/* <!-- /.bubchar-hdg --> */}
                <div className="events-calendar__inner gutter-container">
                  <div id="event-calendar" data-cal-rang=""></div>
                  <ul className="events-calendar__explanation">
                    <li className="events-calendar__exp-item">
                      <span className="_icon _today"></span>
                      <span className="_text">今日</span>
                    </li>
                    <li className="events-calendar__exp-item">
                      <span className="_icon _badge-ev">1</span>
                      <span className="_text">イベント件数</span>
                    </li>
                    <li className="events-calendar__exp-item">
                      <span className="_icon _badge-end">1</span>
                      <span className="_text">終了したイベント</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- /.events-calendar --> */}

              <div className="events-btns btn-group">
                <a className="btn btn-md btn-secondary" href="#">イベント一覧を見る<span className="btn-arrow"></span></a>
              </div>

              <div className="banner">
                <img src="https://placehold.jp/ebebeb/bdbdbd/640x200.png?text=banner" width="100%" height="auto" alt="バナー" />
              </div>

            </main>
            
            <Footer />

          </div>
          {/* <!-- /.content-body --> */}

          <div className="modal event-modal" data-modal-id="2025-5-2">
            <div className="modal-body fade">
              <button type="button" className="modal-close js-modal-close">
                <svg viewBox="0 0 14 14"><use href="#cross"></use></svg>
              </button>
              <div className="modal-body__inner mcdots-bg --orange">

                <div className="event-modal__content">
                  <div className="event-modal__label phdc-bg --orange ">
                    <p className="_text">EVENT LIST</p>
                  </div>

                  <div className="event-modal__date">
                    <time className="_time" dateTime="2025-5-2">
                      5<span>/</span>2
                    </time>
                    <span className="_dow">金</span>
                  </div>

                  <div className="article-list">
                    <article className="article-card --card-sm">
                      <a className="article-card__link" href="#">
                        <figure className="article-card__thumb">
                          <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                        </figure>
                        <div className="article-card__ttlcont">
                          <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                          <p className="article-card__time">
                            <svg className="_icon" viewBox="0 0 18 18"><use href="#icon-clock"></use></svg>
                            <time dateTime="2025-5-2 14:00">14:00</time>~<time dateTime="2025-5-2 17:00">17:00</time>
                          </p>
                        </div>
                        <div className="article-card__tags">
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                          <span className="_tag">ランチ</span>
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                        </div>
                      </a>
                    </article>
                    <article className="article-card --card-sm">
                      <a className="article-card__link" href="#">
                        <figure className="article-card__thumb">
                          <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                        </figure>
                        <div className="article-card__ttlcont">
                          <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                          <p className="article-card__time">
                            <svg className="_icon" viewBox="0 0 18 18"><use href="#icon-clock"></use></svg>
                            <time dateTime="2025-5-2 14:00">14:00</time>~<time dateTime="2025-5-2 17:00">17:00</time>
                          </p>
                        </div>
                        <div className="article-card__tags">
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                          <span className="_tag">ランチ</span>
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                        </div>
                      </a>
                    </article>
                    <article className="article-card --card-sm">
                      <a className="article-card__link" href="#">
                        <figure className="article-card__thumb">
                          <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                        </figure>
                        <div className="article-card__ttlcont">
                          <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                          <p className="article-card__time">
                            <svg className="_icon" viewBox="0 0 18 18"><use href="#icon-clock"></use></svg>
                            <time dateTime="2025-5-2 14:00">14:00</time>~<time dateTime="2025-5-2 17:00">17:00</time>
                          </p>
                        </div>
                        <div className="article-card__tags">
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                          <span className="_tag">ランチ</span>
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                        </div>
                      </a>
                    </article>
                  </div>
                </div>
                {/* <!-- /.event-modal__content --> */}

              </div>
              {/* <!-- /.modal-body__inner --> */}
            </div>
            {/* <!-- /.modal-body --> */}
          </div>
          {/* <!-- /.modal --> */}
          <div className="modal event-modal" data-modal-id="2025-5-20">
            <div className="modal-body fade">
              <button type="button" className="modal-close js-modal-close">
                <svg viewBox="0 0 14 14"><use href="#cross"></use></svg>
              </button>
              <div className="modal-body__inner mcdots-bg --orange">

                <div className="event-modal__content">
                  <div className="event-modal__label phdc-bg --orange ">
                    <p className="_text">EVENT LIST</p>
                  </div>

                  <div className="event-modal__date">
                    <time className="_time" dateTime="2025-5-20">
                      5<span>/</span>20
                    </time>
                    <span className="_dow">火</span>
                  </div>

                  <div className="article-list">
                    <article className="article-card --card-sm">
                      <a className="article-card__link" href="#">
                        <figure className="article-card__thumb">
                          <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                        </figure>
                        <div className="article-card__ttlcont">
                          <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                          <p className="article-card__time">
                            <svg className="_icon" viewBox="0 0 18 18"><use href="#icon-clock"></use></svg>
                            <time dateTime="2025-5-20 14:00">14:00</time>~<time dateTime="2025-5-20 17:00">17:00</time>
                          </p>
                        </div>
                        <div className="article-card__tags">
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                          <span className="_tag">ランチ</span>
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                        </div>
                      </a>
                    </article>
                    <article className="article-card --card-sm">
                      <a className="article-card__link" href="#">
                        <figure className="article-card__thumb">
                          <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                        </figure>
                        <div className="article-card__ttlcont">
                          <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                          <p className="article-card__time">
                            <svg className="_icon" viewBox="0 0 18 18"><use href="#icon-clock"></use></svg>
                            <time dateTime="2025-5-20 14:00">14:00</time>~<time dateTime="2025-5-20 17:00">17:00</time>
                          </p>
                        </div>
                        <div className="article-card__tags">
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                          <span className="_tag">ランチ</span>
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                        </div>
                      </a>
                    </article>
                    <article className="article-card --card-sm">
                      <a className="article-card__link" href="#">
                        <figure className="article-card__thumb">
                          <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                        </figure>
                        <div className="article-card__ttlcont">
                          <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                          <p className="article-card__time">
                            <svg className="_icon" viewBox="0 0 18 18"><use href="#icon-clock"></use></svg>
                            <time dateTime="2025-5-20 14:00">14:00</time>~<time dateTime="2025-5-20 17:00">17:00</time>
                          </p>
                        </div>
                        <div className="article-card__tags">
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                          <span className="_tag">ランチ</span>
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                        </div>
                      </a>
                    </article>
                    <article className="article-card --card-sm">
                      <a className="article-card__link" href="#">
                        <figure className="article-card__thumb">
                          <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                        </figure>
                        <div className="article-card__ttlcont">
                          <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                          <p className="article-card__time">
                            <svg className="_icon" viewBox="0 0 18 18"><use href="#icon-clock"></use></svg>
                            <time dateTime="2025-5-20 14:00">14:00</time>~<time dateTime="2025-5-20 17:00">17:00</time>
                          </p>
                        </div>
                        <div className="article-card__tags">
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                          <span className="_tag">ランチ</span>
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                        </div>
                      </a>
                    </article>
                    <article className="article-card --card-sm">
                      <a className="article-card__link" href="#">
                        <figure className="article-card__thumb">
                          <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                        </figure>
                        <div className="article-card__ttlcont">
                          <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                          <p className="article-card__time">
                            <svg className="_icon" viewBox="0 0 18 18"><use href="#icon-clock"></use></svg>
                            <time dateTime="2025-5-20 14:00">14:00</time>~<time dateTime="2025-5-20 17:00">17:00</time>
                          </p>
                        </div>
                        <div className="article-card__tags">
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                          <span className="_tag">ランチ</span>
                          <span className="_tag">家族向け</span>
                          <span className="_tag">洋食</span>
                        </div>
                      </a>
                    </article>
                  </div>
                </div>
                {/* <!-- /.event-modal__content --> */}

              </div>
              {/* <!-- /.modal-body__inner --> */}
            </div>
            {/* <!-- /.modal-body --> */}
          </div>
          {/* <!-- /.modal --> */}

          <div className="modal-overlay" tabIndex={-1}></div>

        </MobileWindow>
        
      </div>
    </>
  )
}