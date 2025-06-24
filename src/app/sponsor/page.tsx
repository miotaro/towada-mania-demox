import SlidePanel from "@/component/SlidePanel";
import PageLoader from "@/component/PageLoader";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/Footer";
import MobileWindow from "@/component/MobileWindow";
import Breadcrumb from "@/component/Breadcrumb";

export const metadata = {
  title: 'トワダマニアのスポンサー・広告協賛募集｜十和田の魅力を共に届けるパートナーを募集しています',
  description: 'トワダマニアは、青森県十和田市のローカルメディアとして、地域の魅力を地元目線で発信しています。この取り組みに共感し、共に地域を盛り上げるスポンサー・パートナーを募集しています。広告掲載やプロジェクト連携など、ご一緒できる形を柔軟にご提案します。',
  openGraph: {
    title: 'トワダマニアのスポンサー・広告協賛募集｜十和田の魅力を共に届けるパートナーを募集しています',
    description: 'トワダマニアは、青森県十和田市のローカルメディアとして、地域の魅力を地元目線で発信しています。この取り組みに共感し、共に地域を盛り上げるスポンサー・パートナーを募集しています。広告掲載やプロジェクト連携など、ご一緒できる形を柔軟にご提案します。',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'トワダマニアのスポンサー・広告協賛募集｜十和田の魅力を共に届けるパートナーを募集しています',
    description: 'トワダマニアは、青森県十和田市のローカルメディアとして、地域の魅力を地元目線で発信しています。この取り組みに共感し、共に地域を盛り上げるスポンサー・パートナーを募集しています。広告掲載やプロジェクト連携など、ご一緒できる形を柔軟にご提案します。',
    images: ['/icons/favicon.ico'],
  }
};

export default function Sponsor() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: 'スポンサー' }, 
  ];

  return (
    <>
      <div className="page-sponsor">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>

          <BtmfixMenu current="null"/>
          
          <div className="content-body">
            <div className="sponsor-fix-bg"></div>
            <main className="">
              <div className="page-head phdc-bg --pink">
                <div className="page-head__inner">
                  <h1 className="page-head__text">スポンサー</h1>
                  <div className="page-head__icon">
                    <img src="/img/ph-icon_sponsor.svg" width="100%" height="auto" alt="" />
                  </div>
                </div>
              </div>

              <Breadcrumb items={breadcrumbItems} />

              <section className="sponsor-section gutter-container">
                <h2 className="sponsor-section__title --mcb-tr"><span>スペシャルスポンサー</span></h2>
                <div className="sponsor-table --col-1">
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="/img/sponsor_sample01.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">みずほ証券株式会社(Mizuho Securities Co., Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="/img/sponsor_sample02.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">SMBC日興証券株式会社(SMBC Nikko Securities Inc.)</figcaption>
                    </a>
                  </figure>
                </div>
              </section>

              <section className="sponsor-section gutter-container">
                <h2 className="sponsor-section__title --mcb-tl"><span>ゴールドスポンサー</span></h2>
                <div className="sponsor-table --col-2">
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample03.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">大和証券株式会社(Daiwa Securities Co. Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample04.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample03.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">大和証券株式会社(Daiwa Securities Co. Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample04.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)</figcaption>
                    </a>
                  </figure>
                </div>
              </section>

              <section className="sponsor-section gutter-container">
                <h2 className="sponsor-section__title --mcb-tl"><span>シルバースポンサー</span></h2>
                <div className="sponsor-table --col-2">
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample03.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">大和証券株式会社(Daiwa Securities Co. Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample04.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample03.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">大和証券株式会社(Daiwa Securities Co. Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample04.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)</figcaption>
                    </a>
                  </figure>
                </div>
              </section>

              <section className="sponsor-section gutter-container">
                <h2 className="sponsor-section__title --mcb-tl"><span>ブロンズスポンサー</span></h2>
                <div className="sponsor-table --col-2">
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample03.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">大和証券株式会社(Daiwa Securities Co. Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample04.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample03.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">大和証券株式会社(Daiwa Securities Co. Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample04.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)</figcaption>
                    </a>
                  </figure>
                </div>
              </section>

              <section className="sponsor-section gutter-container">
                <h2 className="sponsor-section__title --mcb-sb"><span>レギュラースポンサー</span></h2>
                <div className="sponsor-table --col-3">
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample03.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">大和証券株式会社(Daiwa Securities Co. Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample04.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample03.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">大和証券株式会社(Daiwa Securities Co. Ltd.)</figcaption>
                    </a>
                  </figure>
                  <figure className="sponsor-table__item">
                    <a href="#" target="_blank">
                      <span className="_thumb">
                        <img className="u-cover-img" src="../img/sponsor_sample04.webp" width="100%" height="auto" alt="" />
                      </span>
                      <figcaption className="_caption text-box-center">ゴールドマン・サックス証券株式会社(Goldman Sachs Japan Co., Ltd.)</figcaption>
                    </a>
                  </figure>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </MobileWindow>
      </div>
    </>
  )
}