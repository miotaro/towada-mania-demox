import TowadamaniaShopTitle from "@/component/TowadamaniaShopTitle";
import FlyerList from "./FlyerList";

export default function ShopResultCard() {
  return (
    <section className="shop-result__card">
      {/* 会社(ショップ)モデルから */}
      <TowadamaniaShopTitle />
      <FlyerList limit={4}/>

      <a className="shop-result__btn" href="/flyer/shop">
        <span className="_inner">チラシをもっと見る<span className="_num">（全0枚）</span></span>
        <span className="btn-arrow"></span>
      </a>
    </section>
  )
}