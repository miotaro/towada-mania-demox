import PageLayout from "@/component/PageLayout";
import EventModal from "./component/EventModal";
import EventTitle from "./component/EventTitle";
import EventsCalendar from "./component/EventsCalendar";
import Banner from "@/component/Banner";
import Button from "@/component/Button";

export const metadata = {
  title: '十和田市のイベント情報カレンダー｜トワダマニア',
  description: '青森県十和田市のイベント情報をカレンダーでチェック！お祭り・マルシェ・ライブ・ワークショップなど、地元で開催される旬なイベントを見逃さずに楽しもう。家族でも友人とでも、次のおでかけをトワダマニアで見つけよう。',
  openGraph: {
    title: '十和田市のイベント情報カレンダー｜トワダマニア',
    description: '青森県十和田市のイベント情報をカレンダーでチェック！お祭り・マルシェ・ライブ・ワークショップなど、地元で開催される旬なイベントを見逃さずに楽しもう。家族でも友人とでも、次のおでかけをトワダマニアで見つけよう。',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '十和田市のイベント情報カレンダー｜トワダマニア',
    description: '青森県十和田市のイベント情報をカレンダーでチェック！お祭り・マルシェ・ライブ・ワークショップなど、地元で開催される旬なイベントを見逃さずに楽しもう。家族でも友人とでも、次のおでかけをトワダマニアで見つけよう。',
    images: ['/icons/favicon.ico.ico'],
  }
};

export default function Event() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '記事', href: '/archive' },
    { label: 'イベント' },
  ];

  return (
    <>
      <PageLayout
        className="page-event"
        currentMenu="none"
        pageTitle="イベント"
        useSplideNav={true}
        breadcrumbItems={breadcrumbItems}
      >
        <EventTitle />
        <EventsCalendar />

        <Button
          groupClass={["events-btns", "btn-group"]}
          linkClass="btn-secondary"
          title="イベント一覧を見る"
          href="#"
        />
        <Banner />

      </PageLayout>

      <EventModal />
    </>
  )
}