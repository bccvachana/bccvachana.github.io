import React from "react";
import classes from "./Bullet.module.scss";

const Bullet = (props) => {
  const { children, className } = props;
  return (
    <div className={`${classes.Container} ${className ? className : ""}`}>
      <div className={classes.RedBullet} />
      <div>{children}</div>
    </div>
  );
};

export default Bullet;
