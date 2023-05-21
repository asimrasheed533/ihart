import { Head } from "../../../modules";
import reducing from "../../assets/reducing.png";
import Fade from "react-reveal/Fade";
export default function Reducing() {
  return (
    <>
      <Head title="Reducing | I-HART" />
      <div className="solution__container">
        <div className="solution__text__wraper">
          <Fade bottom>
            <div className="solution__text__wraper__heading">
              Reducing Variance in Care Delivery
            </div>
          </Fade>
          <Fade bottom>
            <div className="solution__text__wraper__sub__heading">
              Health systems around the world have varying approaches to
              managing similar healthcare conditions. However, evidence shows
              that when care models differ, clinical outcomes are not optimal
              and patient safety can be compromised. In response, healthcare
              organizations are employing standardization of pathways, policies
              and protocols as proven tools for increasing uniformity of
              practice and patient safety, and reducing the number of errors.
              <br />
              <br />
              This work stream will help identify, design and implement Clinical
              Care Pathways which are mutually identified as high-value. Value
              measurement includes determination of volume of diagnosis,
              prognosis, complexity of care, potential for error in management,
              existing variance in care and current and desired outcomes. In the
              first wave, 5 pathways will be identified, with an option to add
              as many clinical pathways as needed or desired by the
              organization.
            </div>
          </Fade>
        </div>
      </div>
      <div className="reducing__contact__container">
        <Fade bottom>
          <div className="reducing__contact__container__heading">
            Examples of such pathways include:
          </div>
        </Fade>

        <div className="reducing__contact__container__row">
          <Fade bottom>
            <div className="reducing__contact__container__col">
              <div className="reducing__contact__container__col__heading">
                First wave of pathways may include:
              </div>

              <div className="reducing__contact__container__row__entry">
                <span>1. </span>Sepsis
              </div>

              <div className="reducing__contact__container__row__entry">
                <span>2. </span>Community Acquired Pneumonia
              </div>

              <div className="reducing__contact__container__row__entry">
                <span>3. </span>Ischemic Heart Disease <br /> – Angina &
                Unstable Angina <br /> – STEMI <br />– Non STEMI
              </div>

              <div className="reducing__contact__container__row__entry">
                <span>4. </span>Heart Failure
              </div>

              <div className="reducing__contact__container__row__entry">
                <span>5. </span>Diabetic ketoacidosis
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="reducing__contact__container__col">
              <div className="reducing__contact__container__col__heading">
                Second Wave may include:
              </div>
              <div className="reducing__contact__container__row__entry">
                <span>6. </span>Acute Confusion
              </div>
              <div className="reducing__contact__container__row__entry">
                <span>7. </span>GI bleeding
              </div>
              <div className="reducing__contact__container__row__entry">
                <span>8. </span>Cellulitis
              </div>
              <div className="reducing__contact__container__row__entry">
                <span>9. </span>Fever of Unknown origin
              </div>
              <div className="reducing__contact__container__row__entry">
                <span>10. </span>Acute pancreatitis
              </div>
              <div className="reducing__contact__container__row__entry">
                <span>11. </span>Pleural effusion
              </div>
              <div className="reducing__contact__container__row__entry">
                <span>12. </span>Ascites
              </div>
              <div className="reducing__contact__container__row__entry">
                <span>13. </span>Acute Abdominal Pain
              </div>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="reducing__img">
            <img src={reducing} alt="reducing" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="reducing__contact__container__col">
            <div className="reducing__contact__container__col__heading">
              Other pathways to consider in the future:
            </div>
            <div className="reducing__contact__container__row__entry">
              14. Jaundice
            </div>
            <div className="reducing__contact__container__row__entry">
              15. Hyponatremia
            </div>
            <div className="reducing__contact__container__row__entry">
              16. Hyperkalemia
            </div>
            <div className="reducing__contact__container__row__entry">
              17. Deep vein thrombosi
            </div>
            <div className="reducing__contact__container__row__entry">
              18. Acute monoarthritis
            </div>
            <div className="reducing__contact__container__row__entry">
              19. Acute kidney injury
            </div>
            <div className="reducing__contact__container__row__entry">
              20. Hepatic encephalopathy
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
