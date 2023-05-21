import { Link } from "react-router-dom";
import { Head } from "../../../modules";
import Fade from "react-reveal/Fade";
export default function Solution() {
  return (
    <>
      <Head title="Solution | I-HART" />
      <Fade bottom>
        <div className="solution__container">
          <div className="solution__text__wraper">
            <div className="solution__text__wraper__heading">
              Our Range of Solutions
            </div>

            <div className="solution__text__wraper__sub__heading">
              Please click on the links below to find out more
            </div>
          </div>

          <Link
            to="/solution/traning"
            className="solution__text__wraper__entry"
          >
            Training in Quality Improvement and Patient Safety in Healthcare
          </Link>
          <Link
            to="/solution/monitoring"
            className="solution__text__wraper__entry"
          >
            Monitoring Patient Safety
          </Link>
          <Link
            to="/solution/reducing"
            className="solution__text__wraper__entry"
          >
            Reducing Variance in Care Delivery
          </Link>
          <Link
            to="/solution/clinical"
            className="solution__text__wraper__entry"
          >
            Upgrading Post Graduate Training Programs
          </Link>
          <Link
            to="/solution/research"
            className="solution__text__wraper__entry"
          >
            Research Infrastructure and Governance
          </Link>
          <Link className="solution__text__wraper__entry">
            Clinical Trials Infrastructure
          </Link>
          <Link
            to="/solution/enterprise"
            className="solution__text__wraper__entry"
          >
            Setting Up Enterprise Quality Office Structure and Governance
          </Link>
          <Link
            to="/solution/conferences"
            className="solution__text__wraper__entry"
          >
            CME/CPD Conferences
          </Link>
          <Link
            to="/solution/executive"
            className="solution__text__wraper__entry"
          >
            Health Executives Academy for Leadership Support (HEALS) – a joint
            partnership with AAH LLC
          </Link>
        </div>
      </Fade>
    </>
  );
}
