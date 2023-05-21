import { Head } from "../../../modules";
import rearchimg from "../../assets/rearchimg.png";
import Fade from "react-reveal/Fade";
export default function Research() {
  return (
    <>
      <Head title="Research | I-HART" />
      <div className="about__contect__section">
        <Fade bottom>
          <div className="about__contect__section__heading">
            Research Infrastructure and Governance
          </div>
        </Fade>
        <Fade bottom>
          <div className="about__contect__section__sub__heading">
            Innovation is at the heart of progress in any field. In Medicine,
            research drives our understanding of the cause and effect of
            disease, helps develop and test interventions and measures outcomes.
            Biomedical research, particularly human subjects research, is an
            increasingly complex and highly regulated field. Protecting human
            volunteers is paramount, balancing it with the need to generate new
            knowledge. The success of an institution, organization or indeed a
            country can be measured by the amount of new knowledge generated
            through original research. However, research is not recognized by
            leading authorities, and may even jeopardize individuals and
            institutions if proper regulatory procedures are not diligently
            followed.
            <br />
            <br />
            Clinical research is a wide subject which encompasses multiple
            disciplines. Each type has its own methodology, scope and answers
            specific questions. There is some overlap, which complements various
            disciplines within the field.
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <div className="traning__img">
          <img src={rearchimg} alt="traning" />
        </div>
      </Fade>
      <div className="about__contect__section">
        <Fade bottom>
          <div className="about__contect__section__sub__heading">
            Lead consultants in our team have contributed over 500 original
            research papers in international peer reviewed journals with high
            impact. They have consulted with governments, academic institutions
            and independent foundations and have helped train and set up
            biomedical research infrastructure across the globe. We can help
            develop framework for human subject research, including developing
            policies and procedures which are consistent with the highest global
            standards. We can also help develop organizational and governance
            structures to conduct and monitor human subjects research. In
            addition, we can train the local workforce in all aspects of human
            subjects research, ranging from hypothesis development, research
            methodology, cohort development, creating large national datasets,
            and conducting clinical trials. We can also help develop and train
            the regulatory workforce, e.g. Institutional Review Boards, Data
            Safety and Monitoring Boards, and Adverse Events Monitoring Systems.
          </div>
        </Fade>
      </div>
    </>
  );
}
