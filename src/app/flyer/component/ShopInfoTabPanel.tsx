import TowadamaniaShopTitle from "@/component/TowadamaniaShopTitle"

export default function ShopInfoTabPanel() {
  return (
    <div>
      <TowadamaniaShopTitle />
      <dl className="sb-info-table dl-table">
        <div className="_row">
          <dt className="_head">業種</dt>
          <dd className="_desc">製造業</dd>
        </div>
        <div className="_row">
          <dt className="_head">代表者</dt>
          <dd className="_desc">山田　太郎</dd>
        </div>
        <div className="_row">
          <dt className="_head">設立</dt>
          <dd className="_desc">2024年6月9日</dd>
        </div>
        <div className="_row">
          <dt className="_head">所在地</dt>
          <dd className="_desc">青森県十和田市</dd>
        </div>
        <div className="_row">
          <dt className="_head">電話番号</dt>
          <dd className="_desc">0123-45-6789</dd>
        </div>
        <div className="_row">
          <dt className="_head">メール</dt>
          <dd className="_desc">towada@gmail.com</dd>
        </div>
        <div className="_row">
          <dt className="_head">HP</dt>
          <dd className="_desc">http://www.towada.jp</dd>
        </div>
      </dl>
    </div>
  )
}