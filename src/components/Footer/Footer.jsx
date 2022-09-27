import React from "react";
import "./Footer.css";
import Wave from "../../img/footer.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Telegram from "../../img/telegram.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <div className="i-icons">
            <a href="https://github.com/innazozulia">
              <img src={Github} alt="github" className="links" />
            </a>
            <a href="https://www.linkedin.com/in/inna-zozulia-426367174/">
              <img src={LinkedIn} alt="linkedin" className="links" />
            </a>
            <a href="https://telegram.me/innazozulia">
              <img src={Telegram} alt="telegram" className="links" />
            </a>
            <a href="https://www.instagram.com/wayoutofhead/">
              <img src={Instagram} alt="instagram" className="links" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
