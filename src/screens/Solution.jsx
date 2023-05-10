import Bannermain from "../compounts/Bannermain";
import solution from "../assets/solution.png";
import ContectSection from "../compounts/ContectSection";

export default function Solution() {
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
            Our Range of Solutions
          </div>
          <div className="solution__text__wraper__sub__heading">
            Please click on the links below to find out more
          </div>
        </div>
        <div className="solution__text__wraper__entry">
          Monitoring Patient Safety
        </div>
        <div className="solution__text__wraper__entry">
          Reducing Variance in Care Delivery
        </div>
        <div className="solution__text__wraper__entry">
          Upgrading Post Graduate Training Programs
        </div>
        <div className="solution__text__wraper__entry">
          Research Infrastructure and Governance
        </div>
        <div className="solution__text__wraper__entry">
          Clinical Trials Infrastructure
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
