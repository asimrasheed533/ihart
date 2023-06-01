import Bannermain from "../components/Bannermain";
import blog from "../assets/blog.png";
import { Head } from "@modules";
import spk from "../assets/spk.png";
import video from "../assets/video.png";
import ppt from "../assets/ppt.png";

export default function EventDetails() {
  return (
    <>
      <Head title="Publications | I-HART" />
      <Bannermain banner={blog} heading="Events" subheading="23 March 2023" />
      <div className="eventdetail__heading__col">
        <div className="eventdetail__heading">Lorem ipsum dolor </div>
        <div className="eventdetail__heading__wraper">
          <a
            href="https://www.dickinson.edu/download/downloads/id/1076/sample_powerpoint_slides.pptx"
            className="eventdetail__heading__row"
          >
            <div className="eventdetail__heading__row__img">
              <img src={ppt} alt="ppt" />
            </div>
            <div className="eventdetail__heading__row__text">Download PPT</div>
          </a>

          <a
            href="https://file-examples.com/wp-content/storage/2018/04/file_example_AVI_480_750kB.avi"
            className="eventdetail__heading__row"
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
