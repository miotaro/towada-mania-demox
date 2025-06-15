import Head from "@/head";
import PageLoader from "@/component/pageLoader";
import SlidePanel from "@/component/slidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/footer";

export default function RecruitDetail() {
  return (
    <>
      <Head />

      <div className="page-recruit">
        <PageLoader />

        <div className="mobile-window">
          <SlidePanel />

          <div className="panel-overlay"></div>

          <BtmfixMenu current="null"/>
          
          <div className="content-body">
            <main className="">
              <div className="page-head phdc-bg --pink">
                <div className="page-head__inner">
                  <h1 className="page-head__text">求人</h1>
                  <div className="page-head__icon">
                    <img src="../img/ph-icon_recruit.svg" width="100%" height="auto" alt="" />
                  </div>
                </div>
              </div>

              <div className="breadcrumb">
                <ul className="breadcrumb__list" itemScope itemType="http://schema.org/BreadcrumbList">
                  <li className="breadcrumb__item">
                    <a href="../../" className="breadcrumb__item__page _home">
                      <svg className="_icon" viewBox="0 0 200 229" role="img" aria-label="">
                        <use href="../img/logo_symbol.svg#logo"></use>
                      </svg>
                      <span className="_text">HOME</span>
                    </a>
                    <meta itemProp="position" content="1" />
                  </li>
                  <li className="breadcrumb__item" aria-current="page">
                    <span className="breadcrumb__item__current">求人</span>
                  </li>
                </ul>
              </div>
              {/* <!-- /.breadcrumb --> */}

              <div className="recruit-detail gutter-container">
                <div className="swich-tab-list tab-list">
                  <button type="button" className="tab-btn js-tab-btn is-tab-current" data-tab-id="job-listing"><span className="_text">求人情報</span></button>
                  <button type="button" className="tab-btn js-tab-btn" data-tab-id="company-info"><span className="_text">企業情報</span></button>
                </div>
                {/* <!-- /.tab-list --> */}

                <div className="tab-panels">
                  <div className="js-tab-panel is-tab-current is-fade" data-tab-id="job-listing">

                    <header className="recruit-head">
                      <span className="recruit-head__label">NEW</span>
                      <h1 className="recruit-head__title">明るく楽しく元気はつらつ！自由な環境でライフワークバランスを整えられる職場</h1>
                      <ul className="recruit-head__data recruit-dtl-section">
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
                      <section className="recruit-dtl-section">
                        <h2 className="recruit-dtl-section__title">勤務時間</h2>
                        <p>完全シフト制／自由出勤OK／１日３時間～OK</p>
                      </section>
                      <section className="recruit-dtl-section">
                        <h2 className="recruit-dtl-section__title">福利厚生</h2>
                        <ul>
                          <li>雇用保険</li>
                          <li>厚生年金</li>
                          <li>労災保険</li>
                          <li>健康保険</li>
                          <li>交通費支給あり</li>
                          <li>寮・社宅・住宅手当あり</li>
                          <li>U・Iターン支援あり</li>
                          <li>資格取得支援・手当あり</li>
                          <li>育児支援・託児所あり</li>
                          <li>時短勤務制度あり</li>
                        </ul>
                      </section>
                      <section className="recruit-dtl-section">
                        <h2 className="recruit-dtl-section__title">休日休暇</h2>
                        <ul>
                          <li>完全週休2日制</li>
                          <li>年間休日120日以上</li>
                          <li>夏季休暇</li>
                          <li>年末年始休暇</li>
                          <li>有給休暇</li>
                          <li>慶弔休暇</li>
                          <li>GW休暇</li>
                          <li>ハネムーン休暇</li>
                          <li>産前産後休暇（取得実績あり）etc...</li>
                        </ul>
                      </section>
                    </header>

                    <section className="recruit-dtl-section">
                      <h2 className="recruit-dtl-section__title">業務内容</h2>
                      <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                    </section>
                    <section className="recruit-dtl-section">
                      <h2 className="recruit-dtl-section__title">業務内容</h2>
                      <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                    </section>
                    <section className="recruit-dtl-section">
                      <h2 className="recruit-dtl-section__title">業務内容</h2>
                      <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                    </section>
                    <section className="recruit-dtl-section">
                      <h2 className="recruit-dtl-section__title">業務内容</h2>
                      <p>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
                    </section>

                  </div>
                  {/* <!-- /.js-tab-panel --> */}



                  <div className="js-tab-panel" data-tab-id="company-info">
                    <dl className="sb-info-table dl-table">
                      <div className="_row">
                        <dt className="_head">会社名</dt>
                        <dd className="_desc">トワダマニア株式会社</dd>
                      </div>
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
                  <a className="btn btn-md btn-secondary" href="">掲載元で見る<span className="btn-arrow"></span></a>
                </div>
              </div>
            </main>

            <Footer />

          </div>
          {/* <!-- /.content-body --> */}
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