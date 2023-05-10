export default function RangeCard({ heading, subheadingone, subheadingtwo }) {
  return (
    <div className="our__range__container__wraper">
      <div className="our__range__container__wraper__card">
        <div className="our__range__card__heading">{heading}</div>
        <div className="our__range__card__row">{subheadingone}</div>
        <div className="our__range__card__row">{subheadingtwo}</div>
      </div>
    </div>
  );
}
