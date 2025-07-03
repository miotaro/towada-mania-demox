import TabPanel from "@/component/TabPanels";
import PageLayout from "@/component/PageLayout";
import RecruitDetailHeader from "../component/RecruitDetailHeader";
import RecruitSection from "../component/RecruitSection";
import RecruitCompanyInfo from "../component/RecruitCompanyInfo";
import RecruitButtonGroup from "../component/RecruitButtonGroup";
import { companyInfoItems, recruitSections } from "@/data/RecruitItems";

export const metadata = {
  title: '{求人タイトル}｜トワダマニア',
  // description: '{求人説明}',
  openGraph: {
    title: '{求人タイトル}｜トワダマニア',
    // description: '{求人説明}',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '{求人タイトル}｜トワダマニア',
    // description: '{求人説明}',
    images: ['/icons/favicon.ico'],
  }
};

export default function RecruitDetail() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '求人' },
  ];

  return (
    <>
      <PageLayout
        className="page-recruit"
        currentMenu="none"
        pageTitle="求人"
        useSplideNav={false}
        headerColor="--pink"
        headerImage="/img/ph-icon_recruit.svg"
        breadcrumbItems={breadcrumbItems}
      >
        <TabPanel
          className="recruit-detail"
          tabButtons={[
            { id: 'job-listing', label: '求人情報' },
            { id: 'company-info', label: '企業情報' },
          ]}
        >
          <div>
            <RecruitDetailHeader
              isNew={true}
              title="明るく楽しく元気はつらつ！..."
              jobType="WEBデザイナー"
              companyName="株式会社トワダマニア"
              location="青森県十和田市"
              employmentType="正社員"
            >
              {recruitSections
                .filter(section => section.title !== "業務内容")
                .map((section, index) => (
                  <RecruitSection key={index} title={section.title}>
                    {Array.isArray(section.content) ? (
                      <ul>{section.content.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </RecruitSection>
                ))}
            </RecruitDetailHeader>
            {recruitSections
              .filter(section => section.title === "業務内容")
              .map((section, index) => (
                <RecruitSection key={index} title={section.title}>
                  {Array.isArray(section.content) ? (
                    <ul>{section.content.map((item, i) => <li key={i}>{item}</li>)}</ul>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </RecruitSection>
              ))}
          </div>

          <div>
            <RecruitCompanyInfo items={companyInfoItems}/>
          </div>
        </TabPanel>
        <RecruitButtonGroup link="https://example.com"/>
      </PageLayout>
    </>
  )
}