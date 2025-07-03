import { articles } from "@/data/articles";
import ArticleCard from "@/app/archive/component/ArticleCard";
import BannerCard from "@/component/BannerCard";

export default function ArticleList() {
  return (
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

  )
}