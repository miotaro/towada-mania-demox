'use client'
import { useEffect, useRef } from 'react'  

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement | null>(null)
  const charaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

    const pageLoadingScreen = async () => {
      if (!loaderRef.current || !charaRef.current) return
      await sleep(500)
      charaRef.current.classList.add('is-stop')
      await sleep(1500)
      loaderRef.current.classList.add('is-loaded')
      await sleep(1000)
      loaderRef.current.style.display = 'none'
      loaderRef.current.classList.remove('is-loaded')
    }

    const topPageAnime = async () => {
      const homeMain = document.querySelector('.home-main')
      if (!homeMain) return
      await sleep(200)
      homeMain.classList.add('is-active')
    }

    const contPageAnime = async () => {
      const fixMenu = document.querySelector('.btmfix-menu')
      if (!fixMenu) return
      fixMenu.classList.add('is-show')
    }

    const scrollAnime = () => {
      // 必要に応じてここにも処理追加
    }

    const run = async () => {
      await pageLoadingScreen()
      await topPageAnime()
      await contPageAnime()
      scrollAnime()
    }

    run()
  }, [])

  useEffect(() => {
  const transitionEl = document.querySelector('.page-transition') as HTMLElement
  const chara = document.querySelector('.transition-loader') as HTMLElement

  if (!transitionEl || !chara) return

  const onPageShow = (event: PageTransitionEvent) => {
    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (event.persisted || navEntry?.type === "back_forward") {
      transitionEl.classList.remove('is-transition')
      transitionEl.classList.add('is-loaded')
      document.body.classList.remove('is-no-scroll')
      chara.classList.remove('is-start')
      setTimeout(() => {
        transitionEl.style.display = 'none'
        transitionEl.classList.remove('is-loaded')
      }, 600)
    }
  }

  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const link = target.closest('a') as HTMLAnchorElement | null

    if (
      link &&
      link.href &&
      link.target !== '_blank' &&
      link.hostname === location.hostname &&
      !link.hash
    ) {
      e.preventDefault()
      transitionEl.style.display = 'block'
      transitionEl.classList.add('is-transition')
      document.body.classList.add('is-no-scroll')
      chara.classList.add('is-start')
      setTimeout(() => {
        window.location.href = link.href
      }, 600)
    }
  }

  window.addEventListener('pageshow', onPageShow)
  document.body.addEventListener('click', onClick)

  return () => {
    window.removeEventListener('pageshow', onPageShow)
    document.body.removeEventListener('click', onClick)
  }
}, [])


  return (
    <>
      <div className="page-transition" ref={loaderRef}>
        <div className="transition-mask --navy">
          {/* <!-- <div className="_logo"><img src="img/logo_type01_w.svg" width="100%" height="auto" alt=""></div> --> */}
        </div>
        <div className="transition-mask --pink"></div>
        <div className="transition-mask --orange"></div>
        <div className="transition-mask --yellow"></div>
        <div className="transition-loader" ref={charaRef}>
          <div className="_inner">
            <div className="_chara"><img src="/img/loader_chara.png" width="100%" height="auto" alt="" /></div>
            <div className="_bubble">
              <img className="_bg" src="/img/loader__bubble.png" width="100%" height="auto" alt="" />
              <p className="_text">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 28">
                <path d="M6.2 16.132q7.37-.051 12.2-.257-.331 1.31-.407 2.518t-.077 2.928H0q.204-4.983.204-9.325T0 2.672h6.2zm16.024 3.43q-2.046-2.017-2.046-5.305 0-3.21 2.046-5.215c2.046-2.005 3.494-2.003 6.391-2.003q2.923 0 4.892.963c1.97.963 2.283 1.507 2.91 2.594q.94 1.632.94 3.66 0 3.315-2.172 5.319-2.175 2.003-6.57 2.003-4.346 0-6.391-2.017m8.958-3.147q.813-.796.813-2.132 0-1.26-.813-2.068-.814-.81-2.465-.81c-1.651 0-1.906.266-2.414.797q-.763.796-.763 2.08 0 1.337.763 2.133.762.796 2.414.796c1.652 0 1.922-.265 2.465-.796m24.244.642q0 .873.204 1.233.203.359.812.514l-.101 2.414q-.814.129-1.41.18a20 20 0 0 1-1.589.052q-2.186 0-2.897-.99-.712-.988-.711-2.53v-.642q-.737 2.108-2.148 3.134-1.41 1.028-3.596 1.028-2.542 0-3.825-1.028t-1.283-3.057q0-1.67 1.093-2.62t3.38-1.31a34 34 0 0 0-3.863-2.415q1.524-1.952 3.482-2.967Q44.93 7.04 47.726 7.04q3.914 0 5.807 1.708 1.892 1.708 1.893 5.253zm-9.454-5.06a5.2 5.2 0 0 0-1.778 1.31q1.524-.18 3.812-.18.94 0 1.321-.231t.382-.592q0-.307-.382-.526-.381-.218-1.068-.218-1.295 0-2.287.436m2.186 4.713q1.143-.552 1.576-1.451v-.668a5.8 5.8 0 0 1-1.347.475q-.738.167-1.78.321l-.914.154q-1.424.283-1.423.976 0 .745 1.321.745 1.423 0 2.567-.552m26.277-5.381q0 5.163.152 9.992h-5.743l.076-3.082q-.737 1.72-2.134 2.53-1.4.81-3.304.809a4.97 4.97 0 0 1-2.974-.95q-1.32-.95-2.058-2.582t-.737-3.583a9.1 9.1 0 0 1 .737-3.635q.737-1.708 2.071-2.75c1.334-1.041 1.902-1.04 3.037-1.04q1.982 0 3.392.835 1.41.836 2.097 2.582 0-1.464-.101-4.7-.102-3.135-.102-4.42h5.743a313 313 0 0 0-.152 9.994m-6.252 5.227q.788-.706.788-2.248 0-1.36-.788-2.004-.788-.641-1.982-.642-1.144 0-1.919.733-.775.732-.774 1.913 0 1.31.71 2.132.713.823 1.932.822 1.245 0 2.033-.706M77.65 4.984q-.775-.797-.775-2.081 0-1.259.775-2.08Q78.425 0 80.026 0q1.524 0 2.337.835t.814 2.068q0 1.284-.788 2.08-.788.797-2.363.797-1.602 0-2.377-.796m-.571 16.337q.177-4.136.178-6.833 0-3.21-.204-7.193h6.099q-.203 3.828-.203 7.193 0 2.826.178 6.833zm18.298 0q.15-3.775.151-6.961 0-1.13-.546-1.798c-.546-.668-.825-.668-1.385-.668q-.838 0-1.423.757-.584.759-.686 2.068a122 122 0 0 0-.051 2.775q0 1.746.102 3.827h-6.074q.203-3.699.203-6.987t-.203-7.039a60 60 0 0 0 2.567.078q.94 0 2.566-.078l.738 3.776q.585-2.055 1.83-3.044t2.896-.988q1.525 0 2.644.68a4.4 4.4 0 0 1 1.69 1.837q.57 1.156.571 2.595v3.698q0 3.417.127 5.472zM115.12 7.295H120q-.127 4.215-.127 11.97 0 3.058-1.207 5.01-1.207 1.953-3.189 2.839c-1.982.886-2.796.886-4.422.886q-2.415 0-4.32-.706-1.906-.707-2.898-1.889l1.144-3.93q1.373.796 2.592 1.143 1.22.348 2.542.347 4.32 0 4.32-3.7 0-.538.025-.77 0-.154.013-.41a6 6 0 0 0-.013-.669q-1.296 3.648-5.489 3.648-1.702 0-3.037-.924c-1.335-.924-1.58-1.452-2.07-2.505q-.739-1.58-.738-3.48 0-1.953.737-3.584.736-1.632 2.059-2.582a4.97 4.97 0 0 1 2.973-.95q4.295 0 5.59 3.056zm-2.287 9.39q.635-.27 1.093-.874.456-.603.457-1.503 0-1.592-.712-2.273-.711-.681-2.109-.681-1.22 0-1.931.822-.712.823-.712 2.132 0 1.182.776 1.914.775.732 1.918.732.584 0 1.22-.27" style={{ fill: "#1e2864" }} /></svg>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- /.page-transition__loader --> */}
      </div>
    </>
  )
}