import React from "react";
import Fade from "react-reveal/Fade";
import video from "../assets/video.png";
import ppt from "../assets/ppt.png";
import { Link } from "react-router-dom";

export default function BlogCard({ blog, heading, subheading, text }) {
  return (
    <>
      <Fade bottom>
        <Link to="/EventDetails" className="blog__card__wraper">
          <div className="blog__card__wraper__img">
            <img src={blog} alt="blogs" />
          </div>
          <div className="blog__card__text">
            <div className="blog__card__wraper__heading">{heading}</div>
            <div className="blog__card__wraper__sub__heading">{subheading}</div>
            <div className="blog__card__wraper__text">{text}</div>
          </div>
          <div className="blog__svg__container">
            <a
              href="https://file-examples.com/wp-content/storage/2018/04/file_example_AVI_480_750kB.avi"
              className="eventdetail__heading__row"
            >
              <div className="blog__svg__container__svg">
                <img src={ppt} alt="ppt" />
              </div>
            </a>
            <a
              href="https://www.dickinson.edu/download/downloads/id/1076/sample_powerpoint_slides.pptx"
              className="eventdetail__heading__row"
            >
              <div className="blog__svg__container__svg">
                <img src={video} alt="ppt" />
              </div>
            </a>
          </div>
        </Link>
      </Fade>
    </>
  );
}
