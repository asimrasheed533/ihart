import { Head } from "../../../modules";
import confer from "../../assets/confer.png";

export default function Conferences() {
  return (
    <>
      <Head title="Conferences | I-HART" />
      <div className="about__contect__section">
        <div className="about__contect__section__heading">
          CME/CPD Conferences
        </div>
        <div className="about__contect__section__sub__heading">
          Medicine is a profession with life-long learning. The importance of
          updating physician knowledge on a regular basis is well known and
          universally agreed upon. Licensing authorities in most countries
          require physicians and other healthcare professionals to attend a
          minimum number of CME/CPD hours annually to obtain and renew license
          to practice lawfully.
          <br />
          <br />
          We have designed, planned and delivered large CME and CPD conferences
          around the globe. These conferences have attracted up to 4,000
          attendees. The scope of our conferences has included updates in
          medical education, practice of medicine, quality improvement, patient
          safety, global health and curriculum reforms. The conferences
          organized by us have been officially endorsed and/or accredited by
          prestigious organizations like the American College of Physicians,
          Health Authority of Abu Dhabi and Accreditation Council for Continuing
          Medical Education.
        </div>
      </div>
      <div className="traning__img">
        <img src={confer} alt="traning" />
      </div>
      <div className="about__contect__section">
        <div className="about__contect__section__sub__heading">
          We provide complete solutions for CME/CPD conferences in consultation
          with the hosting organization and keeping their needs and goals in
          mind. Programs are jointly developed with input and approval from the
          hosting organization. The scope of our work spans from needs
          assessment, learning objectives identification, curriculum
          development, faculty identification and invitation, program delivery
          and post-program evaluations. We can obtain all necessary and required
          accreditations on behalf of the host organization to suit their unique
          needs.
        </div>
      </div>
    </>
  );
}
