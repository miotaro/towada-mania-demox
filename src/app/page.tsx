import Head from 'next/head';
import '../styles/scss/mokuzi.scss'

export default function Mokuzi() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no, address=no,email=no" />
        <title>トワダマニア | INDEX</title>
      </Head>

      <div className="index-page">
        <div className="index-page-inr">
          <h1>トワダマニア</h1>
          <section>
            <ul className="index-page-list">
              <li><a href="/top">TOPページ</a></li>
              <li><a href="/archive">記事一覧</a></li>
              <li><a href="/archive/gourmet">グルメ記事一覧</a></li>
              <li><a href="/archive/event">イベント</a></li>
              <li><a href="/archive/gourmet/single">記事詳細</a></li>
              <li><a href="/sponsor">スポンサー</a></li>
              <li><a href="/flyer">チラシ一覧</a></li>
              <li><a href="/flyer/shop">チラシ店舗一覧</a></li>
              <li><a href="/flyer/detail">チラシ詳細</a></li>
              <li><a href="/recruit">求人一覧</a></li>
              <li><a href="/recruit/detail">求人詳細</a></li>
              <li><a href="/privacy-policy">プライバシーポリシー</a></li>
              <li><a href="/404">404</a></li>
              <li><a href="/philosophy">サービスについて</a></li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
