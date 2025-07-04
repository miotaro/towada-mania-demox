import TabPanel from "@/component/TabPanels";
import PageLayout from "@/component/PageLayout";
import FlyerTabPanel from "../component/FlyerTabPanel";
import ShopInfoTabPanel from "../component/ShopInfoTabPanel";
import FlyerButton from "../component/FlyerButton";

export const metadata = {
  title: '{チラシ名}｜トワダマニア',
  // description: '{チラシ説明}',
  openGraph: {
    title: '{チラシ名}｜トワダマニア',
    // description: '{チラシ説明}',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '{チラシ名}｜トワダマニア',
    // description: '{チラシ説明}',
    images: ['/icons/favicon.ico'],
  }
};

export default function Detail() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: 'チラシ', href: '/flyer' },
    { label: 'トワダマニア商店チラシ', href: '/flyer/shop' },
    { label: 'チラシ詳細' },
  ];
  return (
    <>
      <PageLayout
        className="page-flyer-detail"
        currentMenu="none"
        pageTitle="チラシ"
        useSplideNav={false}
        headerColor="--orange"
        headerImage="/img/ph-icon_flyer.svg"
        breadcrumbItems={breadcrumbItems}
      >

        <TabPanel
          className="flyer-detail"
          tabButtons={[
            { id: 'flyer', label: 'チラシ' },
            { id: 'shop-info', label: '店舗詳細' },
          ]}
        >

          <FlyerTabPanel />
          <ShopInfoTabPanel />
          
        </TabPanel>
        <FlyerButton />
      </PageLayout>
    </>
  )
}