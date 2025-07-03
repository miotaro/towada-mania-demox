import PageLayout from "@/component/PageLayout";
import PhiosIntro from "./component/PhilosIntro";
import PhilosStory from "./component/PhiosStory";
import PhilosThought from "./component/PhilosThought";

export const metadata = {
  title: 'トワダマニアの想い｜十和田をもっと好きになるきっかけを届けるローカルメディア',
  description: 'トワダマニアは、青森県十和田市の“ディープな日常”を発信するローカルメディアです。私たちが大切にしているのは、「知ればきっと好きになる十和田」。この街で暮らす人の視点から、地域の魅力とストーリーを伝え、共に楽しむ仲間を増やしていきたい。そんな想いを綴りました。',
  openGraph: {
    title: 'トワダマニアの想い｜十和田をもっと好きになるきっかけを届けるローカルメディア',
    description: 'トワダマニアは、青森県十和田市の“ディープな日常”を発信するローカルメディアです。私たちが大切にしているのは、「知ればきっと好きになる十和田」。この街で暮らす人の視点から、地域の魅力とストーリーを伝え、共に楽しむ仲間を増やしていきたい。そんな想いを綴りました。',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'トワダマニアの想い｜十和田をもっと好きになるきっかけを届けるローカルメディア',
    description: 'トワダマニアは、青森県十和田市の“ディープな日常”を発信するローカルメディアです。私たちが大切にしているのは、「知ればきっと好きになる十和田」。この街で暮らす人の視点から、地域の魅力とストーリーを伝え、共に楽しむ仲間を増やしていきたい。そんな想いを綴りました。',
    images: ['/icons/favicon.ico'],
  }
};

export default function Philosophy() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: 'PHILOSOPHY' },
  ];
  return (
    <>
      <PageLayout
        className="page-philosophy"
        currentMenu="none"
        pageTitle={
          <>
            <span className="_en">PHILOSOPHY</span><span className="_ja">フィロソフィ</span>
          </>
        }
        useSplideNav={false}
        headerColor="--pink"
        breadcrumbItems={breadcrumbItems}
      >
        <div className="gutter-container">
          <PhiosIntro />
          <PhilosStory />
          <PhilosThought />
        </div>
      </PageLayout>
    </>
  )
}
