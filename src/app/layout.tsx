import '../styles/scss/style.scss'
import KoremiteModal from '@/component/koremiteModal'

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
      <head />
      <body>
        {children}
        <KoremiteModal />
      </body>
    </html>
  )
}
