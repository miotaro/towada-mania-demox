'use client';
import { usePulldownStore } from "@/store/pullDownStore";

type PulldownBoxProps = {
  pulldownName: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function PulldownBox({ pulldownName, trigger, children, className = '' }: PulldownBoxProps) {
  const openPulldown = usePulldownStore(state => state.openPulldown);
  const open = usePulldownStore(state => state.open);
  const close = usePulldownStore(state => state.close);

  const isOpen = openPulldown === pulldownName;

  const handleClick = () => {
    if (isOpen) {
      close();
    } else {
      open(pulldownName);
    }
  }

  return (
    <div className={`js-pulldown ${className} ${isOpen ? 'is-open' : ''}`}>
      <div onClick={handleClick} className="js-pulldown__btn">
        {trigger}
      </div>
      <div className="js-pulldown__box">
        <div className="js-pulldown__box__inner">
          {children}
        </div>
      </div>
    </div>
  );
}
