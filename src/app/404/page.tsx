import PageLoader from "@/component/PageLoader";
import SlidePanel from "@/component/SlidePanel";
import Footer from "@/component/Footer";
import MobileWindow from "@/component/MobileWindow";
import Breadcrumb from "@/component/Breadcrumb";

export const metadata = {
  title: '404｜トワダマニア',
  // description: '-',
  openGraph: {
    title: '404｜トワダマニア',
    // description: '-',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '404｜トワダマニア',
    // description: '-',
    images: ['/icons/favicon.ico'],
  }
};

export default function PrivacyPolicy() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '404 page not found.' }, 
  ];

  return (
    <>
      <div className="page-404">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>
          <div className="content-body">
            <main className="">
              <div className="page-head phdc-bg --pink u-text-center">
                <div className="page-head__inner">
                  <h1 className="page-head__text">Page Not Found</h1>
                </div>
              </div>

              <Breadcrumb items={breadcrumbItems} />

              <section className="error404 gutter-container">
                <div className="error404__img">
                  <img src="img/404_img.svg" width="100%" height="auto" alt="" />
                </div>
                <h2 className="error404__title text-box-center">お探しのページは見つかりませんでした</h2>
                <p className="error404__text">
                  該当のページはアドレス変更、削除されたか、一時的にアクセスできない状況にある可能性があります。
                </p>
                <div className="btn-group">
                  <a className="btn btn-md btn-primary" href="/top">ホームへ戻る<span className="btn-arrow"></span></a>
                </div>
              </section>
            </main>

            <Footer />

          </div>
          {/* <!-- /.content-body --> */}
        </MobileWindow>
      </div>
    </>
  )
}