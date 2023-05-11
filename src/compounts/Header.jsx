import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

import ilogo from "../assets/ilogo.png";

const dropdown = [
  {
    label: "Training in Quality & Safety",
    link: "/traning",
  },
  {
    label: "Monitoring Patient Safety",
    link: "/monitoring",
  },
  {
    label: "Reducing Variance",
    link: "/reducing",
  },
  {
    label: "Clinical Training Programs",
    link: "/training",
  },
  {
    label: "Research Infrastructure",
    link: "/",
  },
  {
    label: "Clinical Trials",
    link: "/",
  },
  {
    label: "Enterprise QIPS Setup",
    link: "/",
  },
  {
    label: "CME/CPD Conferences",
    link: "/",
  },
  {
    label: "Executive Training Academy",
    link: "/executive",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  function changeIsNavOpen() {
    if (window.innerWidth <= 950) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }

  useLayoutEffect(() => {
    changeIsNavOpen();
    window.addEventListener("resize", changeIsNavOpen);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div className="header__section">
      <div
        className={
          isScroll ? "header__navbar header__navbar__active" : "header__navbar"
        }
      >
        <div className="header__navbar__link__wraper">
          <div className="header__logo">
            <img src={ilogo} alt="logo" />
          </div>

          <div className="header__upper__container">
            {isNavOpen ? (
              <div className="header__entries">
                <NavLink end className="header__navbar__link" to="/">
                  Home
                </NavLink>
                <NavLink className="header__navbar__link" to="/about">
                  About Us
                </NavLink>
                <NavLink className="header__navbar__link" to="/services">
                  Services
                </NavLink>
                <div className="header__navbar__link__parent">
                  <NavLink className="header__navbar__link" to="/solution">
                    Solution
                  </NavLink>
                  <div className="header__navbar__link__dropdown">
                    {dropdown.map((item) => (
                      <NavLink
                        to={item.link}
                        className="header__navbar__link__dropdown__link"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <NavLink className="header__navbar__link" to="/client">
                  Clients
                </NavLink>
                <NavLink className="header__navbar__link" to="/contact">
                  Contact Us
                </NavLink>
              </div>
            ) : null}
            <div className="header__upper__nav__container">
              <div className="header__upper__nav__entry">
                <div className="header__upper__nav__entry__svg">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9989 3.70844C15.9731 5.10193 15.5162 6.39523 14.9287 7.62478C12.9053 11.8599 9.99988 15.2556 5.55226 17.0847C3.41345 17.9651 1.52966 17.3443 0.245462 15.4347C-0.0915252 14.9353 -0.0854533 14.4131 0.287965 13.9562C0.958904 13.135 1.64654 12.3244 2.37213 11.5502C2.97779 10.9051 3.61685 10.9127 4.3136 11.4971C4.75836 11.8705 5.2092 12.2409 5.6236 12.6477C5.94237 12.9619 6.19132 12.9468 6.53589 12.6826C8.67926 11.0432 10.349 9.01219 11.6332 6.64721C11.826 6.29201 11.7698 6.04306 11.4693 5.7926C11.023 5.4207 10.5797 5.04273 10.1638 4.63743C9.57789 4.06668 9.51717 3.42913 10.0211 2.81436C10.6602 2.03261 11.3235 1.26604 12.0127 0.528308C12.6229 -0.125934 13.1679 -0.168437 13.8859 0.37803C14.4278 0.789397 14.9378 1.24934 15.4251 1.72446C15.9746 2.26637 16.008 2.98589 15.9989 3.70844Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="header__upper__nav__entry__text">
                  +1 (202) 800 9099
                </div>
              </div>
              <div className="header__upper__nav__entry">
                <div className="header__upper__nav__entry__svg">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.552443 0.357933C1.71343 1.34837 2.84536 2.31433 3.97728 3.27953C5.60404 4.66766 7.23386 6.05198 8.85298 7.4493C9.03883 7.60991 9.13902 7.60073 9.32028 7.44547C11.988 5.15944 14.664 2.88259 17.3363 0.601909C17.6407 0.341872 17.6231 0.261567 17.2361 0.116252C17.0074 0.0305926 16.768 0 16.5241 0C11.6208 0.000764815 6.71685 0.000764815 1.81362 0.000764815C1.37768 0.000764815 0.943262 0.00994256 0.552443 0.357933Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.08525 12.7452C11.5434 12.7452 14.0015 12.7452 16.4588 12.7452C16.7663 12.7452 17.0692 12.7184 17.3529 12.5853C17.5709 12.4828 17.6359 12.3941 17.4034 12.1998C16.3885 11.3501 15.3889 10.4821 14.3831 9.62089C13.4447 8.81784 12.5009 8.02243 11.5717 7.20867C11.3682 7.03046 11.2443 7.01517 11.0386 7.20714C10.546 7.66756 10.0275 8.09968 9.51967 8.54327C9.09137 8.91726 9.08908 8.91956 8.67302 8.55856C8.14453 8.09968 7.61298 7.64385 7.09597 7.17272C6.92542 7.01746 6.81605 7.03199 6.64855 7.17578C4.70745 8.84231 2.75871 10.5004 0.814547 12.1639C0.537685 12.401 0.551451 12.4698 0.888735 12.6106C1.12659 12.71 1.37745 12.7475 1.63519 12.7475C4.11855 12.7475 6.6019 12.7475 9.08525 12.7475C9.08525 12.7459 9.08525 12.7459 9.08525 12.7452Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.176671 1.17676C0.176671 4.68726 0.176671 8.13581 0.176671 11.6693C0.741104 11.1935 1.252 10.7645 1.7606 10.3331C3.18851 9.12395 4.61183 7.91019 6.04586 6.7079C6.2623 6.52664 6.29136 6.43945 6.05274 6.23524C4.1973 4.64519 2.35716 3.03832 0.510894 1.43756C0.419116 1.35802 0.319691 1.28689 0.176671 1.17676Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 11.6654C18 8.12664 18 4.68345 18 1.15918C17.4692 1.61424 16.9897 2.02189 16.5147 2.43336C15.0333 3.71672 13.5587 5.00849 12.0666 6.27961C11.8104 6.49759 11.9756 6.57713 12.1193 6.69873C13.8677 8.17941 15.6153 9.65933 17.3637 11.1392C17.5549 11.3006 17.7484 11.4574 18 11.6654Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="header__upper__nav__entry__text">
                  info@ihartglobal.org
                </div>
              </div>
            </div>
          </div>
          <div
            className="header__menu"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X /> : <Y />}
          </div>
        </div>
      </div>
    </div>
  );
}
function X() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M13 1L1 13"
        stroke="#025294"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 1L13 13"
        stroke="#025294"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
function Y() {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7H19"
        stroke="#025294"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 1H19"
        stroke="#025294"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 13H19"
        stroke="#025294"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
