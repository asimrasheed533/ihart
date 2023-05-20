import Bannermain from "../compounts/Bannermain";
import BlogCard from "../compounts/BlogCard";
import blog from "../assets/blog.png";
import { Head } from "../../modules";

export default function Publications() {
  return (
    <>
      <Head title="Publications | I-HART" />
      <Bannermain
        banner={blog}
        heading="Latest Publications"
        subheading="I-HART is dedicated to providing innovative and unique solutions to all sectors of the healthcare industry."
      />
      <div className="blog__card__container">
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="lorem lorem loreem"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
        <BlogCard
          blog={blog}
          heading="Lorem lorem"
          subheading="April 24, 2022 - 5 min read"
          text="-HART is dedicated to providing innovative and unique solutions"
        />
      </div>
    </>
  );
}
