'use client';
import { useModalStore } from '@/store/modalStore';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react'

export default function KoremiteModal() {
  const isOpen = useModalStore((state) => state.modals.koremite);
  const close = useModalStore((state) => state.close);
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        close("koremite");
      }
    };

    if (isOpen) {
      setShow(true);
      const timer = setTimeout(() => setAnimate(true), 100);
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      }
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
        onClick={() => close('koremite')} tabIndex={-1}
      />

      <div
        className={`modal koremite-modal ${animate ? 'is-open' : ''}`}
        data-modal-id="koremite"
        aria-hidden={show ? 'false' : 'true'}
      >
        <div className="modal-body" ref={modalRef}>
          <button type="button" className="modal-close js-modal-close" aria-label="Close modal" onClick={() => close('koremite')}>
            <svg viewBox="0 0 14 14">
              <use href="#cross" />
            </svg>
          </button>
          <div className="modal-body__inner" role="document">
            <h2 className="km-title">
              <Image src="/img/koremite_modal_title.png" width={500} height={200} alt="トワダマニアのコレミテ!!" />
            </h2>
            <div className="character-grip">
              <div className="_character">
                <span>
                  <Image src="/img/character01.png" width={300} height={300} alt="サンプル" />
                </span>
              </div>
              <div className="_hand-grip">
                <Image src="/img/koremite_modal_sample01.jpg" width={300} height={300} alt="サンプル" />
              </div>
            </div>
            <h3 className="km-subtitle">ランチ行くならトワダ食堂だよねぇ</h3>
            <div className="km-reason">
              <h4 className="km-reason__title">
                <Image src="/img/koremite_modal_reason.svg" width={190} height={34} alt="オススメ理由" />
              </h4>
              <div className="km-reason__text">
                <div className="_arrow"></div>
                <p>
                  学生たちの胃袋を満たす、愛され続けるトワダ食堂。安い！早い！うまい！私が週3で通ってしまう魅力は他にも・・・！！！
                </p>
              </div>
            </div>
            <div className="u-text-center">
              <a className="btn btn-md btn-primary" href="#">
                気になる？<span className="btn-arrow"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};