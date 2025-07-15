import PageLayout from "@/component/PageLayout";
import Pagination from "@/component/Pagination";
import ArticleList from "./component/ArticleList";
// import { fetchArticles } from "@/lib/api/article";

export const metadata = {
  title: '十和田の観光・グルメ・暮らしのマニア情報｜トワダマニア',
  description: '青森県十和田市の観光・グルメ・イベント・暮らしの情報を地元視点で発信中。話題のスポットからローカルな魅力まで、トワダマニアがディープに切り取って紹介します。',
  openGraph: {
    title: '十和田の観光・グルメ・暮らしのマニア情報｜トワダマニア',
    description: '青森県十和田市の観光・グルメ・イベント・暮らしの情報を地元視点で発信中。話題のスポットからローカルな魅力まで、トワダマニアがディープに切り取って紹介します。',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '十和田の観光・グルメ・暮らしのマニア情報｜トワダマニア',
    description: '青森県十和田市の観光・グルメ・イベント・暮らしの情報を地元視点で発信中。話題のスポットからローカルな魅力まで、トワダマニアがディープに切り取って紹介します。',
    images: ['/icons/favicon.ico'],
  }
};


export default async function Archive() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '記事' },
  ];

  // const articles = await fetchArticles();
  
  return (
    <>
      <PageLayout
        className="page-archive"
        currentMenu="article"
        pageTitle="記事"
        useSplideNav={true}
        breadcrumbItems={breadcrumbItems}
      >
        <ArticleList />
        <Pagination currentPage={1} totalPages={1}/>
      </PageLayout>
    </>
  )
}