import { Link } from "react-router-dom";

export default function Traningcard({ svg, heading, subheading, btn }) {
  return (
    <>
      <div className="traning__card__text__wraper">
        <div className="training__card__container__row">
          <div className="training__card__svg">{svg}</div>
          <div className="training__card__heading">{heading}</div>
        </div>
        <div className="traning__card__contect">{subheading}</div>
        <Link className="traning__card__btn">
          <div className="traning__card__btn__link">Explore more</div>
        </Link>
      </div>
    </>
  );
}
