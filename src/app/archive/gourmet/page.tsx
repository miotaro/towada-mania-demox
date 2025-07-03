import PageLayout from "@/component/PageLayout";
import Pagination from "@/component/Pagination";
import ArticleList from "../component/ArticleList";

export const metadata = {
  title: '十和田市のおすすめ {記事カテゴリ} 情報まとめ｜トワダマニア',
  description: '青森県十和田市の{記事カテゴリ}情報を地元目線で発信。人気のお店から穴場まで、地元民も観光客ももっと楽しくなる記事を掲載中！',
  openGraph: {
    title: '十和田市のおすすめ {記事カテゴリ} 情報まとめ｜トワダマニア',
    description: '青森県十和田市の{記事カテゴリ}情報を地元目線で発信。人気のお店から穴場まで、地元民も観光客ももっと楽しくなる記事を掲載中！',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '十和田市のおすすめ {記事カテゴリ} 情報まとめ｜トワダマニア',
    description: '青森県十和田市の{記事カテゴリ}情報を地元目線で発信。人気のお店から穴場まで、地元民も観光客ももっと楽しくなる記事を掲載中！',
    images: ['/icons/favicon.ico'],
  }
};

export default function Gourmet() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '記事' },
  ];

  return (
    <>
      <PageLayout
        className="page-archive"
        currentMenu="none"
        pageTitle="グルメ"
        useSplideNav={true}
        breadcrumbItems={breadcrumbItems}
      >
        <ArticleList />
        <Pagination currentPage={1} totalPages={1}/>
      </PageLayout>
    </>
  )
}