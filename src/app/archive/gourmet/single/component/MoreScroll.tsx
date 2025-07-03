'use client'
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function MoreScroll() {
  useScrollFadeIn();

  return (
    <>
      <div className="more-scroll js-scroll-fadein" data-fade-type="blur-in">
        <img src="/img/more_scroll.webp" width="100%" height="auto" alt="もーっと詳しく知りたい" />
      </div>
    </>
  )
}