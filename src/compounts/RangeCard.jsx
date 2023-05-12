export default function RangeCard({
  heading,
  subheadingone,
  subheadingtwo,
  styles,
}) {
  return (
    <div className="our__range__container__wraper">
      <div className="our__range__container__wraper__card">
        <div className="our__range__card__heading" style={{ color: styles }}>
          {heading}
        </div>
        <div
          className="our__range__card__row"
          style={{ backgroundColor: styles }}
        >
          {subheadingone}
        </div>
        <div
          className="our__range__card__row"
          style={{ backgroundColor: styles }}
        >
          {subheadingtwo}
        </div>
      </div>
    </div>
  );
}
