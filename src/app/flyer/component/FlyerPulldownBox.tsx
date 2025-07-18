import PulldownBox from "@/component/pulldownBox"

export default function FlyerPulldownBox() {
  return (
    <PulldownBox
      pulldownName="flyerCategory"
      className="check-serchbox__item"
      trigger={
        <button type="button" className="check-serchbox__toggle js-pulldown__btn">
          <span className="_text">カテゴリ</span>
          <span className="pd-cross-icon"></span>
        </button>
      }
    >
      <div className="js-pulldown__box">
        <div className="js-pulldown__box__inner">
          <ul className="check-serchbox__list">
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>広報・政治</span>
              </label>
            </li>
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>日用品・食品</span>
              </label>
            </li>
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>求人</span>
              </label>
            </li>
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>車</span>
              </label>
            </li>
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>住宅</span>
              </label>
            </li>
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>買い取り</span>
              </label>
            </li>
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>デリバリー</span>
              </label>
            </li>
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>勉強会</span>
              </label>
            </li>
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>アパレル</span>
              </label>
            </li>
            <li className="check-serchbox__list-item">
              <label className="label-checkbox">
                <input type="checkbox" name="" value="" /><span>家具・家電</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </PulldownBox>
  )
}