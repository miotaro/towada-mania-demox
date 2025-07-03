import PageLayout from "@/component/PageLayout";
import FlyerHeader from "./component/FlyerHeader";
import ShopResultCard from "./component/ShopResultCard";
import Pagination from "@/component/Pagination";

export const metadata = {
  title: '十和田市の最新チラシ情報｜トワダマニア',
  description: '青森県十和田市のチラシ情報をまとめてチェック！トワダマニアが地域の情報を集めます！',
  openGraph: {
    title: '十和田市の最新チラシ情報｜トワダマニア',
    description: '青森県十和田市のチラシ情報をまとめてチェック！トワダマニアが地域の情報を集めます！',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '十和田市の最新チラシ情報｜トワダマニア',
    description: '青森県十和田市のチラシ情報をまとめてチェック！トワダマニアが地域の情報を集めます！',
    images: ['/icons/favicon.ico'],
  }
};

export default function Flyer() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: 'チラシ' },
  ];

  return (
    <>
      <PageLayout
        className="page-flyer"
        currentMenu="flyer"
        pageTitle="チラシ"
        useSplideNav={false}
        headerColor="--orange"
        headerImage="/img/ph-icon_flyer.svg"
        breadcrumbItems={breadcrumbItems}
      >
        <FlyerHeader />
        <div className="shop-result serch-result">
          <ShopResultCard />
          <ShopResultCard />
          <ShopResultCard />
        </div>

        <Pagination currentPage={1} totalPages={1}/>
      </PageLayout>
    </>
  )
}