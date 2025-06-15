'use client'
import Image from 'next/image'
import { useModalStore } from '@/store/modalStore';

type MenuType = 'home' | 'article' | 'recruit' | 'flyer' | 'null';
type MenuTypeProps = {
  current: MenuType;
}

export default function BtmfixMenu({ current }: MenuTypeProps) {
  const { open } = useModalStore();

  const menuItems = [
    {
      key: 'home',
      label: 'ホーム',
      href: '/',
      svgId: 'home',
    },
    {
      key: 'article',
      label: '記事',
      href: '/archive/',
      svgId: 'article',
    },
    {
      key: 'recruit',
      label: '求人',
      href: '/recruit/',
      svgId: 'recruit',
    },
    {
      key: 'flyer',
      label: 'チラシ',
      href: '/flyer/',
      svgId: 'flyer',
    },
  ];

  return (
    <div className="btmfix-menu">
      {/* 左2個 */}
        {menuItems.slice(0, 2).map((item) => (
          <a
            key={item.key}
            className={`menu-item ${item.key}${item.key === current ? ' is-current' : ''}`}
            href={item.href}
          >
            <div className="menu-item__icon">
              <span className="_badge"></span>
              <div className="_icon">
                <svg viewBox="0 0 40 30">
                  <use href={`/img/fix-menu-icon.svg#${item.svgId}`} />
                </svg>
              </div>
            </div>
            <p className="menu-item__text">{item.label}</p>
          </a>
        ))}

      {/* コレミテ中央 */}
        <button type="button" className="menu-koremite-btn js-modal-open" data-modal-id="koremite" onClick={open}>
          <Image
            src="/img/koremite_btn_text.png"
            alt="コレミテ"
            width={100}
            height={30}
            style={{ width: '100%', height: 'auto' }}
          />
        </button>

      {/* 右2個 */}
        {menuItems.slice(2).map((item) => (
          <a
            key={item.key}
            className={`menu-item ${item.key}${item.key === current ? ' is-current' : ''}`}
            href={item.href}
          >
            <div className="menu-item__icon">
              <span className="_badge"></span>
              <div className="_icon">
                <svg viewBox="0 0 40 30">
                  <use href={`/img/fix-menu-icon.svg#${item.svgId}`} />
                </svg>
              </div>
            </div>
            <p className="menu-item__text">{item.label}</p>
          </a>
        ))}
    </div>
  )
}