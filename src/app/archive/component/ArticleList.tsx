// import { articles } from "@/data/articles";
import ArticleCard from "@/app/archive/component/ArticleCard";
import BannerCard from "@/component/BannerCard";
import { Article } from "@/lib/types/article";

type Props = {
  articles: Article[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles || articles.length === 0) {
    return (
      <div className="article-list">
        <p className="article-list__empty">記事がありません。</p>
        <BannerCard />
      </div>
    );
  }

  return (
    <div className="article-list">
      {articles.map((article) => {
        const attr = article;
        const daysSincePosted = Math.floor(
          (new Date().getTime() - new Date(attr.createdAt).getTime()) / (1000 * 60 * 60 * 24)
        )
        const showNewMark = daysSincePosted <= 7;

        return (
          <ArticleCard
            key={article.id}
            size={attr.size_lg ? "lg" : "sm"}
            isPR={attr.pr}
            category={attr.category?.data?.name || "未分類"}
            title={attr.title}
            tags={attr.tags?.data?.map((tag) => tag.name) || []}
            contributorName={attr.users_permissions_user?.data?.username || "匿名"}
            contributorImg={
              attr.users_permissions_user?.data?.avatar?.url ||
              "/img/no_img_contributor01.webp"
            }
            imageSrc={attr.thumbnail_image?.data?.url || "/img/no_img.webp"}
            imageAlt={attr.thumbnail_image_alt || ""}
            showNewMark={showNewMark}
          />
        );
      })}
      <BannerCard />
    </div>

  )
}