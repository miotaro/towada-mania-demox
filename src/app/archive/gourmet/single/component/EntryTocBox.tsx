import PulldownBox from "@/component/pulldownBox"

export default function EntryTocBox() {
  return (
    <>
      <PulldownBox
        pulldownName="singleMenu"
        className="index-box"
        trigger={
          <p className="index-box__head">
            <span className="_icon">
              <svg viewBox="0 0 6 10"><use href="#arrow-right"></use></svg>
            </span>
            目次
          </p>
        }
      >
        <ol className="index-box__list">
          <li className="index-box__list-item">
            <a href="#ipl-01">店内はまるで秘密基地</a>
            <ol className="lower-list">

              <li className="lower-list__item"><a href="#ipl-02">秘密のヒミツをこっそり教えちゃう</a></li>

              <li className="lower-list__item"><a href="#ipl-03">秘密のヒミツをこっそり教えちゃう</a></li>

            </ol>
          </li>
          <li className="index-box__list-item">
            <a href="#ipl-04">店内はまるで秘密基地</a>
            <ol className="lower-list">

              <li className="lower-list__item"><a href="#ipl-05">秘密のヒミツをこっそり教えちゃう</a></li>

              <li className="lower-list__item"><a href="#ipl-06">秘密のヒミツをこっそり教えちゃう</a></li>

            </ol>
          </li>
        </ol>
      </PulldownBox>
    </>
  )
}