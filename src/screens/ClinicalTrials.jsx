import React from "react";
import Bannermain from "../compounts/Bannermain";
import solution from "../assets/solution.png";
import tredflow from "../assets/tredflow.png";
import clinflow from "../assets/clinflow.png";

import ContectSection from "../compounts/ContectSection";
export default function ClinicalTrials() {
  return (
    <>
      <Bannermain
        banner={solution}
        heading="Solutions"
        subheading="Quality healthcare should be Effective, Expedient, Error-free and Efficient."
      />
      <div className="about__contect__section">
        <div className="about__contect__section__heading">
          Clinical Trials Infrastructure
        </div>
        <div className="about__contect__section__sub__heading">
          Clinical trials are the universally accepted “gold-standard” for
          generating evidence of efficacy for new treatments and interventions.
          Regulatory agencies, e.g. Food and Drug Administration (FDA) in the
          United States, European Medicines Agency in Europe, require well
          designed clinical trials for approval of new drugs and devices. Other
          countries may require additional clinical trials to demonstrate
          efficacy and safety in native populations, even if the drugs or
          devices are approved in the United States or European Union. Hence,
          having a robust clinical trials infrastructure, capacity and
          capability are essential in all countries.
          <br />
          <br />
        </div>
      </div>
      <div className="traning__img__flow">
        <img src={tredflow} alt="traning" />
      </div>
      <div className="traning__img">
        <img src={clinflow} alt="traning" />
      </div>
      <div className="about__contect__section">
        <div className="about__contect__section__sub__heading">
          Our principals and consultants have vast experience in designing and
          leading multi-center, randomized, controlled clinical trials in
          various settings. We also have extensive experience in putting
          together the framework and infrastructure for clinical trials and
          clinical research in general. Our expertise spans all phases of
          clinical trials, and to putting together the governance, structure,
          regulatory framework, ethical standards, data safety boards,
          institutional review boards and post-marketing surveillance. Our
          experienced team can provide end-to-end solutions or customized
          solutions for any of the elements required for efficient, ethical and
          safe conduct of research studies.
        </div>
      </div>
      <ContectSection />
    </>
  );
}
