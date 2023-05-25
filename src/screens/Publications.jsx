import Bannermain from "../compounts/Bannermain";
import BlogCard from "../compounts/BlogCard";
import blog from "../assets/blog.png";
import avatr from "../assets/avatr.png";
import { Head } from "../../modules";

export default function Publications() {
  return (
    <>
      <Head title="Publications | I-HART" />
      <Bannermain
        banner={blog}
        heading="Latest Publications"
        subheading="I-HART is dedicated to providing innovative and unique solutions to all sectors of the healthcare industry."
      />
      <div className="covid__card">
        <div className="covid__card__text__row">
          <div className="covid__card__text__row__heading">
            Critical preparedness, readiness and response actions for COVID-19
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
            <div className="covid__card__text__row__user">
              <div className="covid__card__text__row__user__avatar">
                <img src={avatr} alt="avatr" />
              </div>
              <div className="covid__card__text__row__user__avatar__name">
                Abdulrahman Essa Al Lily,
              </div>
            </div>
          </div>
          <div className="Publications__row">
            <div className="Publications__row__text">
              Publications 2023, 11(2), 25;
            </div>
            <div className="Publications__row__link">
              http://doi.org/10.3390/publications11020025
            </div>
            <div className="Publications__row__date">- 07 Apr 2023</div>
          </div>
        </div>
      </div>
      <div className="covid__card__overview__row">
        <div className="covid__card__overview__row__left">
          <div className="covid__card__overview__img__wraper">
            <img src={blog} alt="blog" />
            <div className="covid__card__overview__img__btn">
              <div className="btn__download">Download</div>
            </div>
          </div>
          <div className="covid__card__overview__text">
            <div className="covid__card__overview__text__heading">Overview</div>
            <div className="covid__card__overview__text__heading__text">
              All countries should increase their level of preparedness, alert
              and response to identify, manage and care for new cases of
              COVID-19. Countries should prepare to respond to different public
              health scenarios, recognizing that there is no one-size-fits-all
              approach to managing cases and outbreaks of COVID-19. Each country
              should assess its risk and rapidly implement the necessary
              measures at the appropriate scale to reduce both COVID-19
              transmission and economic, public and social impacts.
            </div>
            <div className="covid__card__overview__text__version">
              <div className="covid__card__overview__text__version__heading">
                Previous version:
              </div>
              <div className="covid__card__overview__text__version__sub__heading">
                Critical preparedness, readiness and response actions for
                COVID-19, 22 March 2020
              </div>
            </div>
          </div>
        </div>
        <div className="covid__card__overview__row__right">
          <div className="covid__card__team__content">
            <div className="covid__card__team__content__heading">WHO TEAM</div>
            <div className="covid__card__team__content__sub__heading">
              WHO Headquaers, (HQ), WHO Worldwide
            </div>
            <div className="covid__card__team__content__heading">
              REFRENCE NUMBERS
            </div>
            <div className="covid__card__team__content__heading__sub__text">
              WHO REFRENCE NUMBERS
            </div>
            <div className="covid__card__team__content__sub__heading">
              WHO/2019-NcOv/
              <br />
              Community_Actions/2021.1
            </div>
            <div className="covid__card__team__content__heading">
              REFRENCE NUMBERS
            </div>

            <div className="covid__card__team__content__svg__wraper">
              <div className="covid__card__team__content__svg">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7894 22.2259C10.9397 22.2259 10.1739 22.0319 9.49209 21.6437C8.82074 21.2451 8.291 20.7101 7.90288 20.0388C7.51475 19.3569 7.32069 18.5912 7.32069 17.7415C7.32069 16.8918 7.51475 16.1313 7.90288 15.46C8.291 14.7886 8.82074 14.2589 9.49209 13.8707C10.1739 13.4826 10.9397 13.2886 11.7894 13.2886C12.3978 13.2886 12.9642 13.3987 13.4887 13.619C14.0132 13.8288 14.4643 14.1225 14.8419 14.5001C15.23 14.8673 15.508 15.3079 15.6759 15.8219L13.8664 16.6086C13.709 16.1785 13.4415 15.8324 13.0639 15.5701C12.6967 15.3079 12.2719 15.1767 11.7894 15.1767C11.3383 15.1767 10.9344 15.2869 10.5778 15.5072C10.2316 15.7275 9.95889 16.0317 9.75958 16.4198C9.56028 16.8079 9.46062 17.2537 9.46062 17.7572C9.46062 18.2608 9.56028 18.7066 9.75958 19.0947C9.95889 19.4828 10.2316 19.787 10.5778 20.0073C10.9344 20.2276 11.3383 20.3378 11.7894 20.3378C12.2824 20.3378 12.7125 20.2066 13.0796 19.9444C13.4468 19.6821 13.709 19.3307 13.8664 18.8901L15.6759 19.7084C15.508 20.1909 15.2353 20.6262 14.8577 21.0143C14.48 21.392 14.029 21.6909 13.5045 21.9112C12.98 22.121 12.4083 22.2259 11.7894 22.2259ZM21.3624 22.2259C20.5127 22.2259 19.747 22.0319 19.0651 21.6437C18.3938 21.2451 17.864 20.7101 17.4759 20.0388C17.0878 19.3569 16.8937 18.5912 16.8937 17.7415C16.8937 16.8918 17.0878 16.1313 17.4759 15.46C17.864 14.7886 18.3938 14.2589 19.0651 13.8707C19.747 13.4826 20.5127 13.2886 21.3624 13.2886C21.9708 13.2886 22.5373 13.3987 23.0618 13.619C23.5863 13.8288 24.0373 14.1225 24.415 14.5001C24.8031 14.8673 25.0811 15.3079 25.2489 15.8219L23.4394 16.6086C23.282 16.1785 23.0146 15.8324 22.6369 15.5701C22.2698 15.3079 21.8449 15.1767 21.3624 15.1767C20.9113 15.1767 20.5075 15.2869 20.1508 15.5072C19.8047 15.7275 19.5319 16.0317 19.3326 16.4198C19.1333 16.8079 19.0336 17.2537 19.0336 17.7572C19.0336 18.2608 19.1333 18.7066 19.3326 19.0947C19.5319 19.4828 19.8047 19.787 20.1508 20.0073C20.5075 20.2276 20.9113 20.3378 21.3624 20.3378C21.8554 20.3378 22.2855 20.2066 22.6527 19.9444C23.0198 19.6821 23.282 19.3307 23.4394 18.8901L25.2489 19.7084C25.0811 20.1909 24.8083 20.6262 24.4307 21.0143C24.0531 21.392 23.602 21.6909 23.0775 21.9112C22.553 22.121 21.9813 22.2259 21.3624 22.2259Z"
                    fill="#151515"
                  />
                  <circle
                    cx="16.918"
                    cy="16.9019"
                    r="15.1787"
                    stroke="black"
                    stroke-width="1.96685"
                  />
                </svg>
              </div>
              <div className="covid__card__team__content__svg">
                <svg
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16.5137"
                    cy="16.9019"
                    r="15.1787"
                    stroke="black"
                    stroke-width="1.96685"
                  />
                  <path
                    d="M14.5675 8.42585C14.5675 7.35068 15.4386 6.47949 16.5138 6.47949C17.589 6.47949 18.4602 7.35068 18.4602 8.42585C18.4602 9.50102 17.589 10.3722 16.5138 10.3722C15.4386 10.3722 14.5675 9.50102 14.5675 8.42585ZM20.4065 19.7148H18.8495V25.1646H17.2924V19.7148H15.7353V25.1646H14.1782V19.7148H12.6211V13.4864C12.6211 12.1987 13.669 11.1508 14.9567 11.1508H18.0709C19.3586 11.1508 20.4065 12.1987 20.4065 13.4864V19.7148Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="covid__card__team__content__svg">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6387 19.5148C14.1265 19.5148 14.5042 19.6642 14.7716 19.9632C15.0391 20.2622 15.1729 20.6319 15.1729 21.0725C15.1729 21.4973 15.1021 21.8435 14.9605 22.111C15.6528 22.6775 16.4474 22.9607 17.3443 22.9607C18.2569 22.9607 18.9414 22.7561 19.3977 22.347C19.854 21.9222 20.0821 21.3479 20.0821 20.6241C20.0821 19.9003 19.8304 19.2787 19.3269 18.7595C18.8234 18.2402 18.2097 17.8075 17.4859 17.4614C16.7778 17.1152 16.0698 16.7533 15.3617 16.3757C14.6536 15.9823 14.0478 15.463 13.5443 14.8179C13.0408 14.1728 12.7891 13.3625 12.7891 12.3869C12.7891 11.4113 13.1038 10.5931 13.7331 9.93226C14.3783 9.2714 15.2673 8.87017 16.4002 8.72855C16.3687 7.83167 16.3373 7.17081 16.3058 6.74597C16.652 6.54141 17.1397 6.43914 17.7691 6.43914C17.9265 6.43914 18.1546 6.46274 18.4536 6.50994C18.3907 7.04493 18.312 7.78446 18.2176 8.72855C19.1931 8.8859 20.0192 9.25567 20.6958 9.83786C21.3881 10.4043 21.7343 11.1596 21.7343 12.1037C21.7343 13.032 21.3252 13.4962 20.507 13.4962C20.0192 13.4962 19.6416 13.3467 19.3741 13.0478C19.1066 12.7488 18.9728 12.3633 18.9728 11.8912C18.9728 11.4192 19.0672 11.0573 19.2561 10.8055C18.7053 10.302 18.0288 10.0503 17.2263 10.0503C16.4238 10.0503 15.818 10.2548 15.4089 10.6639C15.0155 11.073 14.8189 11.5844 14.8189 12.1981C14.8189 12.8117 14.9998 13.3388 15.3617 13.7794C15.7236 14.2043 16.172 14.5583 16.707 14.8415C17.242 15.109 17.8242 15.4237 18.4536 15.7856C19.083 16.1318 19.6652 16.4779 20.2002 16.8241C20.7351 17.1703 21.1836 17.6423 21.5455 18.2402C21.9074 18.8224 22.0883 19.4912 22.0883 20.2464C22.0883 21.458 21.6792 22.4572 20.861 23.2439C20.0585 24.0149 19.0043 24.424 17.6983 24.4712C17.6983 25.195 17.7377 25.6985 17.8163 25.9818C17.3915 26.1863 16.9824 26.2886 16.589 26.2886C16.2114 26.2886 15.9046 26.265 15.6685 26.2178C15.7629 25.4153 15.8259 24.7702 15.8573 24.2824C14.8661 24.0779 14.04 23.6923 13.3791 23.1259C12.734 22.5437 12.4114 21.7963 12.4114 20.8837C12.4114 19.9711 12.8205 19.5148 13.6387 19.5148Z"
                    fill="#151515"
                  />
                  <circle
                    cx="17.1094"
                    cy="16.9019"
                    r="15.1787"
                    stroke="black"
                    stroke-width="1.96685"
                  />
                  <line
                    x1="5.90828"
                    y1="6.43596"
                    x2="27.4867"
                    y2="28.0144"
                    stroke="black"
                    stroke-width="1.96685"
                  />
                </svg>
              </div>
              <div className="covid__card__team__content__svg">
                <svg
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3097 8.79606C17.7966 8.7857 19.1207 9.1161 20.2819 9.78725C21.4249 10.4769 22.3401 11.4068 23.0275 12.5769C23.6965 13.7471 24.0362 15.0757 24.0465 16.5626C24.0568 18.0311 23.7355 19.3551 23.0829 20.5345C22.4302 21.714 21.5279 22.6382 20.3761 23.307C19.2243 23.9943 17.905 24.3431 16.4181 24.3535C15.4085 24.3605 14.4618 24.1835 13.5781 23.8225C12.6946 23.4799 11.9294 22.9987 11.2825 22.3791C10.6173 21.7595 10.1258 21.0378 9.80801 20.2139L12.5252 18.9283C12.8426 19.6971 13.3517 20.3086 14.0525 20.7626C14.735 21.2352 15.5168 21.4684 16.3979 21.4623C17.2424 21.4564 18.0027 21.24 18.679 20.813C19.337 20.4046 19.8561 19.8227 20.2364 19.0674C20.6168 18.3304 20.8037 17.4939 20.7972 16.5577C20.7907 15.6215 20.592 14.7784 20.2013 14.0284C19.8107 13.2969 19.2835 12.7223 18.6197 12.3047C17.9376 11.8872 17.1743 11.6814 16.3299 11.6873C15.4304 11.6935 14.6518 11.9284 13.9942 12.3919C13.3183 12.8739 12.8179 13.5108 12.493 14.3024L9.75797 13.0272C10.0462 12.2359 10.5185 11.5166 11.1748 10.8695C11.813 10.2409 12.5713 9.73998 13.4499 9.3667C14.3285 8.99343 15.2818 8.80322 16.3097 8.79606Z"
                    fill="#151515"
                  />
                  <circle
                    cx="16.7071"
                    cy="16.9019"
                    r="15.1787"
                    stroke="black"
                    stroke-width="1.96685"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
