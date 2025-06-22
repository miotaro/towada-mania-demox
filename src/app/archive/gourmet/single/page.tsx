'use client'
import SlidePanel from "@/component/SlidePanel";
import PageLoader from "@/component/PageLoader";
import BtmfixMenu from "@/component/BtmfixMenu";
import Footer from "@/component/Footer";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import PageHeadNav from "@/component/PageHeadNav";
import EntryImageSlide from "@/component/EntryImageSlides";
import PulldownBox from "@/component/PulldownBox";
import MobileWindow from "@/component/MobileWindow";
import Breadcrumb from "@/component/Breadcrumb";

export default function Single() {
  useScrollFadeIn();

  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '記事', href: '/archive' }, 
    { label: 'グルメ', href: '/archive/gourmet' }, 
    { label: '記事の名前' }, 
  ];

  return (
    <>
      <div className="page-entry">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>

          <BtmfixMenu current="null" />

          <div className="content-body">
            <div className="banner">
              <img src="https://placehold.jp/ebebeb/bdbdbd/640x200.png?text=banner" width="100%" height="auto" alt="バナー" />
            </div>
            <main>
              <PageHeadNav current="グルメ" />

              <Breadcrumb items={breadcrumbItems} />

              <article className="entry">
                <header className="entry-header">
                  <h1 className="entry-header__title">十和田のカフェバーに行ってみたらシャレオツだった件</h1>
                  <p className="entry-header__subtitle">湖上カフェで、二人だけのロマンチックなひとときを</p>
                  <div className="entry-header__info">
                    <div className="post-contributor">
                      <div className="_icon"><img className="u-cover-img" src="/img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
                      <p className="_name">towadamania</p>
                    </div>
                    <time dateTime="2025-04-30">2025.04.30</time>
                  </div>
                </header>

                <figure className="entry-thumb">
                  <img src="/img/single_sample_01.webp" width="100%" height="auto" alt="" />
                </figure>

                <div className="entry-body gutter-container">


                  <div className="brief-intro">
                    <div className="bubchar-hdg --left">
                      <h2 className="bubchar-hdg__title --type-01">
                        <span className="_text">内容をサクッと<br /><span>ご紹介 !</span></span>
                      </h2>
                      <span className="bubchar-hdg__chara"><img src="/img/character01.png" width="100%" height="auto" alt="" /></span>
                    </div>
                    {/* <!-- /.bubchar-hdg --> */}

                    <div className="yeltb-box --gc-pdg-fulled brief-intro__text">
                      <p>
                        カフェ風バーで素敵な時間を！こだわりのフード＆ドリンクで五感を満たすカフェバー「トワダマニア」は、カフェの温かさとバーのスタイリッシュさを兼ね備えた、居心地の良い空間です。昼は陽光が差し込む開放的なカフェ、夜は落ち着いた雰囲気のバーとして一日を通して様々な表情を見せてくれます。
                      </p>
                    </div>
                  </div>
                  {/* <!-- /.brief-intro --> */}

                  <div className="yel-box --gc-pdg-fulled">
                    <p>
                      創業100年の老舗旅館で過ごす、特別な時間。歴史ある建物と、自然豊かな環境が魅力の温泉旅館です。自家源泉の温泉は、美肌効果も抜群。四季折々の会席料理は、地元の食材をふんだんに使用し、目でも舌でも楽しめます。忙しい日々を忘れ、心身ともにリフレッシュできる、至福のひとときを過ごしませんか？
                    </p>
                  </div>
                  {/* <!-- /.yel-box --> */}


                  <div className="profile-box">
                    <div className="profile-box__head">
                      <h2 className="_title">
                        <svg role="img" aria-label="PROFILE" viewBox="0 0 100 100">
                          <path id="circle" className="_circle" d="M 0 50 A 50 50 0 1 1 0 51 z" />
                          <text className="_circle-text" textLength="90%"><textPath href="#circle" textLength="90%">PROFILE</textPath></text>
                        </svg>
                      </h2>
                      <div className="_thumb"><img className="u-cover-img" src="../../img/contributor_sample.webp" width="100%" height="auto" alt="" /></div>
                    </div>
                    <dl className="profile-box__table dl-table">
                      <div className="_row">
                        <dt className="_head">生年月日</dt>
                        <dd className="_desc">1992年8月15日</dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">出身地</dt>
                        <dd className="_desc">青森県十和田市</dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">学歴</dt>
                        <dd className="_desc">青森調理師専門学校卒御意</dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">経歴</dt>
                        <dd className="_desc">
                          <ul>
                            <li>2013年 東京のフレンチレストランで修行</li>
                            <li>2018年　地元十和田市に戻り「カフェ湖畔」にシェフとして就任</li>
                          </ul>
                        </dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">資格</dt>
                        <dd className="_desc">なんかの資格</dd>
                      </div>
                    </dl>
                  </div>
                  {/* <!-- /.profile-box --> */}

                  <article className="entry-card">
                    <a className="entry-card__link" href="#">
                      <div className="entry-card__content">
                        <h2 className="_title">十和田のカフェバーに行ってみたらシャレオツだった件</h2>
                        <p className="_desc">カフェ風バーで素敵な時間を！こだわりのフードaaa＆...</p>
                      </div>
                      <figure className="entry-card__thumb">
                        <img className="u-cover-img" src="../../img/single_sample_01.webp" width="100%" height="auto" alt="" />
                      </figure>
                    </a>
                  </article>
                  {/* <!-- /.entry-card --> */}


                  <div className="more-scroll js-scroll-fadein" data-fade-type="blur-in">
                    <img src="/img/more_scroll.webp" width="100%" height="auto" alt="もーっと詳しく知りたい" />
                  </div>

                  <PulldownBox
                    pulldownName="singleMenu"
                    className="index-box"
                    trigger={
                      <p className="index-box__head">
                        <span className="_icon">
                          <svg viewBox="0 0 6 10"><use href="#arrow-right"></use></svg>
                        </span>
                        目次
                      </p>
                    }
                  >
                    <ol className="index-box__list">
                      <li className="index-box__list-item">
                        <a href="#ipl-01">店内はまるで秘密基地</a>
                        <ol className="lower-list">

                          <li className="lower-list__item"><a href="#ipl-02">秘密のヒミツをこっそり教えちゃう</a></li>

                          <li className="lower-list__item"><a href="#ipl-03">秘密のヒミツをこっそり教えちゃう</a></li>

                        </ol>
                      </li>
                      <li className="index-box__list-item">
                        <a href="#ipl-04">店内はまるで秘密基地</a>
                        <ol className="lower-list">

                          <li className="lower-list__item"><a href="#ipl-05">秘密のヒミツをこっそり教えちゃう</a></li>

                          <li className="lower-list__item"><a href="#ipl-06">秘密のヒミツをこっそり教えちゃう</a></li>

                        </ol>
                      </li>
                    </ol>
                  </PulldownBox>

                  <div className="grip-board character-grip">
                    <div className="_character">
                      <span><img src="../../img/character04.png" width="100%" height="auto" alt="" /></span>
                    </div>
                    <div className="_hand-grip">
                      <div className="grip-board__board">
                        <h2 className="grip-board__title">推しポイント</h2>
                        <div className="grip-board__content">
                          <p>
                            創業100年の老舗旅館で過ごす、特別な時間。歴史ある建物と、自然豊かな環境が魅力の温泉旅館です。自家源泉の温泉は、美肌効果も抜群。四季折々の会席料理は、地元の食材をふんだんに使用し、目でも舌でも楽しめます。に使用し、目でも舌でも楽しめます。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.grip-board  --> */}

                  <h2 id="ipl-01">店内はまるで秘密基地</h2>

                  <p>
                    店内は、木の温もりを感じられる落ち着いた雰囲気。カウンター席では、一人でじっくりと飲み物を味わうのもおすすめです。ソファ席は、友人との語らいや、大切な人と過ごす時間にぴったり。まるで秘密基地のような隠れ家的な空間で、ゆったりとした時間を過ごせます。
                  </p>

                  <ol className="flnum-list">

                    <li className="flnum-list__item">チーズケーキやチョコレートケーキなど、定番のケーキは外せません。</li>

                    <li className="flnum-list__item">タルトやパフェなど、季節のフルーツを使ったスイーツもおすすめです。</li>

                    <li className="flnum-list__item">近年では固めのプリンも<span>人気</span>です。</li>

                  </ol>

                  <div className="grip-image character-grip" id="ipl-02">
                    <div className="_character">
                      <span><img src="/img/character03.png" width="100%" height="auto" alt="" /></span>
                    </div>
                    <figure className="grip-image__img _hand-grip">
                      <img src="/img/koremite_modal_sample01.jpg" width="100%" height="auto" alt="" />
                      <figcaption className="grip-image__caption text-box-center">キャプション</figcaption>
                    </figure>
                  </div>
                  {/* <!-- /.grip-image  --> */}

                  <h2 id="ipl-03">厳選されたこだわりのフード＆ドリンク厳選されたこだわりのフード</h2>

                  <p>
                    フードメニューはカフェメニューからバーフードまで幅広く取り揃えられています。ランチタイムには自家製パンを使ったサンドイッチやヘルシーなサラダが人気。ディナータイムには、お酒に合うアラカルトメニューが充実しています。
                  </p>

                  <ul className="wdesc-list">

                    <li className="wdesc-list__item">チーズケーキやチョコレートケーキなど、定番のケーキは外せません。</li>

                    <li className="wdesc-list__item">タルトやパフェなど、季節のフルーツを使ったスイーツもおすすめです。</li>

                    <li className="wdesc-list__item">近年では固めのプリンも<span>人気</span>です。</li>

                  </ul>

                  <EntryImageSlide />

                  <h3>フード</h3>
                  <p>
                    特に自慢なのは、[お店の看板メニュー]です。[メニューの特徴]が特徴で、一度食べたら忘れられない絶品です。
                  </p>

                  <h3>ドリンク</h3>
                  <p>
                    ドリンクメニューも豊富でこだわりのコーヒーや紅茶はもちろん、クラフトビールやオリジナルカクテルも楽しめます。
                  </p>

                  <h2>季節を感じるメニューも魅力</h2>
                  <p>
                    季節ごとに変わるメニューも魅力の一つ。例えば、春には桜をイメージしたドリンク、夏には爽やかなフルーツを使ったカクテルなど、四季折々の食材を使ったメニューが楽しめます。
                  </p>


                  <div className="exp-group">
                    <h3 className="exp-group__title">泉質</h3>
                    <p>
                      泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について
                    </p>
                  </div>
                  {/* <!-- /.exp-group --> */}


                  <div className="menu-list">
                    <p className="menu-list__label"><span>MENU</span></p>
                    <dl className="menu-list__table dl-table">
                      <div className="_row">
                        <dt className="_head">フライドポテト</dt>
                        <dd className="_desc">

                          <p><span className="_price">¥500</span></p>

                        </dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">ディスペンサー香るボロ布におわせポテチ</dt>
                        <dd className="_desc">

                          <p>大<span className="_price">¥500</span></p>

                          <p>中<span className="_price">¥200</span></p>

                          <p>小<span className="_price">¥100</span></p>

                        </dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">フライドポテト</dt>
                        <dd className="_desc">

                          <p><span className="_price">¥500</span></p>

                        </dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">ディスペンサー香るボロ布におわせポテチ</dt>
                        <dd className="_desc">

                          <p>大<span className="_price">¥500</span></p>

                          <p>中<span className="_price">¥200</span></p>

                          <p>小<span className="_price">¥100</span></p>

                        </dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">フライドポテト</dt>
                        <dd className="_desc">

                          <p><span className="_price">¥500</span></p>

                        </dd>
                      </div>
                      <div className="_row">
                        <dt className="_head">ディスペンサー香るボロ布におわせポテチ</dt>
                        <dd className="_desc">

                          <p>大<span className="_price">¥500</span></p>

                          <p>中<span className="_price">¥200</span></p>

                          <p>小<span className="_price">¥100</span></p>

                        </dd>
                      </div>
                    </dl>
                  </div>
                  {/* <!-- /.menu-list --> */}


                  <div className="related-menu">
                    <h3 className="related-menu__title"><span className="tab-label --blue-a50">関連メニュー</span></h3>
                    <div className="related-menu__list js-ps-gallerie">
                      <figure className="related-menu__img">
                        <a className="js-ps-gallerie__item" href="../../img/koremite_modal_sample01.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
                          <img className="u-cover-img" src="../../img/koremite_modal_sample01.jpg" width="100%" height="auto" alt="" style={{ pointerEvents: "none" }} />
                          <figcaption className="hidden-caption-content">キャプション</figcaption>

                        </a>
                      </figure>
                      <figure className="related-menu__img">
                        <a className="js-ps-gallerie__item" href="../../img/koremite_modal_sample01.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
                          <img className="u-cover-img" src="../../img/koremite_modal_sample01.jpg" width="100%" height="auto" alt="" style={{ pointerEvents: "none" }} />

                        </a>
                      </figure>
                      <figure className="related-menu__img">
                        <a className="js-ps-gallerie__item" href="../../img/koremite_modal_sample01.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
                          <img className="u-cover-img" src="../../img/koremite_modal_sample01.jpg" width="100%" height="auto" alt="" style={{ pointerEvents: "none" }} />
                          <figcaption className="hidden-caption-content">キャプション</figcaption>

                        </a>
                      </figure>
                      <figure className="related-menu__img">
                        <a className="js-ps-gallerie__item" href="../../img/koremite_modal_sample01.jpg" data-pswp-width="" data-pswp-height="" target="_blank">
                          <img className="u-cover-img" src="../../img/koremite_modal_sample01.jpg" width="100%" height="auto" alt="" style={{ pointerEvents: "none" }} />
                          <figcaption className="hidden-caption-content">キャプション</figcaption>

                        </a>
                      </figure>
                    </div>
                  </div>
                  {/* <!-- /.related-menu --> */}


                  <h2>イベントも随時開催</h2>
                  <p>
                    ライブ演奏やDJイベントなど、様々なイベントも開催されます。美味しい食事と音楽を同時に楽しめる、贅沢な時間を過ごせます。
                  </p>

                  <figure className="quoted-img --gc-pdg-fulled">
                    <img src="../../img/single_sample_01.webp" width="100%" height="auto" alt="" />
                    <figcaption className="source-link text-box-center">
                      <span className="_label">出典：</span><cite><a href="#">〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇</a></cite>
                    </figcaption>
                  </figure>
                  {/* <!-- /.quoted-im --> */}


                  <div className="deets-quote">
                    <div className="bubchar-hdg --right">
                      <h2 className="bubchar-hdg__title --type-02">
                        <span className="_text">詳しくは<br />こちら !</span>
                      </h2>
                      <span className="bubchar-hdg__chara"><img src="../../img/character04.png" width="100%" height="auto" alt="" /></span>
                    </div>
                    {/* <!-- /.bubchar-hdg --> */}
                    <figure className="deets-quote__body --gc-pdg-fulled">
                      <blockquote>
                        <p>
                          ライブ演奏やDJイベントなど、様々なイベントも開催されます。美味しい食事と音楽を同時に楽しめる、贅沢な時間を過ごせます。
                        </p>
                      </blockquote>
                      <figcaption className="source-link text-box-center">
                        <span className="_label">出典：</span><cite><a href="#">〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇</a></cite>
                      </figcaption>
                    </figure>
                  </div>
                  {/* <!-- /.deets-quote --> */}


                  <h2>まとめ</h2>
                  <p>
                    カフェバー「トワダマニア」は、カフェとバーの良いとこ取りをしたような、居心地の良い空間です。こだわりのフード＆ドリンクはもちろん、季節感あふれるメニューや、イベントも充実しています。
                  </p>


                  <div className="banner">
                    <img src="https://placehold.jp/ebebeb/bdbdbd/640x200.png?text=banner" width="100%" height="auto" alt="バナー" />
                  </div>


                  <div className="shop-info">
                    <h2 className="shop-info__title"><span className="tab-label --pink-a50">店舗情報</span></h2>
                    <div className="multi-bdr-box">
                      <h3 className="shop-info__name text-box-center">カフェバー トワダマニア</h3>
                      <dl className="shop-info__table dl-table">
                        <div className="_row">
                          <dt className="_head">住所</dt>
                          <dd className="_desc">青森県十和田市〇〇〇〇〇〇〇〇〇〇〇</dd>
                        </div>
                        <div className="_row">
                          <dt className="_head">営業時間</dt>
                          <dd className="_desc">18:00~24:00</dd>
                        </div>
                        <div className="_row">
                          <dt className="_head">定休日</dt>
                          <dd className="_desc">月曜</dd>
                        </div>
                        <div className="_row">
                          <dt className="_head">駐車場</dt>
                          <dd className="_desc">あり（店舗前10台）</dd>
                        </div>
                        <div className="_row">
                          <dt className="_head">支払方法</dt>
                          <dd className="_desc">現金、電子マネー<br />クレジットカード</dd>
                        </div>
                        <div className="_row">
                          <dt className="_head">お問合せ</dt>
                          <dd className="_desc">080-1234-5678</dd>
                        </div>
                        <div className="_row">
                          <dt className="_head">席数</dt>
                          <dd className="_desc">20席</dd>
                        </div>
                        <div className="_row">
                          <dt className="_head">席詳細</dt>
                          <dd className="_desc">〇〇〇〇〇〇〇〇〇〇〇</dd>
                        </div>
                        <div className="_row">
                          <dt className="_head">お子様連れ</dt>
                          <dd className="_desc">こども可（小学生可）</dd>
                        </div>
                        <div className="_row">
                          <dt className="_head">公式<br />HP・SNS</dt>
                          <dd className="_desc"><a href="#">https://poopopo.jpInstagram</a></dd>
                        </div>
                      </dl>
                      <div className="shop-info__map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.7382984329197!2d141.20738969678956!3d40.613597300000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b43015580a9bb%3A0x67fb6168d24ce7e3!2zdGhpcmQuIC0g44OT44O844Kz44O844K6!5e0!3m2!1sja!2sjp!4v1744747101498!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.shop-info --> */}


                  <div className="sns-share">
                    <p className="sns-share__title">この記事をシェアしよう！</p>
                    <div className="sns-share__list">
                      <a className="_x" href="">
                        <svg viewBox="0 0 30 30"><use href="../../img/share_sns_icon.svg#x"></use></svg>
                      </a>
                      <a className="_fb" href="">
                        <svg viewBox="0 0 30 30"><use href="../../img/share_sns_icon.svg#facebook"></use></svg>
                      </a>
                      <a className="_line" href="">
                        <svg viewBox="0 0 30 30"><use href="../../img/share_sns_icon.svg#line"></use></svg>
                      </a>
                    </div>
                  </div>
                  {/* <!-- /.sns-share --> */}


                  <div className="tag-list">
                    <a className="_tag" href="#">イベント</a>
                    <a className="_tag" href="#">ご飯OK</a>
                    <a className="_tag" href="#">日曜営業</a>
                    <a className="_tag" href="#">イチオシメニュー</a>
                    <a className="_tag" href="#">コーヒーがうまい</a>
                    <a className="_tag" href="#">グルメ</a>
                    <a className="_tag" href="#">カフェ</a>
                    <a className="_tag" href="#">お子様OK</a>
                    <a className="_tag" href="#">イチオシメニュー</a>
                    <a className="_tag" href="#">お子様OK</a>
                  </div>
                  {/* <!-- /.tag-list --> */}


                  <div className="staff-intro">
                    <h2 className="staff-intro__title"><span className="tab-label --yellow-a50">お店の人</span></h2>
                    <div className="multi-bdr-box">
                      <figure className="person-about">
                        <span className="person-about__thumb"><img className="u-cover-img" src="../../img/contributor_sample.webp" width="100%" height="auto" alt="" /></span>
                        <figcaption className="person-about__title">
                          <span className="_position">カフェバー トワダマニア 店主</span>
                          <span className="_name">山田 太郎</span>
                        </figcaption>
                        <p className="person-about__text">
                          美食を求めて世界中を旅する、食の探検家。特にフレンチとイタリアンには目がない。休日は必ず新しいレストランを開拓し、味覚の探求に余念がない。最近は、発酵食品にも興味津々。
                        </p>
                        <hr />
                        <ul className="person-about__list">
                          <li>経歴など補足内容</li>
                          <li>ああああああああああああああああ</li>
                        </ul>
                      </figure>

                      <div className="person-about__btns">
                        <a className="btn btn-md btn-primary" href="#">もっと詳しく<span className="btn-arrow"></span></a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.staff-intro --> */}


                  <div className="author-info">
                    <h2 className="author-info__title"><span className="tab-label --orange-a50">この記事を書いた人</span></h2>
                    <div className="author-info__badge">
                      <svg viewBox="0 0 53 53"><use href="../../img/badges.svg#badge-md"></use></svg>
                      <div className="_logo"><img className="" src="../../img/logo_type01.svg" width="100%" height="auto" alt="トワダマニア" /></div>
                    </div>
                    <div className="author-info__inner yeltb-box --gc-fulled">
                      <figure className="person-about">
                        <span className="person-about__thumb"><img className="u-cover-img" src="../../img/contributor_sample.webp" width="100%" height="auto" alt="" /></span>
                        <figcaption className="person-about__title">
                          <span className="_position">カフェバー トワダマニア 店主</span>
                          <span className="_name">山田 太郎</span>
                        </figcaption>
                        <p className="person-about__text">
                          美食を求めて世界中を旅する、食の探検家。特にフレンチとイタリアンには目がない。休日は必ず新しいレストランを開拓し、味覚の探求に余念がない。最近は、発酵食品にも興味津々。
                        </p>
                        <hr />
                        <ul className="person-about__list">
                          <li>経歴など補足内容</li>
                          <li>ああああああああああああああああ</li>
                        </ul>
                      </figure>

                      <div className="person-about__btns">
                        <img src="../../img/character06_02.png" width="391" height="138" alt="" />
                        <a className="btn btn-md btn-primary" href="#">もっと詳しく<span className="btn-arrow"></span></a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.author-info --> */}


                  <div className="speech-bubble --sb-left">
                    <figure className="speech-bubble__thumb">
                      <img className="u-cover-img" src="../../img/contributor_sample.webp" width="100%" height="auto" alt="" />
                    </figure>
                    <div className="speech-bubble__body">
                      <p className="tab-label --blue-a50">towadamania</p>
                      <div className="speech-bubble__body__inner">
                        <p>
                          カフェバー「トワダマニア」は、カフェとバーの良いとこ取りをしたような、居心地の良い空間です。こだわりのフード＆ドリンクはもちろん、季節感あふれるメニューや、イベントも充実しています。ぜひ一度訪れて、あなただけの特別な時間を過ごしてみてはいかがでしょうか。カフェバー「トワダマニア」は、カフ別な時間を過ごしてみてはいかがでしょうか。
                        </p>
                      </div>
                    </div>
                    {/* <!-- /.speech-bubble__body --> */}
                  </div>
                  {/* <!-- /.speech-bubble --> */}


                  <div className="speech-bubble --sb-right">
                    <figure className="speech-bubble__thumb">
                      <img className="u-cover-img" src="../../img/contributor_sample.webp" width="100%" height="auto" alt="" />
                    </figure>
                    <div className="speech-bubble__body">
                      <p className="tab-label --orange">山田 太郎</p>
                      <div className="speech-bubble__body__inner">
                        <p>
                          カフェバー「トワダマニア」は、カフェとバーの良いとこ取りをしたような、居心地の良い空間です。こだわりのフード＆ドリンクはもちろん、季節感あふれるメニューや、イベントも充実しています。ぜひ一度訪れて、あなただけの特別な時間を過ごしてみてはいかがでしょうか。カフェバー「トワダマニア」は、カフ別な時間を過ごしてみてはいかがでしょうか。
                        </p>
                      </div>
                    </div>
                    {/* <!-- /.speech-bubble__body --> */}
                  </div>
                  {/* <!-- /.speech-bubble --> */}


                </div>
                {/* <!-- /.entry-body --> */}
              </article>


              <section className="koremite-section">
                <h2 className="bgmc-title">
                  <img src="../../img/text_koremite_mania.png" width="100%" height="auto" alt="" />
                </h2>
                <div className="article-list">
                  <article className="article-card --card-sm " data-category="gourmet">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">グルメ</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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
                  <article className="article-card --card-sm " data-category="event">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">イベント</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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
                  <article className="article-card --card-sm " data-category="people">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">町の人</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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
                  <article className="article-card --card-sm " data-category="hot_spring">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">温泉</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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
                  <article className="article-card --card-sm " data-category="event">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">イベント</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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
                </div>

              </section>


              <section className="related-section">
                <h2 className="bgmc-title">
                  <img src="../../img/text_related.png" width="100%" height="auto" alt="" />
                </h2>
                <div className="article-list">
                  <article className="article-card --card-sm " data-category="gourmet">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">グルメ</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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
                  <article className="article-card --card-sm " data-category="event">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">イベント</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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
                  <article className="article-card --card-sm " data-category="people">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">町の人</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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
                  <article className="article-card --card-sm " data-category="hot_spring">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">温泉</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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
                  <article className="article-card --card-sm " data-category="event">
                    <a className="article-card__link" href="">
                      <p className="article-card__cat">イベント</p>
                      <figure className="article-card__thumb">
                        <img className="u-cover-img" src="../../img/01_sample.jpg" width="100%" height="auto" alt="" />
                      </figure>
                      <div className="article-card__ttlcont">
                        <h2 className="article-card__title">青森県十和田市で開催！秋の「十和田湖フェスティバル」</h2>
                        <div className="post-contributor">
                          <div className="_icon"><img className="u-cover-img" src="../../img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
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