export default function PhilosThought() {
  return (
    <section className="philos-thought">
      <h2 className="philos-thought__title"><span className="_text">デザインにかけた想い</span></h2>

      <div className="philos-thought__designer">
        <figure className="_logo">
          <img src="/img/logo_kotosuki.svg" width="100%" height="100%" alt="コトスキデザイン" />
        </figure>
        <div className="_title">
          <p>コト∞スキデザイン<br />グラフィックデザイナー</p>
          <p className="_name">pirkanta(<span>ピリカンタ</span>)</p>
        </div>
      </div>

      <div className="phtp-block">
        <h3 className="phtp-block__title">LOGO</h3>
        <p>
          シンボルの印象的な目は、「トワダマニア」にふれた人の好奇心を刺激し、十和田の奥深い魅力へと誘う象徴になっています。漫画のようなタッチのデザインは、親しみやすさと遊び心を表現し、どこか懐かしさや温もりを感じるものとなっています。
        </p>
        <figure className="phtp-block__img --type01">
          <svg viewBox="0 0 200 229" role="img" aria-label="トワダマニア">
            <use href="/img/logo_symbol.svg#logo"></use>
          </svg>
        </figure>
        <p>
          右肩上がりのロゴタイプは、十和田の未来に対する積極的な展望を示すものです。現状維持に留まることなく、今後も新たな魅力を創出し、発展していくであろうという期待感を、この傾斜したデザインに込めています。この意匠は、十和田の将来性に対する確信と、そこから生まれるであろう予期せぬ面白さへの期待感を表現したものです。
        </p>
        <figure className="phtp-block__img --type02">
          <svg viewBox="0 0 200 126" role="img" aria-label="トワダマニア">
            <use href="/img/logo_type01_path.svg#logo"></use>
          </svg>
        </figure>
      </div>

      <div className="phtp-block">
        <h3 className="phtp-block__title">DESIGN PHILOSOPHY</h3>
        <p>
          ウェブサイト全体に用いられた紺色から黄色へのグラデーションは、十和田地域が現在抱える課題から、将来に向けて明るく、希望に満ちた発展と成長を遂げていく様子を象徴的に表現しています。この色彩の変化は、現状からの脱却と、未来へのポジティブな変遷を視覚的に示唆するものです。
        </p>
        <figure className="phtp-block__img">
          <img src="/img/design_philos_img.webp" width="100%" height="100%" alt="" />
        </figure>
      </div>

      <div className="phtp-block">
        <h3 className="phtp-block__title">CHARACTER</h3>
        <p>
          本ウェブサイトに登場する「マニア」とは、十和田の魅力に深く傾倒し、特異なこだわりや広範な知識を有する人々として描かれています。一般の視点からは、その熱意や知識量が際立ち、異質な存在として認識される可能性も考慮し、本ウェブサイトにおいては、彼らをある種、比喩的な表現を用いて提示しています。これは、彼らの持つ深い愛情と専門性を強調するための演出意図によるものです。
        </p>
        <figure className="phtp-block__img --chara">
          <img src="/img/character_4n_d.webp" width="100%" height="100%" alt="" />
        </figure>
      </div>
    </section>
  )
}