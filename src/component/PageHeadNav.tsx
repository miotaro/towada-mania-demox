'use client';
import { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';

type PageHeadNavProps = {
  current: string;
};

export default function PageHeadNav({current}: PageHeadNavProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

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
  }, []);

  const navItems = [
  { label: '記事', url: '/archive/' },
  { label: 'グルメ', url: '/archive/gourmet' },
  { label: 'イベント', url: '/archive/event' },
  { label: '温泉', url: '/archive/spa' },
  { label: '町の人', url: '/archive/people' },
  { label: 'お店', url: '/archive/shop' },
  { label: '商品', url: '/archive/item' },
  { label: 'メニュー', url: '/archive/menu' },
];

  return (
    <nav className="page-head-navi splide" data-start="0" ref={navRef}>
      <div className="splide__track">
        <ul className="page-head-navi__list splide__list">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`page-head-navi__list-item splide__slide${
                item.label === current ? ' is-current' : ''}`}
              style={{ ['--z-index' as any]: 8 - index } as React.CSSProperties}
            >
              <a href={item.url}><span className="_text">{item.label}</span></a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};