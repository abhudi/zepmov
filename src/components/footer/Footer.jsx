import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <a
            href="https://www.zeplinix.com/terms-service"
            target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="menuItem">Terms of use </li>
          </a>
          <a
            href="https://www.zeplinix.com/privacy-policy"
            target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="menuItem">Privacy-Policy</li>
          </a>
          <a
            href="https://www.zeplinix.com/about"
            target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="menuItem">About</li>
          </a>
          {/* <li className="menuItem">Blog</li> */}
          {/* <li className="menuItem">FAQ</li> */}
        </ul>
        <div className="infoText">
          ZepMov is a feature-rich movie website designed to provide users with
          a seamless and engaging platform for exploring, discovering movies.
          Whether you’re a casual movie-goer or a cinephile, ZepMov offers a
          user-friendly experience with comprehensive tools and features
          tailored to movie enthusiasts.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://www.facebook.com/people/ZeplinixDigital/61569439216331/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaFacebookF />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.instagram.com/zeplinix.digital/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://x.com/zeplinixworld?s=21"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/company/zeplinix-technologies-private-limited/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
