import Bannermain from "../components/Bannermain";
import BlogCard from "../components/BlogCard";
import blog from "../assets/blog.png";

import { Head } from "../../modules";
import { PublicationsCard } from "../components/PublicationsCard";

export default function Publications() {
  return (
    <>
      <Head title="Publications | I-HART" />
      <Bannermain
        banner={blog}
        heading="Latest Publications"
        subheading="I-HART is dedicated to providing innovative and unique solutions to all sectors of the healthcare industry."
      />
      <div className="search__container">
        <div className="publication__search__bar">
          <input
            type="search"
            className="publication__search__bar__entry"
            placeholder="Search..."
          />
        </div>
        <div className="select__wraper">
          <select name="select">
            <option>Sort by </option>
            <option>readiness </option>
            <option>response </option>
          </select>
        </div>
      </div>

      <PublicationsCard />
      <PublicationsCard />
      <PublicationsCard />
      <PublicationsCard />
      <PublicationsCard />
      <PublicationsCard />
      <PublicationsCard />
      <PublicationsCard />
    </>
  );
}
