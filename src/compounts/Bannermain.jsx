export default function Bannermain({ banner, heading, subheading }) {
  return (
    <>
      <div className="banner__section">
        <div className="banner__wraper">
          <img src={banner} alt="banner" className="banner__img" />
          <div className="banner__img__text__wraper">
            <div className="banner__img__text__wraper__heading">{heading}</div>
            <div className="banner__img__text__wraper__sub__heading">
              {subheading}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
