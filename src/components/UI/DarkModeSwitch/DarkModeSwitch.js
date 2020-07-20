import React, { useContext } from "react";
import classes from "./DarkModeSwitch.module.scss";

import { Context } from "../../../App";

const DarkModeSwitch = (props) => {
  const { darkMode, setDarkMode } = useContext(Context);

  return (
    <div className={classes.DarkModeSwitch}>
      <div
        className={classes.SwitchContainer}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        <div
          className={classes.Switch}
          style={{
            transform: darkMode ? "translateX(100%)" : "translateX(0%)",
          }}
        />
      </div>
      <div className={classes.Label}>Dark Mode</div>
    </div>
  );
};

export default DarkModeSwitch;
