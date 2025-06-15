export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__inner">

          <div className="site-footer__logo">
            <a href="../../">
              <svg viewBox="0 0 230 96" role="img" aria-label="トワダマニア">
                <use href="/img/logo_type02_path.svg#logo"></use>
              </svg>
            </a>
          </div>

          <ul className="site-footer__sns">
            <li className="site-footer__sns-item">
              <a href="../../#" className="app-icon hover-bounce-in">
                <img src="/img/sns_icon_line.webp" width="100%" height="auto" alt="" />
              </a>
            </li>
            <li className="site-footer__sns-item">
              <a href="../../#" className="app-icon hover-bounce-in">
                <img src="/img/sns_icon_insta.webp" width="100%" height="auto" alt="" />
              </a>
            </li>
            <li className="site-footer__sns-item">
              <a href="../../#" className="app-icon hover-bounce-in">
                <img src="/img/sns_icon_x2.webp" width="100%" height="auto" alt="" />
              </a>
            </li>
          </ul>
          {/* <!-- /.dpc-sns --> */}

          <ul className="site-footer__navi">
            <li className="site-footer__navi-item">
              <a className="_btn" href="../../">サービスについて</a>
            </li>
            <li className="site-footer__navi-item">
              <a className="_btn" href="../../">サイトの使い方</a>
            </li>
            <li className="site-footer__navi-item">
              <a className="_btn" href="../../">運営会社</a>
            </li>
            <li className="site-footer__navi-item">
              <a className="_btn" href="../../">利用規約</a>
            </li>
            <li className="site-footer__navi-item">
              <a className="_btn" href="../../">プライバシーポリシー</a>
            </li>
            <li className="site-footer__navi-item">
              <a className="_btn" href="../../">お問い合わせ</a>
            </li>
            <li className="site-footer__navi-item">
              <a className="_btn" href="../../">よくある質問</a>
            </li>
          </ul>

          <p className="site-footer__copyright">©2024,トワダマニア</p>
        </div>
        <div className="site-footer__img"></div>
      </footer>
    </>
  )
}