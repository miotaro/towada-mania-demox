export default function EntryCard() {
  return (
    <>
      <article className="entry-card">
        <a className="entry-card__link" href="#">
          <div className="entry-card__content">
            <h2 className="_title">十和田のカフェバーに行ってみたらシャレオツだった件</h2>
            <p className="_desc">カフェ風バーで素敵な時間を！こだわりのフードaaa＆...</p>
          </div>
          <figure className="entry-card__thumb">
            <img className="u-cover-img" src="../../img/single_sample_01.webp" width="100%" height="auto" alt="" />
          </figure>
        </a>
      </article>
    </>
  )
}