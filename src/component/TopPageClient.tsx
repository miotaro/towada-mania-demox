'use client'
import SlidePanel from '@/component/slidePanel'
import PageLoader from '@/component/pageLoader'
import MoreModal from '@/component/moreModal'
import { useModalStore } from '@/store/modalStore'
import MobileWindow from '@/component/mobileWindow'

export default function TopPageClient() {
  const open = useModalStore((state) => state.open);

  return (
    <>
      <div className="page-home">
        <PageLoader />

        <MobileWindow>
          <SlidePanel />

          <div className="panel-overlay"></div>
          <div className="content-body">
            <main className="home-main">
              <img className="home-bg" src="img/home_bg.webp" width="100%" height="auto" alt="" />

              <ul className="app-list">
                <li className="app-list__item">
                  <a href="/archive/gourmet" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_gourmet.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">グルメ</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="/archive/event" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_event.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">イベント</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="/top" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_onsen.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">温泉</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="/top" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_shop.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">お店</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <a href="/sponsor" className="icon-group">
                    <span className="_icon --app-icon hover-bounce-in"><img src="img/ph-icon_sponsor.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">スポンサー</span>
                  </a>
                </li>
                <li className="app-list__item">
                  <button type="button" className="icon-group js-modal-open" data-modal-id="more" role="button" onClick={() => open('more')}>
                    <span className="_icon --floder hover-bounce-in"><img src="img/ph-icon_more.svg" width="100%" height="auto" alt="" /></span>
                    <span className="_text">もっと見る</span>
                  </button>
                </li>
              </ul>

              <MoreModal />

              <div className="home-bottom">
                <button type="button" className="home-bottom__btn hover-bounce-in js-modal-open" data-modal-id="koremite" role="button" onClick={() => open('koremite')}>
                  <img src="img/btn_home_koremite.svg" width="100%" height="auto" alt="おなたにオススメ コレミテ!!" />
                </button>
              </div>
            </main>
          </div>
        </MobileWindow>
      </div>
    </>
  )
}
