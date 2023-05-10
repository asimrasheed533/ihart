import React from "react";
import about from "../assets/about.png";
import profit from "../assets/profit.png";
import discovery from "../assets/discovery.png";
import md from "../assets/md.png";
import Bannermain from "../compounts/Bannermain";
import ContectSection from "../compounts/ContectSection";

export default function About() {
  return (
    <>
      <Bannermain
        banner={about}
        heading="About Us"
        subheading="Providing Innovative Healthcare Solutions for Safer, Better Care of all Patients."
      />
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
      <div className="about__contect__section">
        <div className="about__contect__section__heading">
          Value Proposition
        </div>
        <div className="about__contect__section__sub__heading">
          Our programs and services are value and outcomes driven. A wide
          variety of clients in the healthcare sector including academic health
          centers, hospitals, clinics/polyclinics, pharmaceutical companies,
          consultancy firms, medical schools/colleges, governments and
          non-governmental organizations can{" "}
          <span style={{ color: "red" }}> P R O F I T</span> from our novel and
          visionary solutions.
        </div>
      </div>
      <div className="profit__img">
        <img src={profit} alt="profit" />
      </div>
      <div className="about__contect__section">
        <div className="about__contect__section__heading">
          Our Solutions Development Methodology
        </div>
        <div className="about__contect__section__sub__heading__entry">
          <span style={{ color: "red" }}>1: </span>
          <span>Discovery</span>A detailed analysis of the current state that
          considers each system fail point from a patient, process and provider
          perspective
        </div>
        <div className="about__contect__section__sub__heading__entry">
          <span style={{ color: "red" }}>2: </span>
          <span>Solutions Development</span>Design of innovative solutions that
          address whole system issues and are able to deliver sustainable,
          measurable outcomes for care and care delivery
        </div>
        <div className="about__contect__section__sub__heading__entry">
          <span style={{ color: "red" }}>3: </span>
          <span>Implementation</span>Applying the art and science of
          implementation theory that considers the impact of change on patients,
          process and providers.
        </div>
        <div className="about__contect__section__sub__heading__entry">
          <span style={{ color: "red" }}>4: </span>
          <span>Post Implementation and Sustainability</span>Measuring and
          evaluating the true impact of the interventions scientifically with
          the aim of sharing solutions that improve health and health outcomes,
          locally, nationally and to the wider region
        </div>
      </div>
      <div className="profit__img">
        <img src={discovery} alt="profit" />
      </div>
      <div className="about__contect__section">
        <div className="about__contect__section__heading">
          The Team Experts in their fields
        </div>
        <div className="about__contect__section__sub__heading">
          High level expertise and over 75 years of combined technical
          experience represent the principals in I-HART. We have experience
          working in over 30 countries and represent leadership in high
          performing health care systems across the globe. We have experience in
          education, research, healthcare delivery, global health, program
          development and corporate leadership and governance. We have worked in
          developing, managing, evaluating and operating health, healthcare and
          educational programs. We have provided support and consultative
          services to governments, non-governmental organizations, professional
          societies and other organizations. Our affiliated network of
          consultants spans a wide array of technical expertise and global
          diversity – available to assist at any time.
          <br />
          Our programs and solutions are evidence-based, goal-oriented,
          results-driven and customized to our partners’ needs. We do not
          believe in transporting solutions from one setting to another (the
          copy-paste solutions); rather, we evaluate each system individually in
          close association with our partner and tailor our solutions to the
          unique needs and settings of our partners.
        </div>
      </div>
      <div className="about__md">
        <div className="about__md__img">
          <img src={md} alt="image" />
          <div className="about__md__heading">Fauzia Anjum Vohra</div>
          <div className="about__md__sub__heading">Managing Director</div>
        </div>
      </div>
      <ContectSection />
    </>
  );
}
