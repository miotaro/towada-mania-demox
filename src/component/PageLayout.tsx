import SlidePanel from "@/component/slidePanel";
import PageLoader from "@/component/pageLoader";
import PageHeadNav from "@/component/PageHeadNav";
import BtmfixMenu from "@/component/BtmfixMenu";
import Breadcrumb from "@/component/Breadcrumb";
import Footer from "@/component/footer";
import MobileWindow from "@/component/mobileWindow";
import { ReactNode } from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
}

type MenuType = 'home' | 'article' | 'recruit' | 'flyer' | 'none';

type Props = {
  className?: string;
  currentMenu?: MenuType;
  pageTitle?: ReactNode;
  useSplideNav?: boolean;
  headerColor?: string;
  headerImage?: string;
  breadcrumbItems?: BreadcrumbItem[];
  banner?: React.ReactNode;
  sponsorClass?: boolean;
  children: React.ReactNode;
};

export default function PageLayout({
  className = "",
  currentMenu,
  pageTitle,
  useSplideNav = false,
  headerColor,
  headerImage,
  breadcrumbItems,
  banner,
  sponsorClass = false,
  children,
}: Props) {
  return (
    <>
      <div className={className}>
        <PageLoader />
        <MobileWindow>
          <SlidePanel />
          <BtmfixMenu current={currentMenu} />
          <div className="content-body">
            {banner && <>{banner}</>}
            {/* スポンサーだけ独特の背景 */}
            {sponsorClass && <div className="sponsor-fix-bg">{sponsorClass}</div>}
            <main>
              <PageHeadNav 
                current={pageTitle!}
                useSplideNav={useSplideNav}
                color={headerColor}
                image={headerImage}
              />
              {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
              {children}
            </main>
            <Footer />
          </div>
        </MobileWindow>
      </div>
    </>
  )
}