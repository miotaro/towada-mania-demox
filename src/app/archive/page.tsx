import ArticleCard from "@/component/ArticleCard";
import BannerCard from "@/component/BannerCard";
import PageLayout from "@/component/PageLayout";
import Pagination from "@/component/Pagination";
import { articles } from "@/data/articles";

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


export default function Archive() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '記事' },
  ];
  return (
    <>
      <PageLayout
        className="page-archive"
        currentMenu="article"
        pageTitle="記事"
        useSplideNav={true}
        breadcrumbItems={breadcrumbItems}
      >
        <div className="article-list">
          {articles.map((article, index) => {
            const daysSincePosted = Math.floor(
              (new Date().getTime() - new Date(article.createdAt).getTime()) / (1000 * 60 * 60 * 24)
            )
            const showNewMark = daysSincePosted <= 7;

            return (
              <ArticleCard
                key={index}
                size={article.size as "lg" | "sm"}
                isPR={article.isPR}
                category={article.category}
                title={article.title}
                tags={article.tags}
                contributorName={article.contributorName}
                contributorImg={article.contributorImg}
                imageSrc={article.imageSrc}
                showNewMark={showNewMark}
              />
            );
          })}
          <BannerCard />
        </div>
        <Pagination currentPage={1} totalPages={1}/>
      </PageLayout>
    </>
  )
}