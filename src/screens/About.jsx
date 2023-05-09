import React from "react";
import about from "../assets/about.png";
import Bannermain from "../compounts/Bannermain";

export default function About() {
  return (
    <>
      <Bannermain banner={about} />
      <div className="about__contect__section">
        <div className="about__contect__section__heading">Our Focus</div>
        <div className="about__contect__section__sub__heading">
          I-HART responds to the growing health care challenges around the world
          with a special focus on emerging markets, transitional economies and
          rapidly developing states. We offer customized services to respond to
          strategic challenges, technical problems, data needs, and evidence
          generation for quality improvement or health care reform.
        </div>
      </div>
    </>
  );
}
