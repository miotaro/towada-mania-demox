import '../styles/scss/style.scss'
import KoremiteModal from '@/component/KoremiteModal'
import Head from '@/component/Head'

export const metadata = {
  title: 'トワダマニア',
  description: '十和田市の魅力を再発見するローカル情報アプリ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Head />
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
