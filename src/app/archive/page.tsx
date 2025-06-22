import SlidePanel from "@/component/SlidePanel";
import PageLoader from "@/component/PageLoader";
import PageHeadNav from "@/component/PageHeadNav";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/Footer";
import MobileWindow from "@/component/MobileWindow";
import Breadcrumb from "@/component/Breadcrumb";

export default function Archive() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '記事' }, 
  ];

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
              
              <Breadcrumb items={breadcrumbItems} />

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
        </MobileWindow>
      </div>
    </>
  )
}