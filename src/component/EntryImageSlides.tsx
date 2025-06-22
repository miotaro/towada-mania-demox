'use client'
import { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';

export default function EntryImageSlide() {
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!slideRef.current) return;

    const splide = new Splide(slideRef.current, {
      arrows: false,
      autoplay: false,
      interval: 5000,
      speed: 500,
      updateOnMove: true,
      type: 'loop',
      focus: 'center',
      perPage: 1,
      pagination: true,
      classes: {
        pagination: 'splide__pagination eis-pagination',
        page: 'splide__pagination__page eis-pagination__dots',
      },
    });

    splide.mount();

    // オプション：クリーンアップ
    return () => {
      splide.destroy();
    };
  }, []);

  const slides = [
    { src: '/img/koremite_modal_sample01.jpg', caption: 'これはキャプション1です' },
    { src: '/img/koremite_modal_sample01.jpg', caption: 'キャプション2番目' },
    { src: '/img/koremite_modal_sample01.jpg', caption: 'スライド3の説明文' },
    { src: '/img/koremite_modal_sample01.jpg', caption: 'ラストのキャプション' },
  ];

  return (
    <>
      <div className="entry-img-slide splide" aria-label="画像スライダー" ref={slideRef} id="ipl-04">
        <div className="splide__track">
          <div className="splide__list">
            {slides.map((item, index) => (
              <div className="splide__slide" key={index}>
                <figure className="eis-img">
                  <img src={item.src} width="100%" height="auto" alt={`スライド画像 ${index + 1}`} />
                </figure>
                <p className="eis-caption text-box-center">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}