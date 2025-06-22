import React from "react";

export default function MobileWindow({children,}:{children: React.ReactNode}) {
  return (
    <>
      <div className="mobile-window">
        {children}
      </div>
      <div className="dpc-mask"></div>
      <div className="phone-frame"></div>
      <div className="phone-btns btns-left"><span className="_btn"></span><span className="_btn"></span></div>
      <div className="phone-btns btns-right"><span className="_btn"></span></div>
    </>
  )
}