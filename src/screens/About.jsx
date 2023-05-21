import Bannermain from "../compounts/Bannermain";
import about from "../assets/about.jpg";
import discovery from "../assets/discovery.png";
import mdimg from "../assets/mdimg.png";
import profit from "../assets/profit.png";
import { useEffect, useState } from "react";
import { Head } from "../../modules";
import Fade from "react-reveal/Fade";
export default function About() {
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <Head title="About Us | I-HART" />
      {isOpen && <Popup setIsOpen={setIsOpen} />}
      <Bannermain
        banner={about}
        heading="About Us"
        subheading="Providing Innovative Healthcare Solutions for Safer, Better Care of all Patients."
      />
      <section className="about__contect__section" id="introduction">
        <Fade bottom>
          <div className="about__contect__section__heading">Our Focus </div>
        </Fade>
        <Fade bottom>
          <div className="about__contect__section__sub__heading">
            I-HART responds to the growing health care challenges around the
            world with a special focus on emerging markets, transitional
            economies and rapidly developing states. We offer customized
            services to respond to strategic challenges, technical problems,
            data needs, and evidence generation for quality improvement or
            health care reform.
          </div>
        </Fade>
      </section>
      <section className="about__contect__section" id="value">
        <Fade bottom>
          <div className="about__contect__section__heading">
            Value Proposition
          </div>
        </Fade>
        <Fade bottom>
          <div className="about__contect__section__sub__heading">
            Our programs and services are value and outcomes driven. A wide
            variety of clients in the healthcare sector including academic
            health centers, hospitals, clinics/polyclinics, pharmaceutical
            companies, consultancy firms, medical schools/colleges, governments
            and non-governmental organizations can
            <div className="profit"> P R O F I T</div> from our novel and
            visionary solutions.
            <br />
            <br />
            Our services are:
          </div>
        </Fade>
      </section>
      <Fade bottom>
        <div className="profit__img">
          <img src={profit} alt="profit" />
        </div>
      </Fade>
      <Fade bottom>
        <div className="about__contect__section">
          <div className="about__contect__section__heading">
            Our Solutions Development Methodology
          </div>
          <div className="about__contect__section__sub__heading__entry">
            <span style={{ color: "red" }}>1: </span>
            <span>Discovery</span>A detailed analysis of the current state that
            considers each system fail point from a patient, process and
            provider perspective
          </div>
          <div className="about__contect__section__sub__heading__entry">
            <span style={{ color: "red" }}>2: </span>
            <span>Solutions Development</span>Design of innovative solutions
            that address whole system issues and are able to deliver
            sustainable, measurable outcomes for care and care delivery
          </div>
          <div className="about__contect__section__sub__heading__entry">
            <span style={{ color: "red" }}>3: </span>
            <span>Implementation</span>Applying the art and science of
            implementation theory that considers the impact of change on
            patients, process and providers.
          </div>
          <div className="about__contect__section__sub__heading__entry">
            <span style={{ color: "red" }}>4: </span>
            <span>Post Implementation and Sustainability</span>Measuring and
            evaluating the true impact of the interventions scientifically with
            the aim of sharing solutions that improve health and health
            outcomes, locally, nationally and to the wider region
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="profit__img">
          <img src={discovery} alt="profit" />
        </div>
      </Fade>
      <Fade bottom>
        <section className="about__contect__section" id="team">
          <div className="about__contect__section__heading">
            The Team Experts in their fields
          </div>
          <div className="about__contect__section__sub__heading">
            High level expertise and over 75 years of combined technical
            experience represent the principals in I-HART. We have experience
            working in over 30 countries and represent leadership in high
            performing health care systems across the globe. We have experience
            in education, research, healthcare delivery, global health, program
            development and corporate leadership and governance. We have worked
            in developing, managing, evaluating and operating health, healthcare
            and educational programs. We have provided support and consultative
            services to governments, non-governmental organizations,
            professional societies and other organizations. Our affiliated
            network of consultants spans a wide array of technical expertise and
            global diversity – available to assist at any time.
            <br />
            Our programs and solutions are evidence-based, goal-oriented,
            results-driven and customized to our partners’ needs. We do not
            believe in transporting solutions from one setting to another (the
            copy-paste solutions); rather, we evaluate each system individually
            in close association with our partner and tailor our solutions to
            the unique needs and settings of our partners.
          </div>
        </section>
      </Fade>

      <div className="about__md">
        <div className="about__md__img">
          <img src={mdimg} alt="image" />
          <div className="about__md__heading">Fauzia Anjum Vohra</div>
          <div className="about__md__sub__heading">Managing Director</div>
          <div className="about__md__learn" onClick={() => setIsOpen(true)}>
            Read More
          </div>
        </div>
      </div>
    </>
  );
}

function Popup({ setIsOpen }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <>
      <div className="popup__main">
        <div className="popup__container">
          <div className="popup__svg" onClick={() => setIsOpen(false)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 1L13 13"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="popup__container__heading">Fauzia Anjum Vohra</div>
          <div className="popup__container__subheading">Managing Directora</div>
          <div className="popup__container__text">
            Fauzia Vohra’s extensive management career includes successfully
            setting up and managing large businesses and teams globally. She has
            handled business portfolios in excess of USD 3 Billion covering
            Government, Quasi-Government, Public and Private entities. Ms. Vohra
            has previously facilitated capital raising for establishment and
            expansion of hospitals and healthcare related corporations in the
            Middle East and Asia. She has led large capital market transactions
            not only in the west but also in emerging markets including Asia
            Pacific, Middle East, Africa and Turkey. Ms. Vohra has previously
            worked at General Electric (GE), one of the world’s leading
            companies in industrial and healthcare equipment. Her management
            expertise spans Business Development, Capital Markets, Strategy,
            Financial Planning, Quality Improvement and Product Management. As a
            Six Sigma Black Belt at GE, she led several key operational
            efficiency projects resulting in significant cost savings and
            increased revenue streams.
            <br />
            <br />
            Ms. Vohra holds a Master’s degree in Finance from the prestigious
            Monash University in Australia. In addition, she holds a Graduate
            Diploma in Corporate Treasury from the Finance and Treasury
            Association of Australia. Ms. Vohra is also Six Sigma certified from
            GE. She is a member of the American Women’s Association and is
            actively involved in community and social development.
          </div>
        </div>
      </div>
    </>
  );
}
