export default function EntryHeader() {
  return (
    <>
      <header className="entry-header">
        <h1 className="entry-header__title">十和田のカフェバーに行ってみたらシャレオツだった件</h1>
        <p className="entry-header__subtitle">湖上カフェで、二人だけのロマンチックなひとときを</p>
        <div className="entry-header__info">
          <div className="post-contributor">
            <div className="_icon"><img className="u-cover-img" src="/img/no_img_contributor01.webp" width="100%" height="auto" alt="" /></div>
            <p className="_name">towadamania</p>
          </div>
          <time dateTime="2025-04-30">2025.04.30</time>
        </div>
      </header>
    </>
  )
}