import { useCallback, useEffect, useState } from "react";
import Bannermain from "../components/Bannermain";
import blog from "../assets/blog.png";
import { Head } from "@modules";
import spk from "../assets/spk.png";
import video from "../assets/video.png";
import ppt from "../assets/ppt.png";
import ClickAwayListener from "react-click-away-listener";

export default function EventDetails() {
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
      <Head title="Publications | I-HART" />
      <Bannermain banner={blog} heading="Events" subheading="23 March 2023" />
      <div className="eventdetail__heading__col">
        <div className="eventdetail__heading">Lorem ipsum dolor </div>
        <div className="eventdetail__heading__wraper">
          <a
            href="https://www.dickinson.edu/download/downloads/id/1076/sample_powerpoint_slides.pptx"
            className="eventdetail__heading__row"
            target="_blank"
          >
            <div className="eventdetail__heading__row__img">
              <img src={ppt} alt="ppt" />
            </div>
            <div className="eventdetail__heading__row__text">Download PPT</div>
          </a>

          <a
            className="eventdetail__heading__row"
            onClick={() =>
              showIframeHandler("https://www.youtube.com/embed/7sDY4m8KNLc")
            }
          >
            <div className="eventdetail__heading__row__img">
              <img src={video} alt="ppt" />
            </div>
            <div className="eventdetail__heading__row__text">
              Download Video
            </div>
          </a>
        </div>
      </div>
      <div className="text__wraper__conainer">
        <div className="event__detail__text">
          Lorem ipsum dolor sit amet. Ut laudantium adipisci et animi dolorum et
          neque error aut maxime nesciunt. Vel recusandae ducimus At dolorem
          iste id magni quam id corrupti officiis At minus minus et quidem
          rerum! 33 nihil quas aut consequatur asperiores est sunt illo et sunt
          commodi.
          <br />
          <br />
          Lorem ipsum dolor sit amet. Ut laudantium adipisci et animi dolorum et
          neque error aut maxime nesciunt. Vel recusandae ducimus At dolorem
          iste id magni quam id corrupti officiis At minus minus et quidem
          rerum! 33 nihil quas aut consequatur asperiores est sunt illo et sunt
          commodi.
        </div>
        <div className="eventdetail__img">
          <img src={blog} alt="blog" />
        </div>
        <div className="event__detail__text">
          Lorem ipsum dolor sit amet. Ut laudantium adipisci et animi dolorum et
          neque error aut maxime nesciunt. Vel recusandae ducimus At dolorem
          iste id magni quam id corrupti officiis At minus minus et quidem
          rerum! 33 nihil quas aut consequatur asperiores est sunt illo et sunt
          commodi.
          <br />
          <br />
          Lorem ipsum dolor sit amet. Ut laudantium adipisci et animi dolorum et
          neque error aut maxime nesciunt. Vel recusandae ducimus At dolorem
          iste id magni quam id corrupti officiis At minus minus et quidem
          rerum! 33 nihil quas aut consequatur asperiores est sunt illo et sunt
          commodi.
        </div>
        <div className="eventdetail__img__row">
          <div className="eventdetail__img__col">
            <img src={blog} alt="blog" />
          </div>
          <div className="eventdetail__img__col">
            <img src={blog} alt="blog" />
          </div>
        </div>
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
