import Bannermain from "../compounts/Bannermain";
import BlogCard from "../compounts/BlogCard";
import blog from "../assets/blog.png";
import { Head } from "../../modules";

export default function Event() {
  return (
    <>
      <Head title="Publications | I-HART" />
      <Bannermain
        banner={blog}
        heading="Events/News"
        subheading="I-HART is dedicated to providing innovative and unique solutions to all sectors of the healthcare industry"
      />
      <div className="event__filter__container">
        <div className="event__filter__btn">ALL</div>
        <div className="event__filter__btn">Category Name</div>
        <div className="event__filter__btn">Category Name</div>
        <div className="event__filter__btn">Category Name</div>
        <div className="event__filter__btn">Category Name</div>
      </div>
      <div className="blog__card__container">
        <BlogCard
          link="/EventDetails"
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          link="/event-details"
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          link="/event-details"
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          link="/event-details"
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
      </div>
    </>
  );
}
