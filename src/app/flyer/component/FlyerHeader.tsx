import CheckboxPulldown from "@/component/CheckboxPulldwn"

export default function FlyerHeader() {
  const flyerCategories = [
    "広報・政治",
    "日用品・食品",
    "求人",
    "車",
    "住宅",
    "買い取り",
    "デリバリー",
    "勉強会",
    "アパレル",
    "家具・家電",
  ];
  return (
    <div className="check-serchbox --cs-warm">
      <CheckboxPulldown
        name="flyerCategory"
        label="カテゴリ"
        options={flyerCategories}
      />

      <div className="btn-group">
        <button type="button" className="btn btn-md btn-white btn-fulled js-uncheckAll">クリア</button>
        <button type="submit" className="btn btn-md btn-primary btn-fulled">検索する</button>
      </div>
      <div className="check-serchbox__result">
        <p className="_number">検索結果<span>10</span>件</p>
        <p className="_distext">（1〜10件を表示）</p>
      </div>
    </div>
  )
}