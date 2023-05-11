import React from "react";
import solution from "../assets/solution.png";
import Bannermain from "../compounts/Bannermain";
import ContectSection from "../compounts/ContectSection";
export default function Executive() {
  return (
    <>
      <Bannermain
        banner={solution}
        heading="Solutions"
        subheading="Quality healthcare should be Effective, Expedient, Error-free and Efficient."
      />
      <div className="solution__container">
        <div className="solution__text__wraper">
          <div className="solution__text__wraper__heading">
            Health Executives Academy for Leadership Support (HEALS) – a joint
            partnership with AAH LLC
          </div>
        </div>
        <div className="solution__contect__section__sub__heading">
          HEALS provides an innovative and strategic training course for senior
          health care professionals and managers to enable them to lead
          hospitals, health care systems and medical organizations in the 21st
          century. The curriculum focuses on the needs of senior-most healthcare
          leaders emerging and developing markets to help achieve transformation
          of hospitals and healthcare organizations to the level of best systems
          in North America. The curriculum is tailored for the participants and
          integrated modifications are made to the core curriculum according to
          the special experiences of American healthcare systems, hospitals and
          medical groups and non-profitable organizations, for the purpose of
          training modern hospital presidents, chief executive officers and
          other C-suite executives as well as clinical department chairs and
          directors.
          <br />
          Each course is customized and tailored to the needs of attendees and
          their organizations, with special consideration to their local,
          regional and national needs and capabilities. Executives and
          organizations have the option of choosing a course in North America or
          their home country. Each course is 2-4 weeks in duration, based on
          mutually identified needs and goals.
        </div>
        <div className="solution__text__wraper__entry">
          Setting Up Enterprise Quality Office Structure and Governance
        </div>
        <div className="solution__text__wraper__entry">CME/CPD Conferences</div>
        <div className="solution__text__wraper__entry">
          Health Executives Academy for Leadership Support (HEALS) – a joint
          partnership with AAH LLC
        </div>
      </div>
      <ContectSection />
    </>
  );
}
