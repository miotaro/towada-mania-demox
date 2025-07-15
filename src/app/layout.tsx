import '../styles/scss/style.scss'
import KoremiteModal from '@/component/koremiteModal'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="content-language" content="ja" />
        <meta name="format-detection" content="telephone=no, address=no,email=no" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#f0f3f7" />
        <title>トワダマニア</title>
        <meta name="description" content="" />
        <meta name="application-name" content="トワダマニア" />
        <meta name="apple-mobile-web-app-title" content="necomata" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="icons/favicon.ico" />
        <link rel="manifest" href="/icons/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide-core.min.css" />
        <link rel="icon" type="image/png" sizes="16×16" href="/img/favicons/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32×32" href="/img/favicons/favicon-32.png" />
        <meta name="msapplication-square70x70logo" content="/img/favicons/ms-tile-small.jpg" />
        <meta name="msapplication-square150x150logo" content="/img/favicons/ms-tile-medium.jpg" />
        <meta name="msapplication-wide310x150logo" content="/img/favicons/ms-tile-wide.jpg" />
        <meta name="msapplication-square310x310logo" content="/img/favicons/ms-tile-large.jpg" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon-180.png" />
        <link rel="mask-icon" href="img/favicons/favicon.svg" color="#fff" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/favicons/android-touch-icon-192.png" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />

        {/* OGP */}
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content="トワダマニア" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://necomata.co.jp/img/og-img.jpg" />
        <meta property="og:site_name" content="トワダマニア" />
        <meta property="og:description" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="トワダマニア" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="https://necomata.co.jp/img/og-img.jpg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+JP:wght@400;500;700;900&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <KoremiteModal />

        <svg xmlns="http://www.w3.org/2000/svg" className="svg-defs">
          <symbol viewBox="0 0 14 14" id="cross">
            <path d="M13.2,13.9l-6.2-6.2L.8,13.9l-.8-.7,6.2-6.2L0,.8.9,0l6.1,6.2L13.2,0l.8.7-6.2,6.2,6.2,6.2-.8.7Z" />
          </symbol>

          <symbol viewBox="0 0 6 10" id="arrow-right">
            <polyline points=".9528625 .9528625 4.9528625 4.9528625 .9528625 8.9528625" style={{ fill: "none" }} />
          </symbol>

          <symbol viewBox="0 0 18 18" id="icon-clock">
            <circle className="st0" cx="9.0000001" cy="9.0000001" r="7.9999923" />
            <polyline className="st1" points="9 4.6723194 9 9.4551239 12.6062412 9.4551239" />
          </symbol>
        </svg>

      </body>
    </html>
  )
}
