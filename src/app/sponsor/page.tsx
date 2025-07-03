import PageLayout from "@/component/PageLayout";
import SponsorSection from "./component/SponsorSection";
import { sponsorSections } from "@/data/sponsorItems";

export const metadata = {
  title: 'トワダマニアのスポンサー・広告協賛募集｜十和田の魅力を共に届けるパートナーを募集しています',
  description: 'トワダマニアは、青森県十和田市のローカルメディアとして、地域の魅力を地元目線で発信しています。この取り組みに共感し、共に地域を盛り上げるスポンサー・パートナーを募集しています。広告掲載やプロジェクト連携など、ご一緒できる形を柔軟にご提案します。',
  openGraph: {
    title: 'トワダマニアのスポンサー・広告協賛募集｜十和田の魅力を共に届けるパートナーを募集しています',
    description: 'トワダマニアは、青森県十和田市のローカルメディアとして、地域の魅力を地元目線で発信しています。この取り組みに共感し、共に地域を盛り上げるスポンサー・パートナーを募集しています。広告掲載やプロジェクト連携など、ご一緒できる形を柔軟にご提案します。',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'トワダマニアのスポンサー・広告協賛募集｜十和田の魅力を共に届けるパートナーを募集しています',
    description: 'トワダマニアは、青森県十和田市のローカルメディアとして、地域の魅力を地元目線で発信しています。この取り組みに共感し、共に地域を盛り上げるスポンサー・パートナーを募集しています。広告掲載やプロジェクト連携など、ご一緒できる形を柔軟にご提案します。',
    images: ['/icons/favicon.ico'],
  }
};

export default function Sponsor() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: 'スポンサー' },
  ];

  return (
    <>
      <PageLayout
        className="page-sponsor"
        currentMenu="none"
        pageTitle="スポンサー"
        useSplideNav={false}
        headerColor="--pink"
        headerImage="/img/ph-icon_sponsor.svg"
        breadcrumbItems={breadcrumbItems}
        sponsorClass={true}
      >
        {sponsorSections.map((section, i) => (
          <SponsorSection
            key={i}
            title={section.title}
            modifierClass={section.modifierClass}
            colClass={section.colClass}
            sponsors={section.sponsors}
          />
        ))}
      </PageLayout>
    </>
  )
}