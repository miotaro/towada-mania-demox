import SlidePanel from "@/component/slidePanel";
import PageLoader from "@/component/pageLoader";
import PageHeadNav from "@/component/PageHeadNav";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/footer";
import MobileWindow from "@/component/mobileWindow";

export default function Archive() {
  return (
    <>
      <div className="page-archive">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <BtmfixMenu current="article"/>

          <div className="content-body">
            <main>
              
              <PageHeadNav current="記事"/>
              
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
                    <span className="breadcrumb__item__current">記事</span>
                  </li>
                </ul>
              </div>
              {/* <!-- /.breadcrumb --> */}

              <div className="article-list">
                <article className="article-card --card-lg " data-category="event">
                  <a className="article-card__link" href="/archive/gourmet/single">
                    <div className="article-card__badge badge-new">
                      <span className="_text">NEW</span>
                      <svg viewBox="0 0 53 53"><use href="/img/badges.svg#badge-sm"></use></svg>
                    </div>
                    <p className="article-card__cat">イベント</p>
                    <figure className="article-card__thumb">
                      <img className="u-cover-img" src="/img/01_sample.jpg" width="100%" height="auto" alt="" />
                    </figure>
                    <div className="article-card__ttlcont">
                      <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖紅葉フェスティバル」最高の思い出を十和田のイベントで</h2>
                      <div className="post-contributor">
                        <div className="_icon"><img className="u-cover-img" src="../img/contributor_sample.webp" width="100%" height="auto" alt="" /></div>
                        <p className="_name">towadamania</p>
                      </div>
                    </div>
                    <div className="article-card__tags">
                      <span className="_tag">家族向け</span>
                      <span className="_tag">洋食</span>
                      <span className="_tag">ランチ</span>
                    </div>
                  </a>
                </article>
                <article className="article-card --card-sm " data-category="event">
                  <a className="article-card__link" href="/archive/gourmet/single">
                    <p className="article-card__cat">イベント</p>
                    <figure className="article-card__thumb">
                      <img className="u-cover-img" src="/img/01_sample.jpg" width="100%" height="auto" alt="" />
                    </figure>
                    <div className="article-card__ttlcont">
                      <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                      <div className="post-contributor">
                        <div className="_icon"><img className="u-cover-img" src="../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
                        <p className="_name">towadamania</p>
                      </div>
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
                <article className="article-card --card-lg --PR" data-category="event">
                  <a className="article-card__link" href="/archive/gourmet/single">
                    <div className="article-card__badge badge-new">
                      <span className="_text">NEW</span>
                      <svg viewBox="0 0 53 53"><use href="/img/badges.svg#badge-sm"></use></svg>
                    </div>
                    <p className="article-card__cat">イベント</p>
                    <figure className="article-card__thumb">
                      <img className="u-cover-img" src="/img/01_sample.jpg" width="100%" height="auto" alt="" />
                    </figure>
                    <div className="article-card__ttlcont">
                      <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖紅葉フェスティバル」最高の思い出を十和田のイベントで</h2>
                      <div className="post-contributor">
                        <div className="_icon"><img className="u-cover-img" src="../img/contributor_sample.webp" width="100%" height="auto" alt="" /></div>
                        <p className="_name">towadamania</p>
                      </div>
                    </div>
                    <div className="article-card__tags">
                      <span className="_tag">家族向け</span>
                      <span className="_tag">洋食</span>
                      <span className="_tag">ランチ</span>
                    </div>
                  </a>
                </article>
                <article className="article-card --card-sm --PR" data-category="event">
                  <a className="article-card__link" href="/archive/gourmet/single">
                    <p className="article-card__cat">イベント</p>
                    <figure className="article-card__thumb">
                      <img className="u-cover-img" src="/img/01_sample.jpg" width="100%" height="auto" alt="" />
                    </figure>
                    <div className="article-card__ttlcont">
                      <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                      <div className="post-contributor">
                        <div className="_icon"><img className="u-cover-img" src="/img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
                        <p className="_name">towadamania</p>
                      </div>
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
                <div className="banner-card">
                  <a className="banner-card__link" href="">
                    <img src="/img/banner_sample.jpg" width="100%" height="auto" alt="" />
                  </a>
                </div>
              </div>


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
          {/* <!-- /.content-body --> */}
        </MobileWindow>
        
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-defs">
          <symbol viewBox="0 0 14 14" id="cross">
            <path d="M13.2,13.9l-6.2-6.2L.8,13.9l-.8-.7,6.2-6.2L0,.8.9,0l6.1,6.2L13.2,0l.8.7-6.2,6.2,6.2,6.2-.8.7Z" />
          </symbol>

          {/* <!-- <symbol viewBox="0 0 6 10" id="arrow-right">
            <path d="M.9681712,10c-.2479377,0-.4954086-.0937203-.6845136-.2816248-.3782101-.375809-.3782101-.9845269,0-1.3603359l3.379144-3.3576913L.2836576,1.6421927C-.0945525,1.2663836-.0945525.6572018.2836576.2818568.6618677-.0939523,1.2744747-.0939523,1.6526848.2818568l4.0636576,4.0383232c.3782101.375809.3782101.9845269,0,1.3603359L1.6526848,9.7183752c-.1891051.1879045-.4365759.2816248-.6845136.2816248Z"/>
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