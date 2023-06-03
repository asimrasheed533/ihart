import puppaper from "../assets/puppaper.png";
import doc from "../assets/doc.png";
import avatr from "../assets/avatr.png";

export function PublicationsCard() {
  return (
    <>
      <div className="covid__card"></div>
      <div className="covid__card__overview__row">
        <div className="covid__card__overview__row__left">
          <div className="covid__card__overview__img__wraper">
            <img src={doc} alt="blog" />
            <a
              href="https://www.africau.edu/images/default/sample.pdf"
              className="covid__card__overview__img__btn"
            >
              <div className="btn__download">Download</div>
            </a>
            <div className="abstract__btn">
              <button>View Abstract</button>
            </div>
          </div>

          <div className="covid__card__overview__text">
            <div className="covid__card__text__row">
              <div className="covid__card__text__row__heading">
                Critical preparedness, readiness and response actions for
                COVID-19
              </div>
              <div className="covid__card__text__row__user__wrpaer">
                <div className="covid__card__text__row__user">
                  <div className="covid__card__text__row__user__avatar">
                    <img src={avatr} alt="avatr" />
                  </div>
                  <div className="covid__card__text__row__user__avatar__name">
                    Abdulrahman Essa Al Lily,
                  </div>
                </div>
                <div className="covid__card__text__row__user">
                  <div className="covid__card__text__row__user__avatar">
                    <img src={avatr} alt="avatr" />
                  </div>
                  <div className="covid__card__text__row__user__avatar__name">
                    Abdulrahman Essa Al Lily,
                  </div>
                </div>
                <div className="covid__card__text__row__user">
                  <div className="covid__card__text__row__user__avatar">
                    <img src={avatr} alt="avatr" />
                  </div>
                  <div className="covid__card__text__row__user__avatar__name">
                    Abdulrahman Essa Al Lily,
                  </div>
                </div>
                <div className="covid__card__text__row__user">
                  <div className="covid__card__text__row__user__avatar">
                    <img src={avatr} alt="avatr" />
                  </div>
                  <div className="covid__card__text__row__user__avatar__name">
                    Abdulrahman Essa Al Lily,
                  </div>
                </div>
                <div className="covid__card__text__row__user">
                  <div className="covid__card__text__row__user__avatar">
                    <img src={avatr} alt="avatr" />
                  </div>
                  <div className="covid__card__text__row__user__avatar__name">
                    Abdulrahman Essa Al Lily,
                  </div>
                </div>
              </div>
            </div>
            <div className="covid__card__overview__text__heading">Overview</div>
            <div className="covid__card__overview__text__heading__text">
              All countries should increase their level of preparedness, alert
              and response to identify, manage and care for new cases of
              COVID-19. Countries should prepare to respond to different public
              health scenarios, recognizing that there is no one-size-fits-all
              approach to managing cases and outbreaks of COVID-19. Each country
              should assess its risk and rapidly implement the necessary
              measures at the appropriate scale to reduce both COVID-19
              transmission and economic, public and social impacts. All
              countries should increase their level of preparedness, alert and
              response to identify, manage and care for new cases of COVID-19.
              Countries should prepare to respond to different public health
              scenarios, recognizing that there is no one-size-fits-all approach
              to managing cases and outbreaks of COVID-19. Each country should
              assess its risk and rapidly implement the necessary measures at
              the appropriate scale to reduce both COVID-19 transmission and
              economic, public and social impacts.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
