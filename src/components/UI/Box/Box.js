import React from "react";
import classes from "./Box.module.scss";

const Box = (props) => {
  const { title, className, style, children } = props;
  return (
    <div className={`ElementBackgroundColor ${classes.Box}`} style={style}>
      {title ? <div className={classes.Title}>{title}</div> : null}
      <div className={className}>{children}</div>
    </div>
  );
};

export default Box;
