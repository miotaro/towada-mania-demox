import PageLoader from "@/component/PageLoader";
import SlidePanel from "@/component/SlidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/Footer";
import MobileWindow from "@/component/MobileWindow";
import TabPanel from "@/component/TabPanels";
import Breadcrumb from "@/component/Breadcrumb";

export const metadata = {
  title: '{求人タイトル}｜トワダマニア',
  // description: '{求人説明}',
  openGraph: {
    title: '{求人タイトル}｜トワダマニア',
    // description: '{求人説明}',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '{求人タイトル}｜トワダマニア',
    // description: '{求人説明}',
    images: ['/icons/favicon.ico'],
  }
};

export default function RecruitDetail() {
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

          <BtmfixMenu current="null" />

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

              <Breadcrumb items={breadcrumbItems} />

              <TabPanel
                className="recruit-detail"
                tabButtons={[
                  { id: 'job-listing', label: '求人情報' },
                  { id: 'company-info', label: '企業情報' },
                ]}
              >
                <div>
                  <header className="recruit-head">
                    <span className="recruit-head__label">NEW</span>
                    <h1 className="recruit-head__title">明るく楽しく元気はつらつ！自由な環境でライフワークバランスを整えられる職場</h1>
                    <ul className="recruit-head__data recruit-dtl-section">
                      <li className="recruit-head__data-item">
                        <div className="_icon"><svg viewBox="0 0 20 20"><use href="/img/recruit-icon.svg#bag"></use></svg></div>
                        <p className="_text">WEBデザイナー</p>
                      </li>
                      <li className="recruit-head__data-item">
                        <div className="_icon"><svg viewBox="0 0 20 20"><use href="/img/recruit-icon.svg#building"></use></svg></div>
                        <p className="_text">株式会社トワダマニア</p>
                      </li>
                      <li className="recruit-head__data-item">
                        <div className="_icon"><svg viewBox="0 0 20 20"><use href="/img/recruit-icon.svg#map-pin"></use></svg></div>
                        <p className="_text">青森県十和田市</p>
                      </li>
                      <li className="recruit-head__data-item">
                        <div className="_icon"><svg viewBox="0 0 20 20"><use href="/img/recruit-icon.svg#user"></use></svg></div>
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

                <div>
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
              </TabPanel>

              <div className="flyer-btn-group">
                <a className="btn btn-md btn-secondary" href="">掲載元で見る<span className="btn-arrow"></span></a>
              </div>
            </main>
            <Footer />
          </div>
        </MobileWindow >
      </div >
    </>
  )
}