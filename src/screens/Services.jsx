import Bannermain from "../compounts/Bannermain";
import RangeCard from "../compounts/RangeCard";
import service from "../assets/service.png";
import servicesb from "../assets/servicesb.png";
import { Head } from "../../modules";

export default function Services() {
  return (
    <>
      <Head title="Services | I-HART" />
      <Bannermain
        banner={service}
        heading="Our Services"
        subheading="Providing Innovative Healthcare Solutions for Safer, Better Care of all Patients."
      />
      <section className="scop__wraper__main" id="scope">
        <div className="scop__container__heading">Scope</div>
        <div className="scop__container__sub__heading">
          I-HART offers customized services across the entire health care
          spectrum – each offering caters to the specific needs of our clients –
          including
        </div>
        <div className="scop__wraper__main__entry">
          <span>Quality improvement and patient safety: </span> providing
          comprehensive solutions for continuous quality improvement and
          improving patient safety
        </div>
        <div className="scop__wraper__main__entry">
          <span>Education and Training support:</span> comprehensive support for
          educational meetings, conferences, symposia, workshops, including
          needs assessment, program development, speaker engagement, CME/CPD
          applications, post-program evaluations and reports and logistics
          safety
        </div>
        <div className="scop__wraper__main__entry">
          <span>Strategic guidance to enhance clinical services:</span>
          improving the technical quality and performance of patient services,
          work flows, access to care, as well as graduate and post-graduate
          clinical training programs
        </div>
        <div className="scop__wraper__main__entry">
          <span>Human Capital Assessment and Support: </span> providing
          assessment on healthcare related manpower needs, projections,
          recruitment, evaluations and appraisals, as well as leadership
          training focusing on the healthcare sector executives
        </div>
        <div className="scop__wraper__main__entry">
          <span>Market and policy analysis:</span> review of current trends,
          supply and demand factors, and understanding trends in national and
          local markets affecting health care
        </div>
        <div className="scop__wraper__main__entry">
          <span>Regulatory and Accreditation support:</span> providing technical
          evaluations, training and tracers in support of national and
          international accreditations, e.g. Joint Commission International,
          Accreditation Council for Graduate Medical Education International,
          and other similar organizations
        </div>
        <div className="scop__wraper__main__entry" style={{ fontSize: "18px" }}>
          We provide full-service, turnkey solutions, from design to
          implementation to monitoring and post-implementation evaluation.
        </div>
      </section>
      <section className="our__range__container__heading" id="range">
        Our range of services include:
      </section>
      <div className="our__range__container">
        <RangeCard
          heading="Quality & Patient Safety Solutions"
          subheadingone="Quality Improvement Training"
          subheadingtwo="Patient Safety Programs to Eliminate Patient Harm"
        />
        <RangeCard
          heading="Education & Training Support"
          subheadingone="Clinical & Post Graduate Program Development"
          subheadingtwo="CME/CPD Programs"
          styles="#035294"
        />
        <RangeCard
          heading="Healthcare Operations & Management"
          subheadingone="Facility set-up and Quality Department Structure & Governance"
          subheadingtwo="Clinical & Administrator Executive Training"
        />
        <RangeCard
          heading="Research Structure & Governance"
          subheadingone="Clinical & Translational Research Setup"
          subheadingtwo="Ethics and Regulation of Research"
          styles="#035294"
        />
      </div>
      <div className="services__img__container">
        <img src={servicesb} alt="services" />
      </div>
    </>
  );
}
