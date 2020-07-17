import React from "react";
import classes from "./Box.module.scss";

const Box = (props) => {
  const {
    title,
    className,
    containerClassName,
    style,
    onClick,
    children,
  } = props;
  return (
    <div
      className={`ElementBackgroundColor ${classes.Box} ${
        className ? className : ""
      }`}
      style={style}
      onClick={onClick}
    >
      {title ? <div className={classes.Title}>{title}</div> : null}
      <div className={containerClassName ? containerClassName : ""}>
        {children}
      </div>
    </div>
  );
};

export default Box;
