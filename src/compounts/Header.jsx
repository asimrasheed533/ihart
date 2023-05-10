import React, { useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ilogo from "../assets/ilogo.png";
import ClickAwayListener from "react-click-away-listener";
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
                <Link
                  className="header__navbar__link"
                  to="/"
                  onClick={() => {
                    navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </Link>
                <Link
                  className="header__navbar__link"
                  to="/about"
                  onClick={() => {
                    navigate("/about");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  About Us
                </Link>
                <Link className="header__navbar__link" to="/">
                  Services
                </Link>
                <Link className="header__navbar__link" to="/products">
                  Solution
                </Link>
                <Link className="header__navbar__link" to="/products">
                  Clients
                </Link>
                <Link className="header__navbar__link" to="/">
                  Contact Us
                </Link>
              </div>
            ) : null}
            <div className="header__upper__nav__container">
              <div className="header__upper__nav__entry">
                <div className="header__upper__nav__entry__svg">svg</div>
                <div className="header__upper__nav__entry__text">
                  +1 (202) 800 9099
                </div>
              </div>
              <div className="header__upper__nav__entry">
                <div className="header__upper__nav__entry__svg">svg</div>
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
