'use client';
import { useEffect } from 'react';

export const useScrollFadeIn = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.js-scroll-fadein');
    if (!elems.length) return;

    //値に%が含まれているかを判定
    function hasPct(value: string) {
      return value.includes('%');
    }

    //%をpxに変換する関数
    function phPctToPix(val: string) {
      const phoneHeight = window.innerHeight; //ブラウザの画面の高さを取得
      const percentVal = parseFloat(val); //文字列-20% → 数字-20
      const pixelVal = phoneHeight * (percentVal / 100); //pxに変換
      return pixelVal;
    }

    const wspBlock = 0;
    const wspInline = 0;

    //全.js-scroll-fadeinに対して処理を行う
    elems.forEach((elem) => {
      //HTMLのdata-rmgnを読み取る
      const elRmg = elem.getAttribute('data-rmgn') || '-20%';
      //elRmgに%が含まれているかをhasPct()でチェック。含まれていたらpxに変換。含まれていなかったらそのまま
      const dataRm = hasPct(elRmg) ? phPctToPix(elRmg) : parseFloat(elRmg);
      const rootMgnBlock = `${wspBlock * -1 + dataRm}px`;
      const rootMgnInline = `${wspInline * -1}px`;

      const options = {
        root: null,
        rootMargin: elem.getAttribute('data-rMargin') || `${rootMgnBlock} ${rootMgnInline}`,
        threshold: parseFloat(elem.getAttribute('data-threshold') || '1'),
      };

      //要素が画面に入ったかどうか
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //画面に入ったら.is-showを付与
            entry.target.classList.add('is-show');
            //一度表示されたら監視を解除。再発火なし
            observer.unobserve(entry.target);
          }
        });
      }, options);

      observer.observe(elem);
    });
  }, []); //初回マウント時のみ
};
