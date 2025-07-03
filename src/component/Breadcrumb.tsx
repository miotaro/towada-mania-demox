'use client';
import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string; 
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list" itemScope itemType="http://schema.org/BreadcrumbList">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              className="breadcrumb__item"
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
              aria-current={isLast ? 'page' : undefined}
            >
              {item.href && !isLast ? (
                //アイコンもリンクにしたいとき
                <Link href={item.href} className={`breadcrumb__item__page ${index === 0 ? '_home' : ''}`} itemProp="item">
                  {index === 0 && (
                    <svg className="_icon" viewBox="0 0 200 229" role="img" aria-label="">
                      <use href="/img/logo_symbol.svg#logo"></use>
                    </svg>
                  )}
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="breadcrumb__item__current" itemProp="name">
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={(index + 1).toString()} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
