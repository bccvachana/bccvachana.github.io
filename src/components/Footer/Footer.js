import React from "react";
import classes from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      {`</>`} with <i className="fa fa-heart" /> by Vachana Chongruchipinyo
    </div>
  );
};

export default Footer;
