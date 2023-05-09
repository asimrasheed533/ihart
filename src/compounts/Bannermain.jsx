import React from "react";

export default function Bannermain({ banner }) {
  return (
    <>
      <div className="banner__section">
        <div className="banner__wraper">
          <div className="banner__img">
            <img src={banner} alt="banner" />
          </div>
          <div className="banner__img__text__wraper">
            <div className="banner__img__text__wraper__heading">
              Reimagining Healthcare
            </div>
            <div className="banner__img__text__wraper__sub__heading">
              I-HART is dedicated to providing innovative and unique solutions
              to all sectors of the healthcare industry
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
