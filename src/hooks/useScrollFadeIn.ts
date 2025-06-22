// src/hooks/useScrollFadeIn.ts
'use client';
import { useEffect } from 'react';

export const useScrollFadeIn = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.js-scroll-fadein');
    if (!elems.length) return;

    function hasPct(value: string) {
      return value.includes('%');
    }

    function phPctToPix(val: string) {
      const phoneHeight = window.innerHeight;
      const percentVal = parseFloat(val);
      const pixelVal = phoneHeight * (percentVal / 100);
      return pixelVal;
    }

    const wspBlock = 0; // 画面サイズに合わせて調整
    const wspInline = 0;

    elems.forEach((elem) => {
      const elRmg = elem.getAttribute('data-rmgn') || '-20%';
      const dataRm = hasPct(elRmg) ? phPctToPix(elRmg) : parseFloat(elRmg);
      const rootMgnBlock = `${wspBlock * -1 + dataRm}px`;
      const rootMgnInline = `${wspInline * -1}px`;

      const options = {
        root: null,
        rootMargin: elem.getAttribute('data-rMargin') || `${rootMgnBlock} ${rootMgnInline}`,
        threshold: parseFloat(elem.getAttribute('data-threshold') || '0'),
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-show');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      observer.observe(elem);
    });
  }, []);
};
