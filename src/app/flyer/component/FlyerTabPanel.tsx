import TowadamaniaShopTitle from "@/component/TowadamaniaShopTitle";
import { flyerItems } from "@/data/flyerItems"

export default function FlyerTabPanel() {
  const flyers = flyerItems.slice(0, 3);

  return (
    <div>
      <TowadamaniaShopTitle />
      <div className="flyer-info">
        <h3 className="flyer-info__title">{flyers[0]?.title}</h3>
        <p className="flyer-info__date">
          <time>{flyers[0]?.dateRange}</time>まで
        </p>
      </div>

      <div className="flyer-view js-ps-gallerie">
        {flyers.map((flyer, index) => (
          <figure className="flyer-view__item" key={index}>
            <a
              className="js-ps-gallerie__item"
              href={flyer.imageSrc}
              data-pswp-width=""
              data-pswp-height=""
              target="_blank"
            >
              <img
                src={flyer.imageSrc}
                width="100%"
                height="auto"
                alt=""
                style={{ pointerEvents: 'none' }}
              />
            </a>
          </figure>
        ))}
      </div>
    </div>
  )
}