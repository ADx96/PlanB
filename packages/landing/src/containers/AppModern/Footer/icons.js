import React from "react";
import { Hero } from "./footer.style";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Icons = () => {
  return (
    <Hero>
      <div className="social-links">
        <a className="twitter" href="">
          <i className="fab fa-twitter">
            <FaTwitter />
          </i>
        </a>
        <a className="instagram" href="">
          <i className="fab fa-instagram">
            <FaInstagram />
          </i>
        </a>
        <a className="linkedin" href="">
          <i className="fab fa-linkedin-in">
            <FaLinkedinIn />
          </i>
        </a>
      </div>
    </Hero>
  );
};

export default Icons;
