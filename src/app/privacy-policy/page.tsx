import Head from "@/head";
import PageLoader from "@/component/pageLoader";
import SlidePanel from "@/component/slidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/footer";

export default function PrivacyPolicy() {
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
              <div className="page-head phdc-bg --pink u-text-center">
                <div className="page-head__inner">
                  <h1 className="page-head__text">プライバシー<br/>ポリシー</h1>
                </div>
              </div>

              <div className="breadcrumb">
                <ul className="breadcrumb__list" itemScope itemType="http://schema.org/BreadcrumbList">
                  <li className="breadcrumb__item">
                    <a href="@/" className="breadcrumb__item__page _home">
                      <svg className="_icon" viewBox="0 0 200 229" role="img" aria-label="">
                        <use href="../img/logo_symbol.svg#logo"></use>
                      </svg>
                      <span className="_text">HOME</span>
                    </a>
                    <meta itemProp="position" content="1" />
                  </li>
                  <li className="breadcrumb__item" aria-current="page">
                    <span className="breadcrumb__item__current">プライバシーポリシー</span>
                  </li>
                </ul>
              </div>
              {/* <!-- /.breadcrumb --> */}

              <div className="gutter-container">
                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">1.</span>基本方針</h2>
                  <div className="term-section__body">
                    <p>
                      トワダマニア（以下「当サイト」）は、青森県十和田市のローカルメディアとして、地域の魅力を発信するために運営されています。本プライバシーポリシー（以下「本ポリシー」）は、当サイトが取得する個人情報の取り扱いに関する方針を定めたものです。
                    </p>
                    <p>
                      当サイトは、個人情報の保護に関する法令及びガイドラインを遵守し、適切な管理・運営に努めます。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">2.</span>収集する個人情報</h2>
                  <div className="term-section__body">
                    <p>
                      当サイトでは、以下の方法で個人情報を取得することがあります。
                    </p>
                    <ol>
                      <li>
                        ユーザーから提供される情報
                        <ul>
                          <li>氏名、メールアドレス、住所、電話番号</li>
                          <li>ユーザーが入力・送信した情報（お問い合わせフォーム、アンケート等）</li>
                        </ul>
                      </li>
                      <li>
                        サイト利用時に自動収集する情報
                        <ul>
                          <li>サイトの閲覧履歴、アクセスログ、Cookie情報、IPアドレス、端末情報</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">3.</span>個人情報の利用目的</h2>
                  <div className="term-section__body">
                    <p>取得した個人情報は、以下の目的で利用します。</p>
                    <ul>
                      <li>サービスの提供および運営（本人確認・ユーザーサポート等）</li>
                      <li>サイトの利用状況分析およびサービス改善</li>
                      <li>広告の表示、効果測定、マーケティング</li>
                      <li>本サービスの規約に違反する行為への対応</li>
                      <li>お問い合わせへの対応</li>
                    </ul>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">4.</span>個人情報の管理と保護</h2>
                  <div className="term-section__body">
                    <p>
                      当サイトは、取得した個人情報を適切に管理し、不正アクセス、改ざん、漏洩、紛失などを防ぐための安全管理措置を講じます。また、以下の場合を除き、第三者に個人情報を提供することはありません。
                    </p>
                    <ol>
                      <li>
                        業務委託先への提供
                        <ul><li>サービスの運営・管理に関する業務委託を行う場合</li></ul>
                      </li>
                      <li>
                        法令に基づく提供
                        <ul><li>行政機関等からの法的要請がある場合</li></ul>
                      </li>
                      <li>
                        統計データの提供
                        <ul><li>個人を特定できない形での統計データとして利用する場合</li></ul>
                      </li>
                    </ol>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">5.</span>個人情報の開示・訂正・削除</h2>
                  <div className="term-section__body">
                    <p>
                      ユーザーは、自己の個人情報に関して開示・訂正・削除を求めることができます。当サイトは、合理的な範囲で対応し、その結果を通知します。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">6.</span>Cookieの使用について</h2>
                  <div className="term-section__body">
                    <p>
                      当サイトでは、アクセス解析や広告配信のためにCookieを使用しています。ユーザーは、ブラウザの設定でCookieを無効化することができます。ただし、一部の機能が利用できなくなる場合があります。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">7.</span>広告について</h2>
                  <div className="term-section__body">
                    <p>
                      当サイトでは、Googleやそのパートナー（第三者配信事業者）による広告を掲載しています。Googleの広告配信にはCookieを使用しており、過去のアクセス情報に基づいて広告が表示される場合があります。広告の詳細については、Googleのポリシーと規約をご確認ください。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">8.</span>未成年者の個人情報について</h2>
                  <div className="term-section__body">
                    <p>
                      13歳未満の未成年者が個人情報を提供する場合は、保護者の同意を得る必要があります。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">9.</span>アクセス解析ツールについて</h2>
                  <div className="term-section__body">
                    <p>
                      当サイトでは、Google Analyticsを利用してユーザーの行動を分析し、サイト改善を行っております。Google Analyticsのデータ収集についての詳細は、Googleのポリシーをご覧ください。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">10.</span> ユーザーの権利（データポータビリティ・異議申し立て）</h2>
                  <div className="term-section__body">
                    <p>
                      ユーザーは、当サイトに提供した個人情報のコピーを請求する権利（データポータビリティ）を有します。また、個人情報の取扱いに関して異議を申し立てることができます。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">11.</span>プライバシーポリシーの変更</h2>
                  <div className="term-section__body">
                    <p>
                      本プライバシーポリシーは、法令の改正や運営上の必要に応じて、随時更新される場合があります。重要な変更がある場合は、本サイト上で告知し、適宜ユーザーに通知いたします。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">12.</span>免責事項</h2>
                  <div className="term-section__body">
                    <p>
                      当サイトに掲載している情報は、掲載後に変更される場合があります。最新の情報をご確認の上、ご利用ください。また、当サイトは、リンク先の情報の正確性や安全性について責任を負いません。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">13.</span>著作権について</h2>
                  <div className="term-section__body">
                    <p>
                      当サイトのコンテンツ（記事・画像・デザイン等）の著作権は、“トワダマニア”および情報提供者に帰属します。許可なく転載・加工・二次利用することを禁止します。
                    </p>
                  </div>
                </section>

                <section className="term-section">
                  <h2 className="term-section__title"><span className="_num">14.</span>お問い合わせ</h2>
                  <div className="term-section__body">
                    <p>
                      個人情報の取り扱いに関するお問い合わせは、以下までお願いいたします。
                    </p>
                    <p>
                      運営：〇〇<br/>
                        住所：〇〇（運営事務所所在地）<br/>
                          メール：〇〇@example.com
                      </p>
                    </div>
                  </section>
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