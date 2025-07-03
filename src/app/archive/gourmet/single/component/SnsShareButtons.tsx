export default function SnsShareButtons() {
  return (
    <>
      <div className="sns-share">
        <p className="sns-share__title">この記事をシェアしよう！</p>
        <div className="sns-share__list">
          <a className="_x" href="">
            <svg viewBox="0 0 30 30"><use href="/img/share_sns_icon.svg#x"></use></svg>
          </a>
          <a className="_fb" href="">
            <svg viewBox="0 0 30 30"><use href="/img/share_sns_icon.svg#facebook"></use></svg>
          </a>
          <a className="_line" href="">
            <svg viewBox="0 0 30 30"><use href="/img/share_sns_icon.svg#line"></use></svg>
          </a>
        </div>
      </div>
    </>
  )
}