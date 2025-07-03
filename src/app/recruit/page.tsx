import PageLayout from "@/component/PageLayout";
import RecruitHeader from "./component/RecruitHeader";
import RecruitCardList from "./component/RecruitCardList";
import { recruitList } from "@/data/RecruitItems";
import Pagination from "@/component/Pagination";

export const metadata = {
  title: '十和田市の求人・アルバイト採用情報一覧｜トワダマニア',
  description: '青森県十和田市の求人・バイト・採用情報をまとめて掲載中。飲食店やショップ、地域企業の募集情報やストーリーを通じて、「働くことが楽しくなる」出会いを届けます。地域で挑戦したい人を応援します。',
  openGraph: {
    title: '十和田市の求人・アルバイト採用情報一覧｜トワダマニア',
    description: '青森県十和田市の求人・バイト・採用情報をまとめて掲載中。飲食店やショップ、地域企業の募集情報やストーリーを通じて、「働くことが楽しくなる」出会いを届けます。地域で挑戦したい人を応援します。',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '十和田市の求人・アルバイト採用情報一覧｜トワダマニア',
    description: '青森県十和田市の求人・バイト・採用情報をまとめて掲載中。飲食店やショップ、地域企業の募集情報やストーリーを通じて、「働くことが楽しくなる」出会いを届けます。地域で挑戦したい人を応援します。',
    images: ['/icons/favicon.ico'],
  }
};

export default function Recruit() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '求人' },
  ];

  return (
    <>
      <PageLayout
        className="page-recruit"
        currentMenu="recruit"
        pageTitle="求人"
        useSplideNav={false}
        headerColor="--pink"
        headerImage="/img/ph-icon_recruit.svg"
        breadcrumbItems={breadcrumbItems}
      >
        <RecruitHeader />
        <RecruitCardList recruitList={recruitList}/>
        <Pagination currentPage={1} totalPages={1}/>
      </PageLayout>
    </>
  )
}
