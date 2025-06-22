'use client'
import { useModalStore } from "@/store/modalStore";
import { useState, useEffect } from "react";

export default function MoreModal() {
  const isOpen = useModalStore((state) => state.modals.more);
  const close = useModalStore((state) => state.close);
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
      if (isOpen) {
        setShow(true);
        const timer = setTimeout(() => setAnimate(true), 100)
        return () => clearTimeout(timer);
      } else {
        setAnimate(false);
        const timer = setTimeout(() => setShow(false), 300);
        return () => clearTimeout(timer);
      }
    }, [isOpen]);
  
    if (!show) return null;

  return (
    <>
      <div
        className={`modal-overlay is-folder ${animate ? 'is-show' : ''}`}
        onClick={() => close('more')} tabIndex={-1}
      />
      <div 
        className={`modal more-modal ${animate ? 'is-open' : ''}`}
        data-modal-id="more"
        data-modal-type="folder"
        aria-hidden={show ? 'false' : 'true'}
      >
        <div className="modal-body">
          <button type="button" className="modal-close js-modal-close" aria-label="Close modal" onClick={() => close('more')}>
            <svg viewBox="0 0 14 14"><use href="#cross"></use></svg>
          </button>
          <div className="modal-body__inner" role="document">
            <p className="more-modal__text">もっと見る</p>
            <div className="more-modal__content">
              <ul className="app-list">
                <li className="app-list__item">
                  <a href="#" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_buy.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">買う</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="flyer" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_flyer.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">今月のチラシ</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="archive" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_news.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">記事</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="archive/#" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_people.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">町の人</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="recruit" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_recruit.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">リクルート</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_contact.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">お問い合わせ</span>
                  </a>
                </li>
              </ul>
              <div className="more-modal__logo">
                <img src="img/logo_type01.svg" width="100%" height="auto" alt="トワダマニア" />
              </div>
              <ul className="app-list sns-list">
                <li className="app-list__item">
                  <a href="#" className="icon-group">
                    <span className="_icon hover-bounce-in"><img src="img/sns_icon_line.webp" width="100%" height="auto" alt="" /></span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="#" className="icon-group">
                    <span className="_icon hover-bounce-in"><img src="img/sns_icon_insta2.webp" width="100%" height="auto" alt="" /></span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="#" className="icon-group">
                    <span className="_icon hover-bounce-in"><img src="img/sns_icon_x.webp" width="100%" height="auto" alt="" /></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}