import Bannermain from "../components/Bannermain";
import { Outlet } from "react-router-dom";
import solution from "../assets/solution.jpg";
import { Head } from "../../modules";

export default function Solution() {
  return (
    <>
      <Head title="Solution | I-HART" />
      <Bannermain
        banner={solution}
        heading="Solutions"
        subheading="Quality healthcare should be Effective, Expedient, Error-free and Efficient."
      />
      <Outlet />
    </>
  );
}
