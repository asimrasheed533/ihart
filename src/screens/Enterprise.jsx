import React from "react";
import Bannermain from "../compounts/Bannermain";
import solution from "../assets/solution.png";
import quilty from "../assets/quilty.png";
import ContectSection from "../compounts/ContectSection";
export default function Research() {
  return (
    <>
      <Bannermain
        banner={solution}
        heading="Solutions"
        subheading="Quality healthcare should be Effective, Expedient, Error-free and Efficient."
      />
      <div className="about__contect__section">
        <div className="about__contect__section__heading">
          Setting Up Enterprise Quality Office Structure and Governance
        </div>
        <div className="research__text__sub__heading">
          Magnitude of Avoidable Patient Harm
        </div>
        <div className="about__contect__section__sub__heading">
          The landmark Institute of Medicine report “To Err is Human” reported
          that an estimated 44,000-98,000 deaths occur each year in US hospitals
          due to avoidable medical errors. Subsequently, other researchers have
          estimated that this number may be as high as 200,000 deaths per year
          due to avoidable medical errors. There is also a huge financial cost
          to medical errors, totaling approximately 29 billion US$ per year.
          This presents an enormous challenge to the healthcare provider
          community, whose first aim is to “Do No Harm” according to the
          Hippocratic Oath. Data in most developing countries, and even in many
          emerging market countries about medical errors and avoidable harm are
          non-existent. Anecdotal reports point to a high degree of avoidable
          harm.
          <br />
          <br />
          Quality of care should be considered a critical pillar of any
          healthcare organization’s mission. Robust measures should be
          developed, implemented and monitored to ensure continuous quality
          improvement and error-free care.
          <br />
          <br />
          Providing high quality care should be the number 1 priority of all
          healthcare systems. Quality is the backbone of everything we do, or
          should strive to do, in healthcare. This requires engagement of all
          staff at all levels. High quality systems truly believe that “Quality
          is Everyone’s Job”, from the top-most executive to the junior-most
          employee of the organization. Such organizations also realize that
          quality is a journey, not a destination. This mindset requires
          everyone to be vigilant every day, every week, every month, and every
          year and continuously strive to improve.
          <br />
          <br />
          Academic health systems and healthcare systems are increasingly
          complex organizations with multiple complementary and parallel
          missions. To be successful, they need to excel in all areas. There are
          three traditional pillars of these organization: Service, Education
          and Research. However, we firmly believe that a fourth pillar,
          Quality, should be central to the mission of all healthcare
          organizations.
        </div>
      </div>
      <div className="traning__img">
        <img src={quilty} alt="traning" />
      </div>
      <div className="about__contect__section">
        <div className="about__contect__section__sub__heading">
          In such complex landscape, a central office or department needs to
          bring all elements of Quality and Patient Safety under one roof.
          Having a “Quality Department” is now an essential element of high
          quality healthcare organizations.
          <br />
          <br />
          We have experience in creating the framework, organizational
          structures, governance and monitoring of Corporate and Enterprise
          Quality Departments at local, regional and national levels across the
          globe. We can provide the expertise, training and related materials
          for successful creation of such department.
        </div>
      </div>
      <ContectSection />
    </>
  );
}
