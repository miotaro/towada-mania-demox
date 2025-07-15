import TowadamaniaShopTitle from "@/component/TowadamaniaShopTitle";
import FlyerList from "./FlyerList";
import { flyerItems } from "@/data/flyerItems";

export default function ShopResultCard() {
  const flyerCount = flyerItems.length;

  return (
    <section className="shop-result__card">
      <TowadamaniaShopTitle />
      <FlyerList limit={4}/>

      <a className="shop-result__btn" href="/flyer/shop">
        <span className="_inner">チラシをもっと見る<span className="_num">（全{flyerCount}枚）</span></span>
        <span className="btn-arrow"></span>
      </a>
    </section>
  )
}