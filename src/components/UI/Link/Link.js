import React from "react";
import classes from "./Link.module.scss";

const Link = (props) => {
  const { to, name } = props;
  return (
    <div className={classes.Link}>
      <a href={to} target="blank">
        <i className="fa fa-external-link-square" />
        {name}
      </a>
    </div>
  );
};

export default Link;
