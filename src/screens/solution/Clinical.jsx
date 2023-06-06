import { Head } from "../../../modules";
import clinicalimg from "../../assets/clinicalimg.png";
import Fade from "react-reveal/Fade";

export default function Clinical() {
  return (
    <>
      <Head title="Clinical | I-HART" />
      <div className="about__contect__section">
        <Fade bottom>
          <div className="about__contect__section__heading">
            Upgrading Post Graduate Training Programs
          </div>
        </Fade>
        <Fade bottom>
          <div className="about__contect__section__sub__heading">
            Post graduate training programs, including residency and fellowship
            training, are at the core of producing a competent medical workforce
            for the organization, community and country. While many excellent
            programs exist in various countries, and many are accredited or
            recognized by local accreditation and certifying bodies, numerous
            academic institutions lack formal structured training programs.
            <br />
            <br />
            In the US and several Western countries, structured postgraduate
            training programs are mandatory for training physicians and
            eventually certifying them in their specialty and subspecialty. Each
            program has clearly defined goals, curriculum, milestones,
            competencies and monitoring systems. Such structured programs ensure
            that all graduates of such training programs acquire at least the
            minimum training and competency to practice in their chosen field.
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <div className="traning__img">
          <img src={clinicalimg} alt="traning" />
        </div>
      </Fade>

      <div className="about__contect__section">
        <Fade bottom>
          <div className="about__contect__section__sub__heading">
            With our extensive experience in developing and leading such
            programs in the US and providing consultations in other countries,
            we propose to help develop a world-class postgraduate training
            program. We will work closely with the leaders and faculty on the
            ground to identify needs and gaps, and based on your recommendations
            and our joint analysis, chose a specialty to pilot this program. The
            ultimate goal of this work stream is to design and implement a
            postgraduate training program (residency program) which will be at
            par with any program in the US and able to secure accreditation from
            Accreditation Council for Graduate Medical Education International
            (ACGME-I) or a similar organization of your choosing. Future
            programs can be added based on the need and desire of the
            organization.
          </div>
        </Fade>
      </div>
    </>
  );
}
