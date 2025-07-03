'use client';
import { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';

type PageHeadNavProps = {
  current: React.ReactNode;
  useSplideNav?: boolean;
  color?: string;
  image?: string;
};

export default function PageHeadNav({
  current,
  useSplideNav = false,
  color,
  image,
}: PageHeadNavProps) {

  const navRef = useRef<HTMLDivElement>(null);

  //Splide
  useEffect(() => {
    if (!useSplideNav || !navRef.current) return;

    const el = navRef.current;
    const startPosi = el.getAttribute('data-start');

    new Splide(el, {
      drag: 'free',
      perPage: 4,
      start: startPosi ? Number(startPosi) : 0,
      snap: true,
      arrows: false,
      pagination: false,
      padding: { left: "0", right: "2rem" },
    }).mount();
  }, [useSplideNav]);

  //pageHeadSticky--------------------------------------------------
  useEffect(() => {
    if (!useSplideNav) return;

    const main = document.querySelector('main');
    const pageHead = document.querySelector('.page-head') as HTMLElement;
    if (!main || !pageHead) return;

    main.classList.add('has-ph-navi');

    const banner = document.querySelector('.content-body > .banner') as HTMLElement;
    const bnrH = banner ? banner.offsetHeight : 0;
    pageHead.style.setProperty('--banner-h', `${bnrH}px`);

    const nextElem = pageHead.nextElementSibling as HTMLElement;
    const pageHeadNavi = pageHead.querySelector('.page-head-navi') as HTMLElement;
    if (!nextElem || !pageHeadNavi) return;

    const rmt = pageHeadNavi.offsetHeight;
    const pnHeight = pageHead.offsetHeight - nextElem.offsetHeight;
    const options = {
      root: null,
      rootMargin: `${-pnHeight - 1}px 0px 0px 0px`, // ← -1px で微調整もOK
      threshold: 0,
    };
    pageHead.style.setProperty('--rmt', `${rmt}px`);

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        document.body.classList.add('is-ph-sticky');
      } else {
        document.body.classList.remove('is-ph-sticky');
      }
    }, options);

    observer.observe(nextElem);

    return () => observer.disconnect();
  }, [useSplideNav]);
  //--------------------------------------------------------------------------

  const navItems = [
    { label: '記事', url: '/archive/', color: '--pink', bkcolor: '--color-yellow', image: '/img/ph-icon_news.svg' },
    { label: 'グルメ', url: '/archive/gourmet', color: '--pink', bkcolor: '--color-orange-a50', image: '/img/ph-icon_news.svg' },
    { label: 'イベント', url: '/archive/event', color: '--orange', bkcolor: '--color-blue-a50', image: '/img/ph-icon_event.svg' },
    { label: '温泉', url: '/archive/hotSpring', color: '--white', bkcolor: '--color-pink-a50', image: '/img/ph-icon_news.svg' },
    { label: '町の人', url: '/archive/people', color: '--white', bkcolor: '--color-yellow', image: '/img/ph-icon_news.svg' },
    { label: 'お店', url: '/archive/shop', color: '--white', bkcolor: '--color-orange-a50', image: '/img/ph-icon_news.svg' },
    { label: '商品', url: '/archive/product', color: '--white', bkcolor: '--color-blue-a50', image: '/img/ph-icon_news.svg' },
    { label: 'メニュー', url: '/archive/menu', color: '--white', bkcolor: '--color-pink-a50', image: '/img/ph-icon_news.svg' },
  ];

  // 現在ページの情報を取得
  const currentIndex = navItems.findIndex(item => item.label === current);
  const reorderedNavItems = currentIndex !== -1
    ? [...navItems.slice(currentIndex), ...navItems.slice(0, currentIndex)]
    : navItems;

  const currentItem = navItems.find((item) => item.label === current);
  const currentColor = color || currentItem?.color || '--white';
  const currentImage = image || currentItem?.image || '';

  return (
    <div className={`page-head phdc-bg ${currentColor} ${useSplideNav ? '' : 'u-text-center'}`}>
      <div className="page-head__inner">
        <h1 className="page-head__text">{currentItem?.label || current}</h1>
        {currentImage && (
          <div className="page-head__icon">
            <img src={`${currentImage}`} width="100%" height="auto" alt="" />
          </div>
        )}
      </div>

      {useSplideNav && (
        <nav className="page-head-navi splide" data-start="0" ref={navRef}>
          <div className="splide__track">
            <ul className="page-head-navi__list splide__list">
              {reorderedNavItems.map((item, index) => (
                <li
                  key={index}
                  className={`page-head-navi__list-item splide__slide${item.label === current ? ' is-current' : ''}`}
                  style={{ ['--z-index' as any]: 8 - index } as React.CSSProperties}
                >
                  <a href={item.url} style={{ backgroundColor: `var(${item.bkcolor})` }}><span className="_text">{item.label}</span></a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};