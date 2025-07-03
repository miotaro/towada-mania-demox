import EntryImageSlide from "@/component/EntryImageSlides"

export default function SecondPage() {
  return (
    <>
      <h2 id="ipl-03">厳選されたこだわりのフード＆ドリンク厳選されたこだわりのフード</h2>

      <p>
        フードメニューはカフェメニューからバーフードまで幅広く取り揃えられています。ランチタイムには自家製パンを使ったサンドイッチやヘルシーなサラダが人気。ディナータイムには、お酒に合うアラカルトメニューが充実しています。
      </p>

      <ul className="wdesc-list">
        <li className="wdesc-list__item">チーズケーキやチョコレートケーキなど、定番のケーキは外せません。</li>
        <li className="wdesc-list__item">タルトやパフェなど、季節のフルーツを使ったスイーツもおすすめです。</li>
        <li className="wdesc-list__item">近年では固めのプリンも<span>人気</span>です。</li>
      </ul>

      <EntryImageSlide />

      <h3>フード</h3>
      <p>
        特に自慢なのは、[お店の看板メニュー]です。[メニューの特徴]が特徴で、一度食べたら忘れられない絶品です。
      </p>

      <h3>ドリンク</h3>
      <p>
        ドリンクメニューも豊富でこだわりのコーヒーや紅茶はもちろん、クラフトビールやオリジナルカクテルも楽しめます。
      </p>
    </>
  )
}