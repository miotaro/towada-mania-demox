"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import PulldownBox from './pulldownBox';

export default function SlidePanel() {
  const currentYear = new Date().getFullYear();

  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    bodyRef.current = document.body;//HTML全体の本体部分
    const body = bodyRef.current; //Reactの参照オブジェクト

    if (isOpen) {
      //<body>のこと。少し遅れて開く
      body?.classList.add('is-slidePanel-open', 'is-no-scroll');
      if (overlayRef.current) overlayRef.current.style.display = 'block';
      setTimeout(() => {
        panelRef.current?.classList.add('is-open');
      }, 100);
    } else {
      panelRef.current?.classList.remove('is-open');
      body?.classList.remove('is-slidePanel-open', 'is-no-scroll');
      setTimeout(() => {
        if (overlayRef.current) overlayRef.current.style.display = '';
      }, 600);
    }
  }, [isOpen]);

  const handleToggle = () => {
    //prev：現在のisOpenの値を示す一時変数
    setIsOpen((prev) => !prev);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="panel-overlay" ref={overlayRef} onClick={handleOverlayClick} />
      <div className="slidePanel" ref={panelRef}>
        <div className="slidePanel__inner">
          <div className={`hamburger-icon js-slidePanel-btn ${isOpen ? 'is-clicked' : ''}`}>
            <button type="button" className="_btn" onClick={handleToggle}>
              <div className="bars">
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>

          <header className="site-header">
            <h1 className="site-header__logo">
              <a href="/">
                <Image src="/img/logo_type01.svg" width={100} height={30} alt="トワダマニア" />
              </a>
            </h1>
            <Image
              className="site-header__img"
              src="/img/character06_02.png"
              width={391}
              height={138}
              alt=""
            />
          </header>

          <nav className="gnavi">
            <ul className="gnavi__list">
              <li className="gnavi__list-item">
                <a className="_btn" href="/top">
                  <span className="_text">HOME</span>
                  <span className="btn-arrow" />
                </a>
              </li>
              <li className="gnavi__list-item">
                <PulldownBox
                  pulldownName='slidePanel'
                  trigger={
                    <button type="button" className="_btn">
                      <span className="_text">記事</span>
                      <span className="pd-cross-icon" />
                    </button>
                  }
                >
                  <div className="pulldown js-pulldown__box">
                    <ul className="pulldown__list js-pulldown__box__inner">
                      <li className="pulldown__list-item"><a href="/archive/gourmet"><span className="_text">グルメ</span></a></li>
                      <li className="pulldown__list-item"><a href="/archive/event"><span className="_text">イベント</span></a></li>
                      <li className="pulldown__list-item"><a href="#"><span className="_text">温泉</span></a></li>
                      <li className="pulldown__list-item"><a href="#"><span className="_text">町の人</span></a></li>
                    </ul>
                  </div>
                </PulldownBox>
              </li>
              <li className="gnavi__list-item">
                <a className="_btn" href="/recruit"><span className="_text">求人</span><span className="btn-arrow" /></a>
              </li>
              <li className="gnavi__list-item">
                <a className="_btn" href="/flyer"><span className="_text">チラシ</span><span className="btn-arrow" /></a>
              </li>
            </ul>
            <ul className="subnavi">
              <li className="subnavi__item"><a className="_btn u-text-link" href="#">お問い合わせ</a></li>
              <li className="subnavi__item"><a className="_btn u-text-link" href="/privacy-policy">プライバシーポリシー</a></li>
            </ul>
          </nav>

          <p className="copyright">©{currentYear}.トワダマニア</p>
        </div>
      </div>
    </>
  );
}
