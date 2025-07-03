import PageLayout from "@/component/PageLayout";
import TowadamaniaShopTitle from "@/component/TowadamaniaShopTitle";
import FlyerList from "../component/FlyerList";
import Button from "@/component/Button";
import FlyerButton from "../component/FlyerButton";

export const metadata = {
  title: '十和田市の{店舗名}のチラシ情報｜トワダマニア',
  // description: '{店舗説明}',
  openGraph: {
    title: '十和田市の{店舗名}のチラシ情報｜トワダマニア',
    // description: '{店舗説明}',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'トワダマニア｜十和田のディ十和田市の{店舗名}のチラシ情報｜トワダマニアープな魅力を地元から発信するローカルメディア',
    // description: '{店舗説明}',
    images: ['/icons/favicon.ico'],
  }
};

export default function Shop() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: 'チラシ' },
  ];

  return (
    <>
      <PageLayout
        className="page-flyer"
        currentMenu="none"
        pageTitle="チラシ"
        useSplideNav={false}
        headerColor="--orange"
        headerImage="/img/ph-icon_flyer.svg"
        breadcrumbItems={breadcrumbItems}
      >
        <div className="shop-flyers gutter-container">
          <TowadamaniaShopTitle />
          <FlyerList />
          <FlyerButton />
        </div>
      </PageLayout>
    </>
  )
}