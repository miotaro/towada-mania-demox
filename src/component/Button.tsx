import React from "react";

type ButtonProps = {
  groupClass: string | string[];
  linkClass: string;
  title: string;
  href: string;
  children?: React.ReactNode
}

export default function Button({
  groupClass,
  linkClass,
  title,
  href,
  children,
}: ButtonProps) {
  const groupClassName = Array.isArray(groupClass)
    ? groupClass.join(" ")
    : groupClass;

  return (
    <div className={groupClassName}>
      {children && <>{children}</>}
      <a className={`btn btn-md ${linkClass}`} href={href}>{title}<span className="btn-arrow"></span></a>
    </div>
  )
}