import TopPageClient from "@/component/TopPageClient";

export const metadata = {
  title: 'トワダマニア｜十和田のディープな魅力を地元から発信するローカルメディア',
  description: 'トワダマニアは、青森県十和田市のディープな魅力を地元目線で発信するローカルメディアです。観光、グルメ、イベント、暮らし、地域の人々のストーリーまで、十和田をもっと好きになる情報を届けます。',
  openGraph: {
    title: 'トワダマニア｜十和田のディープな魅力を地元から発信するローカルメディア',
    description: 'トワダマニアは、青森県十和田市のディープな魅力を地元目線で発信するローカルメディアです。観光、グルメ、イベント、暮らし、地域の人々のストーリーまで、十和田をもっと好きになる情報を届けます。',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'トワダマニア｜十和田のディープな魅力を地元から発信するローカルメディア',
    description: 'トワダマニアは、青森県十和田市のディープな魅力を地元目線で発信するローカルメディアです。観光、グルメ、イベント、暮らし、地域の人々のストーリーまで、十和田をもっと好きになる情報を届けます。',
    images: ['/icons/favicon.ico'],
  }
};

export default function TopPage() {
  return <TopPageClient />
}