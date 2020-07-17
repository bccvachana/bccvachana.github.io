import React from "react";
import classes from "./Loading.module.scss";
import LoadingDot from "../UI/LoadingDot/LoadingDot";

const Loading = (props) => {
  const { isLoaded, darkMode } = props;
  return (
    <div
      className={classes.Loading}
      style={{
        visibility: isLoaded ? "hidden" : "visible",
        opacity: isLoaded ? 0 : 1,
        backgroundColor: darkMode ? "#1E1E1E" : "#f3f3f4",
      }}
    >
      <LoadingDot width="8rem" />
    </div>
  );
};

export default Loading;
