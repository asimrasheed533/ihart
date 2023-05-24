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
    </>
  );
}
