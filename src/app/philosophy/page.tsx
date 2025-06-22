import PageLoader from "@/component/pageLoader";
import SlidePanel from "@/component/slidePanel";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/footer";
import MobileWindow from "@/component/mobileWindow";

export default function Philosophy() {
  return (
    <>
      <div className="page-philosophy">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>

          <BtmfixMenu current="null"/>
          
          <div className="content-body">
            <main>
              <div className="page-head phdc-bg --pink">
                <div className="page-head__inner">
                  <h1 className="page-head__text"><span className="_en">PHILOSOPHY</span><span className="_ja">フィロソフィ</span></h1>
                </div>
              </div>

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
                    <span className="breadcrumb__item__current">PHILOSOPHY</span>
                  </li>
                </ul>
              </div>
              {/* <!-- /.breadcrumb --> */}

              <div className="gutter-container">
                <section className="philos-intro">
                  <h2 className="philos-intro__title">ディープな<br />十和田に<br />引きずり込む</h2>
                  <p>ここに暮らしている僕らだからこそ見えている街がある。</p>
                  <p>そんなディープな十和田を、ここで熱狂的に暮らす僕らが伝える。</p>
                  <h3 className="_sub">知ればきっと<br />もっと十和田を好きになる。</h3>
                  <p>そんな人に伝えたい。<br />十和田の魅力にどっぷりとハマらせたい。</p>
                  <p className="_emph">
                    もっとおもしろく<br />
                    もっとじぶんごとに<br />
                    もっとマニアックに
                  </p>
                  <p>そんな熱狂の沼に引きずり込まれた<br />”トワダマニア” たちを増殖させる。</p>
                  <p>そして、スキを楽しむ人であふれる街にしていきたい。</p>
                  <figure>
                    <img src="/img/philos_img01.webp" width="100%" height="100%" alt="" />
                  </figure>
                </section>

                <hr className="ph-separator-img --gc-fulled" />

                <section className="philos-story">
                  <div className="philos-story__head">
                    <figure className="_kotosuki">
                      <img src="/img/logo_kotosuki.svg" width="100%" height="100%" alt="コトスキデザイン" />
                    </figure>
                    <span className="_cross"></span>
                    <figure className="_be-cause">
                      <img src="/img/logo_be_cause.svg" width="100%" height="100%" alt="株式会社ビーコーズ" />
                    </figure>
                  </div>

                  <figure className="philos-story__img --gc-fulled">
                    <img src="/img/philos_img02.webp" width="100%" height="100%" alt="" />
                  </figure>

                  <h2 className="philos-story__title">ヌマルトワダ</h2>

                  <div className="phtp-block">
                    <h3 className="phtp-block__title">STORY</h3>
                    <p>
                      このウェブサイトのデザインコンセプトは、十和田という場所が持つ、奥ゆかしいけれど人を惹きつける魅力と、その魅力に気づいたらなんだか好きになって、集まってくる人たちの様子を表現しています。
                    </p>
                    <p className="">
                      「ヌマルトワダ」という表現は、十和田の魅力が、一度触れると時間を忘れて深く探求してしまうような、抗いがたい引力を持つことを示唆しています。本ウェブサイトは、そのような魅力に潜在的に気づいている層に向けて、その魅力を共有するための入り口となることを目指して制作しました。
                    </p>
                  </div>
                </section>


                <section className="philos-thought">
                  <h2 className="philos-thought__title"><span className="_text">デザインにかけた想い</span></h2>

                  <div className="philos-thought__designer">
                    <figure className="_logo">
                      <img src="/img/logo_kotosuki.svg" width="100%" height="100%" alt="コトスキデザイン" />
                    </figure>
                    <div className="_title">
                      <p>コト∞スキデザイン<br />グラフィックデザイナー</p>
                      <p className="_name">pirkanta(<span>ピリカンタ</span>)</p>
                    </div>
                  </div>

                  <div className="phtp-block">
                    <h3 className="phtp-block__title">LOGO</h3>
                    <p>
                      シンボルの印象的な目は、「トワダマニア」にふれた人の好奇心を刺激し、十和田の奥深い魅力へと誘う象徴になっています。漫画のようなタッチのデザインは、親しみやすさと遊び心を表現し、どこか懐かしさや温もりを感じるものとなっています。
                    </p>
                    <figure className="phtp-block__img --type01">
                      <svg viewBox="0 0 200 229" role="img" aria-label="トワダマニア">
                        <use href="/img/logo_symbol.svg#logo"></use>
                      </svg>
                    </figure>
                    <p>
                      右肩上がりのロゴタイプは、十和田の未来に対する積極的な展望を示すものです。現状維持に留まることなく、今後も新たな魅力を創出し、発展していくであろうという期待感を、この傾斜したデザインに込めています。この意匠は、十和田の将来性に対する確信と、そこから生まれるであろう予期せぬ面白さへの期待感を表現したものです。
                    </p>
                    <figure className="phtp-block__img --type02">
                      <svg viewBox="0 0 200 126" role="img" aria-label="トワダマニア">
                        <use href="/img/logo_type01_path.svg#logo"></use>
                      </svg>
                    </figure>
                  </div>

                  <div className="phtp-block">
                    <h3 className="phtp-block__title">DESIGN PHILOSOPHY</h3>
                    <p>
                      ウェブサイト全体に用いられた紺色から黄色へのグラデーションは、十和田地域が現在抱える課題から、将来に向けて明るく、希望に満ちた発展と成長を遂げていく様子を象徴的に表現しています。この色彩の変化は、現状からの脱却と、未来へのポジティブな変遷を視覚的に示唆するものです。
                    </p>
                    <figure className="phtp-block__img">
                      <img src="/img/design_philos_img.webp" width="100%" height="100%" alt="" />
                    </figure>
                  </div>

                  <div className="phtp-block">
                    <h3 className="phtp-block__title">CHARACTER</h3>
                    <p>
                      本ウェブサイトに登場する「マニア」とは、十和田の魅力に深く傾倒し、特異なこだわりや広範な知識を有する人々として描かれています。一般の視点からは、その熱意や知識量が際立ち、異質な存在として認識される可能性も考慮し、本ウェブサイトにおいては、彼らをある種、比喩的な表現を用いて提示しています。これは、彼らの持つ深い愛情と専門性を強調するための演出意図によるものです。
                    </p>
                    <figure className="phtp-block__img --chara">
                      <img src="/img/character_4n_d.webp" width="100%" height="100%" alt="" />
                    </figure>
                  </div>
                </section>
              </div>
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
