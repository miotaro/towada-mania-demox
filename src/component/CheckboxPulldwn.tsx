import PulldownBox from "@/component/pulldownBox";

type Props = {
  name: string;
  label: string;
  options: string[];
};

export default function CheckboxPulldown({name, label, options}: Props) {
  return (
    <>
      <PulldownBox
        pulldownName={name}
        className="check-serchbox__item"
        trigger={
          <button type="button" className="check-serchbox__toggle js-pulldown__btn">
            <span className="_text">{label}</span><span className="pd-cross-icon"></span>
          </button>
        }
      >
        <ul className="check-serchbox__list">
        {options.map((option, i) => (
          <li key={i} className="check-serchbox__list-item">
            <label className="label-checkbox">
              <input type="checkbox" name={name} value={option} />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
      </PulldownBox>
    </>
  )
}