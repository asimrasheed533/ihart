import { Head } from "../../../modules";
import monitoringimg from "../../assets/monitoringimg.png";
import Fade from "react-reveal/Fade";
export default function Monitoring() {
  return (
    <>
      <Head title="Monitoring | I-HART" />
      <div className="about__contect__section">
        <Fade bottom>
          <div className="about__contect__section__heading">
            Monitoring Patient Safety
          </div>
        </Fade>
        <Fade bottom>
          <div className="about__contect__section__sub__heading">
            There are numerous ways to measure quality and safety in healthcare
            organizations. Many governmental agencies and professional
            organizations have developed measures to determine the quality of
            care that a hospital provides, and to identify areas that need
            improvement. These include Agency for Healthcare Research and
            Quality (AHRQ), Center for Medicare and Medicaid Services (CMS),
            Institute for Healthcare Improvement (IHI), the Armstrong Institute
            at the Johns Hopkins University, and others. The tools developed by
            these agencies/organizations include the AHRQ Patient Safety
            Indicators, CMS Core Measures and the IHI Global Trigger Tool. Many
            of these tools include similar and overlapping indicators which are
            universally applicable.
            <br />
            <br />
            Many hospitals and healthcare organizations in North America and
            Western Europe have developed their own Quality and Patient Safety
            Dashboards. The exact content of those dashboards is determined by
            the regulatory mandates and local, regional and national priorities.
            One common theme for most successful organization is the small
            number of meaningful indicators included in such dashboards. Many
            organizations generally recommend 5-12 indicators to be monitored
            and presented at the highest level of the organization.
            <br />
            <br />
            Our approach to developing a toolkit to monitor patient safety is
            based on the
            <div className="clear"> C L E A R</div>
            principles, which stipulates that such indicators should be:
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <div className="traning__img">
          <img src={monitoringimg} alt="traning" />
        </div>
      </Fade>
    </>
  );
}
