import { useCallback, useEffect, useState } from "react";

import Bannermain from "../components/Bannermain";
import BlogCard from "../components/BlogCard";
import ClickAwayListener from "react-click-away-listener";
import { Head } from "../../modules";
import ScrollContainer from "react-indiana-drag-scroll";
import blog from "../assets/blog.png";

export default function Event() {
  const [iframeSrc, setIframeSrc] = useState("");
  const [showIframe, setShowIframe] = useState(false);

  const showIframeHandler = useCallback((src) => {
    setIframeSrc(src);
    setShowIframe(true);
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      {showIframe && (
        <Iframe setShowIframe={setShowIframe} iframeSrc={iframeSrc} />
      )}
      <Head title="Event | I-HART" />
      <Bannermain
        banner={blog}
        heading="Events/News"
        subheading="I-HART is dedicated to providing innovative and unique solutions to all sectors of the healthcare industry"
      />
      <ScrollContainer className="event__filter__container">
        <div className="event__filter__btn">ALL</div>
        <div className="event__filter__btn">Category Name</div>
        <div className="event__filter__btn">Category Name</div>
        <div className="event__filter__btn">Category Name</div>
        <div className="event__filter__btn">Category Name</div>
      </ScrollContainer>
      <div className="blog__card__container">
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          onChange={showIframeHandler}
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          onChange={showIframeHandler}
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          onChange={showIframeHandler}
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          onChange={showIframeHandler}
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
      </div>
    </>
  );
}

function Iframe({ setShowIframe, iframeSrc }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,.7)",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ClickAwayListener
        onClickAway={() => {
          setShowIframe(false);
        }}
      >
        <iframe
          style={{
            width: "80%",
            height: "80%",
            border: "none",
          }}
          src={iframeSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </ClickAwayListener>
    </div>
  );
}
