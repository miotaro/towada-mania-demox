import PageLayout from "@/component/PageLayout";
import PageBody from "./component/pageBody";

export const metadata = {
  title: '404｜トワダマニア',
  // description: '-',
  openGraph: {
    title: '404｜トワダマニア',
    // description: '-',
    // url: 'https://towada.jp/archive/event',
    images: ['/icons/favicon.ico'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '404｜トワダマニア',
    // description: '-',
    images: ['/icons/favicon.ico'],
  }
};

export default function pageNotFound() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/top' },
    { label: '404 page not found.' },
  ];

  return (
    <>
      <PageLayout
        className="page-404"
        currentMenu="none"
        pageTitle="Page Not Found"
        useSplideNav={false}
        headerColor="--pink"
        breadcrumbItems={breadcrumbItems}
      >
        <PageBody />
      </PageLayout>
    </>
  )
}