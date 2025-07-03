export default function FirstPage() {
  return (
    <>
      <h2 id="ipl-01">店内はまるで秘密基地</h2>

      <p>
        店内は、木の温もりを感じられる落ち着いた雰囲気。カウンター席では、一人でじっくりと飲み物を味わうのもおすすめです。ソファ席は、友人との語らいや、大切な人と過ごす時間にぴったり。まるで秘密基地のような隠れ家的な空間で、ゆったりとした時間を過ごせます。
      </p>

      <ol className="flnum-list">

        <li className="flnum-list__item">チーズケーキやチョコレートケーキなど、定番のケーキは外せません。</li>

        <li className="flnum-list__item">タルトやパフェなど、季節のフルーツを使ったスイーツもおすすめです。</li>

        <li className="flnum-list__item">近年では固めのプリンも<span>人気</span>です。</li>

      </ol>

      <div className="grip-image character-grip" id="ipl-02">
        <div className="_character">
          <span><img src="/img/character03.png" width="100%" height="auto" alt="" /></span>
        </div>
        <figure className="grip-image__img _hand-grip">
          <img src="/img/koremite_modal_sample01.jpg" width="100%" height="auto" alt="" />
          <figcaption className="grip-image__caption text-box-center">キャプション</figcaption>
        </figure>
      </div>
    </>
  )
}