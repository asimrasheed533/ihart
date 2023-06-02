import React from "react";
import Fade from "react-reveal/Fade";
import video from "../assets/video.png";
import ppt from "../assets/ppt.png";
import { Link } from "react-router-dom";

export default function BlogCard({ blog, heading, subheading, text }) {
  return (
    <>
      <Fade bottom>
        <div className="blog__card__wraper">
          <Link
            to="/EventDetails"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="blog__card__wraper__img"
          >
            <img src={blog} alt="blogs" />
          </Link>
          <div className="blog__card__text">
            <div className="blog__card__wraper__heading">{heading}</div>
            <div className="blog__card__wraper__sub__heading">{subheading}</div>
            <div className="blog__card__wraper__text">{text}</div>
          </div>
          <div className="blog__svg__container">
            <a
              href="https://www.dickinson.edu/download/downloads/id/1076/sample_powerpoint_slides.pptx"
              className="eventdetail__heading__row"
              target="_blank"
            >
              <div className="eventdetail__heading__row__img">
                <img src={ppt} alt="ppt" />
              </div>
            </a>
            <a
              href="https://youtu.be/XMcab1MFaLc"
              className="eventdetail__heading__row"
              target="_blank"
            >
              <button className="blog__svg__container__svg">
                <img src={video} alt="ppt" />
              </button>
            </a>
          </div>
        </div>
      </Fade>
    </>
  );
}
