import React, { useContext } from "react";
import classes from "./Loading.module.scss";
import { Context } from "../../App";
import LoadingDot from "../UI/LoadingDot/LoadingDot";

const Loading = (props) => {
  const { isLoaded, darkMode } = useContext(Context);
  return (
    <div
      className={classes.Loading}
      style={{
        visibility: isLoaded ? "hidden" : "visible",
        opacity: isLoaded ? 0 : 1,
        backgroundColor: darkMode ? "#1E1E1E" : "#F3F3F4",
      }}
    >
      <LoadingDot width="8rem" />
    </div>
  );
};

export default Loading;
