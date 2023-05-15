import Bannermain from "../compounts/Bannermain";
import { Outlet } from "react-router-dom";
import solution from "../assets/solution.png";

export default function Solution() {
  return (
    <>
      <Bannermain
        banner={solution}
        heading="Solutions"
        subheading="Quality healthcare should be Effective, Expedient, Error-free and Efficient."
      />
      <Outlet />
    </>
  );
}
