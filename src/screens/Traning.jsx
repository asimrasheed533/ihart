import React from "react";
import Bannermain from "../compounts/Bannermain";
import solution from "../assets/solution.png";
import traning from "../assets/traning.png";
import tstep from "../assets/tstep.png";
import ContectSection from "../compounts/ContectSection";

export default function Traning() {
  return (
    <>
      <Bannermain
        banner={solution}
        heading="Solutions"
        subheading="Quality healthcare should be Effective, Expedient, Error-free and Efficient."
      />
      <div className="about__contect__section">
        <div className="about__contect__section__heading">
          Training in Quality Improvement and Patient Safety in Healthcare
        </div>
        <div className="about__contect__section__sub__heading">
          Quality healthcare should be Effective, Expedient, Error-free and
          Efficient. And it must revolve around patients and their families. In
          other words, the hallmark of quality healthcare is that it is safe
          care provided at the right place, at the right time, at the right cost
          and with right interventions. Unfortunately, most healthcare
          facilities in the developing countries and emerging market countries
          do not have the requisite infrastructure, policies and procedures, or
          safety systems to identify, rectify or prevent patient harm. Many
          countries have developed a framework of indicators to measure quality
          and patient safety. These revolve more around process measures and not
          outcomes, and the level of adherence to these indicators is unknown.
          Furthermore, there is very little formal training of healthcare
          workers in patient safety and quality improvement. Providing education
          and training to frontline healthcare workers as well as administrators
          and leaders is the key to improving patient safety and reducing harm.
          Such training should also serve as a platform for gathering reliable
          baseline data and documenting ongoing improvement.
        </div>
      </div>
      <div className="traning__img">
        <img src={traning} alt="traning" />
      </div>
      <div className="traning__content__section">
        <div className="about__contect__section__sub__heading">
          We provide a step-wise approach in education, training and monitoring
          of healthcare workers and healthcare systems. This approach involves
          capacity and capability building through education and training of all
          staff in Quality Improvement and Patient Safety (QIPS). With this
          knowledge and training, staff should be able to effect a culture
          change and then be able to sustain it through continuous learning and
          application of QIPS principles.
        </div>
        <div className="about__contect__section__sub__heading">
          The first step in this proposal is to provide fundamental training in
          Quality Improvement and Patient Safety. This training is tailored to
          the needs, skills and training of the current staff at the healthcare
          facilities. The most basic training consists of a 2-day course which
          includes lectures, workshops and interactive sessions. Training is
          provided on-site and in-person by a team of 2-4 faculty members who
          are carefully chosen and are global leaders in Quality Improvement and
          Patient Safety. The training course comprises of didactic lectures,
          workshops and team-building exercise
        </div>
      </div>
      <div className="traning__img">
        <img src={tstep} alt="traning" />
      </div>
      <div className="executives__container">
        <div className="executives__container__heading">
          The training course will include general and specialized topics,
          including:
        </div>
        <div className="executive__text__wraper__entry">
          An Introduction to Patient Safety
        </div>
        <div className="executive__text__wraper__entry">
          The six “International Patient Safety Goals"
        </div>
        <div className="executive__text__wraper__entry">
          Building Safety Culture
        </div>
        <div className="executive__text__wraper__entry">
          Medication Safety – avoiding errors through best practices
        </div>
        <div className="executive__text__wraper__entry">
          Specific Tools to Enhance Patient Safety in Your Organization
        </div>
        <div className="executive__text__wraper__entry">
          Care Bundles Toolkits – preventing hospital acquired infections (SSI,
          CLABSI, CAUTI, HAP)
        </div>
        <div className="executive__text__wraper__entry">
          Infection Control for Patient Safety and Better Outcomes
        </div>
        <div className="executive__text__wraper__entry">
          Building a Quality Department for Delivering Safe Care
        </div>
        <div className="executive__text__wraper__entry">
          TeamSTEPPS (Team Strategies and Tools to Enhance Performance and
          Patient Safety) Training
        </div>
        <div className="executive__text__wraper__entry">Team Structure</div>
        <div className="executive__text__wraper__entry">
          Communication Strategies Important for Patient Care (including patient
          safety)
        </div>
        <div className="executive__text__wraper__entry">Leading Teams</div>
        <div className="executive__text__wraper__entry">
          Mutual Support and Situation Monitoring
        </div>
        <div className="executive__text__wraper__entry">
          Simulation Exercises
        </div>
        <br />
        More detailed and advanced courses of varying duration are available
        based on a joint needs-assessment and existing capacity and capability.
      </div>
      <ContectSection />
    </>
  );
}
