import React from "react";
import Fade from "react-reveal/Fade";
export default function BlogCard({ blog, heading, subheading, text }) {
  return (
    <>
      <Fade bottom>
        <div className="blog__card__wraper">
          <div className="blog__card__wraper__img">
            <img src={blog} alt="blogs" />
          </div>
          <div className="blog__card__text">
            <div className="blog__card__wraper__heading">{heading}</div>
            <div className="blog__card__wraper__sub__heading">{subheading}</div>
            <div className="blog__card__wraper__text">{text}</div>
          </div>
        </div>
      </Fade>
    </>
  );
}
