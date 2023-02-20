import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer_page">
        <div className="container">
          {/* Footer text */}
          <div>
            <span className="footer_text">StayIn</span> <br />
            <span className="footer_text">touch with</span> <br />
            <span className="footer_text">HelloCar</span>
          </div>
          <hr className="mt-2" />
        </div>
      </div>
    </>
  );
};

export default Footer;
