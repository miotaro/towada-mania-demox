import ArticleCard from "@/component/ArticleCard";
import BannerCard from "@/component/BannerCard";
import PageLayout from "@/component/PageLayout";
import Pagination from "@/component/Pagination";
import { articles } from "@/data/articles";

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