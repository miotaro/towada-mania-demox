import MoreScroll from "./component/MoreScroll";
import PageLayout from "@/component/PageLayout";
import Banner from "@/component/Banner";
import EntryHeader from "./component/EntryHeader";
import EntryThumbnall from "./component/EntryThumbnall";
import EntryBriefIntro from "./component/EntryBriefIntro";
import ContributorProfile from "./component/ContributorProfile";
import HighlightBoard from "./component/HighlightBoard";
import EntryTocBox from "./component/EntryTocBox";
import ShopInfo from "./component/ShopInfo";
import SnsShareButtons from "./component/SnsShareButtons";
import TagList from "./component/TagList";
import StaffInfo from "./component/StaffInfo";
import AuthorInfo from "./component/AuthorInfo";
import SpeechBubbleLeft from "./component/SpeechBubbleLeft";
import SpeechBubbleRight from "./component/SppechBubbleRight";
import KoremiteSection from "./component/KoremiteSection";
import RelatedSection from "./component/RelatedSection";
import FirstPage from "./component/FirstPage";
import SecondPage from "./component/SecondPage";
import ThirdPage from "./component/ThirdPage";
import ForthPage from "./component/ForthPafe";
import YelBox from "./component/YelBox";
import EntryCard from "./component/EntryCard";
import DeetsQuote from "./component/DeetsQuote";

export const metadata = {
  title: '{記事タイトル}｜トワダマニア',
  description: '{記事説明}',
  openGraph: {
    title: '{記事タイトル}｜トワダマニア',
    description: '{記事説明}',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '{記事タイトル}｜トワダマニア',
    description: '{記事説明}',
    images: ['/icons/favicon.ico'],
  }
};

export default function Single() {

  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '記事', href: '/archive' },
    { label: 'グルメ', href: '/archive/gourmet' },
    { label: '記事の名前' },
  ];
  return (
    <>
      <PageLayout
        className="page-entry"
        currentMenu="none"
        pageTitle="グルメ"
        useSplideNav={true}
        breadcrumbItems={breadcrumbItems}
        banner={<Banner />}
      >
        <article className="entry">
          <EntryHeader />
          <EntryThumbnall />

          <div className="entry-body gutter-container">
            <EntryBriefIntro />
            <YelBox />
            <ContributorProfile />
            <EntryCard />
            <MoreScroll />
            <EntryTocBox />
            <HighlightBoard />
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <ForthPage />
            <DeetsQuote />
            <Banner />
            <ShopInfo />
            <SnsShareButtons />
            <TagList />
            <StaffInfo />
            <AuthorInfo />

            <SpeechBubbleLeft />
            <SpeechBubbleRight />

          </div>
        </article>

        <KoremiteSection />
        <RelatedSection />

      </PageLayout>
    </>
  )
}