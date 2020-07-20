import React from "react";
import classes from "./Header.module.scss";
import profileImg from "../../assets/profileImg.jpg";
import phoneIcon from "../../assets/contact/phone.svg";
import mailIcon from "../../assets/contact/mail.svg";
import facebookIcon from "../../assets/contact/facebook.svg";
import githubIcon from "../../assets/contact/github.svg";
import resume from "../../assets/Resume-Vachana.pdf";

const Header = (props) => {
  return (
    <div id="Home" className={classes.Header}>
      <img className={classes.Image} src={profileImg} alt="profileImg" />
      <div className={classes.Text}>
        <div className={classes.Hello}>Hello, I'm</div>
        <div className={classes.Name}>Vachana</div>
        <div className={`${classes.Name} ${classes.LastName}`}>
          Chongruchipinyo
        </div>
        <div className={classes.Position}>Frontend Developer</div>{" "}
        <div className={classes.Detail}>
          I’m an energetic, fast-learning and hard-working web developer
          <br />
          with one year of experience. I am seeking an opportunity
          <br />
          to expand my programming knowledge and skills.
        </div>
        <div className={`${classes.Detail} ${classes.DetailMobile}`}>
          I’m an energetic, fast-learning and hard-working web developer with
          one year of experience. I am seeking an opportunity to expand my
          programming knowledge and skills.
        </div>
        <div className={classes.Contact}>
          <a href="tel:0826771977">
            <img src={phoneIcon} alt="phoneIcon" />
          </a>
          <a href="mailto:vachana.chong@gmail.com">
            <img src={mailIcon} alt="mailIcon" />
          </a>
          <a
            href="https://web.facebook.com/bccvachana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="facebookIcon" />
          </a>
          <a
            href="https://github.com/bccvachana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="githubIcon" />
          </a>
          <a
            className="RedHightLight"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
