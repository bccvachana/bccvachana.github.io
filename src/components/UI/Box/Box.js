import React from "react";
import classes from "./Box.module.scss";

const Box = (props) => {
  const { title, className, style, onClick, children } = props;
  return (
    <div
      className={`ElementBackgroundColor ${classes.Box}`}
      style={style}
      onClick={onClick}
    >
      {title ? <div className={classes.Title}>{title}</div> : null}
      <div className={className}>{children}</div>
    </div>
  );
};

export default Box;
