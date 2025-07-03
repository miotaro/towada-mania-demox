import { flyerItems } from "@/data/flyerItems";
import FlyerCard from "./FlyerCard";
import { LargeNumberLike } from "crypto";

type Props = {
  limit?: number;
}

export default function FlyerList({limit}: Props) {
  const itemsToShow = limit ? flyerItems.slice(0, limit) : flyerItems;

  return (
    <div className="flyer-list">
      {itemsToShow.map((item, index) => (
        <FlyerCard
          key={index}
          size={item.size as "lg" | "sm"}
          imageSrc={item.imageSrc}
          isNew={item.isNew}
          title={item.title}
          dateRange={item.dateRange}
          link={item.link}
        />
      ))}
    </div>
  )
}