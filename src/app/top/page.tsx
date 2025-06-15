import Head from '@/head'
import SlidePanel from '../../component/slidePanel'
import PageLoader from '../../component/pageLoader'

export default function TopPage() {
  return (
    <>
      <Head />
      
      <div className="page-home">
        <PageLoader />

        <div className="mobile-window">
          <SlidePanel />

          <div className="panel-overlay"></div>
          <div className="content-body">
            <main className="home-main">
              <img className="home-bg" src="img/home_bg.webp" width="100%" height="auto" alt="" />

              <ul className="app-list">
                <li className="app-list__item">
                  <a href="archive/gourmet/" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_gourmet.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">グルメ</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="archive/event/" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_event.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">イベント</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="archive/hot-spring/" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_onsen.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">温泉</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="archive/shop/" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_shop.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">お店</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="sponsor/" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_sponsor.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">スポンサー</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <button type="button" className="icon-group js-modal-open" data-modal-id="more" role="button">
                    <span className="_icon --floder hover-bounce-in"><img src="img/ph-icon_more.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">もっと見る</span>
                  </button>
                </li>
              </ul>

              <div className="home-bottom">
                <button type="button" className="home-bottom__btn hover-bounce-in js-modal-open" data-modal-id="koremite" role="button">
                  <img src="img/btn_home_koremite.svg" width="100%" height="auto" alt="おなたにオススメ コレミテ!!" />
                </button>
              </div>
            </main>
          </div>
          {/* <!-- /.content-body --> */}


          <div className="modal koremite-modal" data-modal-id="koremite" aria-hidden="true">
            <div className="modal-body">
              <button type="button" className="modal-close js-modal-close" aria-label="Close modal">
                <svg viewBox="0 0 14 14"><use href="#cross"></use></svg>
              </button>
              <div className="modal-body__inner" role="document">
                <h2 className="km-title">
                  <img src="img/koremite_modal_title.png" width="100%" height="auto" alt="トワダマニアのコレミテ!!" />
                </h2>
                <div className="character-grip">
                  <div className="_character">
                    <span><img src="img/character01.png" width="100%" height="auto" alt="サンプル" /></span>
                  </div>
                  <div className="_hand-grip">
                    <img src="img/koremite_modal_sample01.jpg" width="100%" height="auto" alt="サンプル" />
                  </div>
                </div>
                <h3 className="km-subtitle">ランチ行くならトワダ食堂だよねぇ</h3>
                <div className="km-reason">
                  <h4 className="km-reason__title"><img src="img/koremite_modal_reason.svg" width="190" height="34" alt="オススメ理由" /></h4>
                  <div className="km-reason__text">
                    <div className="_arrow"></div>
                    <p>
                      学生たちの胃袋を満たす、愛され続けるトワダ食堂。安い！早い！うまい！私が週3で通ってしまう魅力は他にも・・・！！！
                    </p>
                  </div>
                </div>
                <div className="u-text-center">
                  <a className="btn btn-md btn-primary" href="#">気になる？<span className="btn-arrow"></span></a>
                </div>
              </div>
            </div>
            {/* <!-- /.modal-body --> */}
          </div>
          {/* <!-- /.modal --> */}
          <div className="modal more-modal" data-modal-id="more" data-modal-type="folder" aria-hidden="true">
            <div className="modal-body">
              <button type="button" className="modal-close js-modal-close" aria-label="Close modal">
                <svg viewBox="0 0 14 14"><use href="#cross"></use></svg>
              </button>
              <div className="modal-body__inner" role="document">
                <p className="more-modal__text">もっと見る</p>
                <div className="more-modal__content">
                  <ul className="app-list">
                    <li className="app-list__item">
                      <a href="#" className="icon-group">
                        <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_buy.svg" width="100%" height="auto" alt="" /></span>
                        <span className="_text">買う</span>
                      </a>
                    </li>
                    <li className="app-list__item">
                      <a href="#" className="icon-group">
                        <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_flyer.svg" width="100%" height="auto" alt="" /></span>
                        <span className="_text">今月のチラシ</span>
                      </a>
                    </li>
                    <li className="app-list__item">
                      <a href="archive/" className="icon-group">
                        <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_news.svg" width="100%" height="auto" alt="" /></span>
                        <span className="_text">記事</span>
                      </a>
                    </li>
                    <li className="app-list__item">
                      <a href="archive/people/" className="icon-group">
                        <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_people.svg" width="100%" height="auto" alt="" /></span>
                        <span className="_text">町の人</span>
                      </a>
                    </li>
                    <li className="app-list__item">
                      <a href="recruit/" className="icon-group">
                        <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_recruit.svg" width="100%" height="auto" alt="" /></span>
                        <span className="_text">リクルート</span>
                      </a>
                    </li>
                    <li className="app-list__item">
                      <a href="" className="icon-group">
                        <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_contact.svg" width="100%" height="auto" alt="" /></span>
                        <span className="_text">お問い合わせ</span>
                      </a>
                    </li>
                  </ul>
                  <div className="more-modal__logo">
                    <img src="img/logo_type01.svg" width="100%" height="auto" alt="トワダマニア" />
                  </div>
                  <ul className="app-list sns-list">
                    <li className="app-list__item">
                      <a href="#" className="icon-group">
                        <span className="_icon hover-bounce-in"><img src="img/sns_icon_line.webp" width="100%" height="auto" alt="" /></span>
                      </a>
                    </li>
                    <li className="app-list__item">
                      <a href="#" className="icon-group">
                        <span className="_icon hover-bounce-in"><img src="img/sns_icon_insta2.webp" width="100%" height="auto" alt="" /></span>
                      </a>
                    </li>
                    <li className="app-list__item">
                      <a href="#" className="icon-group">
                        <span className="_icon hover-bounce-in"><img src="img/sns_icon_x.webp" width="100%" height="auto" alt="" /></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /.modal-body --> */}
          </div>
          {/* <!-- /.modal --> */}
          <div className="modal-overlay" tabIndex={-1}></div>
        </div>
        {/* <!-- /.mobile-window --> */}


        <div className="dpc-mask"></div>
        <div className="phone-frame"></div>
        <div className="phone-btns btns-left"><span className="_btn"></span><span className="_btn"></span></div>
        <div className="phone-btns btns-right"><span className="_btn"></span></div>

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
