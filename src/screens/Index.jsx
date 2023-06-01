import "animate.css";
import Fade from "react-reveal/Fade";
import Bannermain from "../components/Bannermain";
import { ClinicalTrials } from "../assets/ClinicalTrials";
import { Conference } from "../assets/Conference";
import { Delivery } from "../assets/Delivery";
import { Executives } from "../assets/Executives";
import { Governance } from "../assets/Governance";
import { MonitoringSvg } from "../assets/MonitoringSvg";
import { Research } from "../assets/Research";
import { TrainingSvg } from "../assets/TrainingSvg";
import TraningCard from "../components/Traningcard";
import { Upgrading } from "../assets/Upgrading";
import banner from "../assets/banner.png";

export default function Index() {
  const trainingData = [
    {
      link: "/traning",
      svg: <TrainingSvg />,
      heading: "Training in quality & Patient Safety",
      subheading:
        "Quality healthcare should be Effective, Expedient, Error-free and Efficient. And it must revolve around patients and their families. In other words, the hallmark of quality healthcare is that it is safe care provided at the right place, at the right time, at the right cost and with right interventions.",
    },
    {
      link: "/monitoring",
      svg: <MonitoringSvg />,
      heading: "Monitoring Patient Safety",
      subheading:
        "There are numerous ways to measure quality and safety in healthcare organizations. Many governmental agencies and professional organizations have developed measures to determine the quality of care that a hospital provides, and to identify areas that need improvement.",
    },
    {
      link: "/reducing",
      svg: <Delivery />,
      heading: "Reducing Variance in Care Delivery",
      subheading:
        "Health systems around the world have varying approaches to managing similar healthcare conditions. However, evidence shows that when care models differ, clinical outcomes are not optimal and patient safety can be compromised.",
    },
    {
      link: "/clinical",
      svg: <Upgrading />,
      heading: "Upgrading Post Graduate Training Programs",
      subheading:
        "Post graduate training programs, including residency and fellowship training, are at the core of producing a competent medical workforce for the organization, community and country.",
    },
    {
      link: "/research",
      svg: <Research />,
      heading: "Research Infrastructure and Governance",
      subheading:
        "Innovation is at the heart of progress in any field. In Medicine, research drives our understanding of the cause and effect of disease, helps develop and test interventions and measures outcomes.",
    },
    {
      link: "/clinicaltrials",
      svg: <ClinicalTrials />,
      heading: "Clinical Trials Infrastructure",
      subheading:
        "Clinical trials are the universally accepted “gold-standard” for generating evidence of efficacy for new treatments and interventions. Regulatory agencies require well designed clinical trials for approval of new drugs and devices.",
    },
    {
      link: "/enterprise",
      svg: <Governance />,
      heading: "Setting Up Enterprise Quality Office Structure and Governance",
      subheading:
        "The landmark Institute of Medicine report “To Err is Human” reported that an estimated 44,000-98,000 deaths occur each year in US hospitals due to avoidable medical errors.",
    },
    {
      link: "/conferences",
      svg: <Conference />,
      heading: "CME/CPD Conferences",
      subheading:
        "Medicine is a profession with life-long learning. The importance of updating physician knowledge on a regular basis is well known and universally agreed upon.",
    },
  ];
  return (
    <>
      <Bannermain
        banner={banner}
        heading="Reimagining Healthcare"
        subheading="I-HART is dedicated to providing innovative and unique solutions to all sectors of the healthcare industry"
      />
      <div className="innovative__content__wraper">
        <div className="Innovative__heading">
          <Fade bottom>Innovative and Unique Solutions</Fade>
        </div>
        <div className="Innovative__heading__sub">
          <Fade bottom>
            Innovations in Healthcare Advocacy, Research and Training (I-HART)
            is an innovative full service global consultancy service offering
            total health care solutions across the spectrum of healthcare
            planning, strategy, operations, implementation and quality
            improvement, assurance and control. <br />
            <br /> I-HART is dedicated to providing transformative and unique
            solutions to all sectors of the healthcare industry. Potential
            clients who can benefit from I-HART include academic health centers,
            medical schools/colleges, hospitals, clinics/polyclinics,
            pharmaceutical companies, consultancy firms, governments and
            non-governmental organizations.
          </Fade>
        </div>
      </div>
      <div className="training__card__container__main">
        <div className="training__card__container">
          {trainingData.map((item, index) => (
            <TraningCard
              key={index}
              svg={item.svg}
              heading={item.heading}
              link={item.link}
              subheading={item.subheading}
            />
          ))}
        </div>
      </div>
    </>
  );
}
