import PageLayout from "@/component/PageLayout";
import PrivacyPolicyBody from "./component/PrivacyPolicy";

export const metadata = {
  title: 'プライバシーポリシー｜トワダマニア',
  // description: '-',
  openGraph: {
    title: 'プライバシーポリシー｜トワダマニア',
    // description: '-',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'プライバシーポリシー｜トワダマニア',
    // description: '-',
    images: ['/icons/favicon.ico'],
  }
};

export default function PrivacyPolicy() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: 'プライバシーポリシー' },
  ];

  return (
    <>
      <PageLayout
        className="page-recruit"
        currentMenu="none"
        pageTitle={
          <>プライバシー<br />ポリシー</>
        }
        useSplideNav={false}
        headerColor="--pink"
        breadcrumbItems={breadcrumbItems}
      >
        <PrivacyPolicyBody />
      </PageLayout>
    </>
  )
}