import React from "react";
import classes from "./Projects.module.scss";
import withDeviceInfo from "../../hoc/withDeviceInfo";
import Project from "./Project/Project";
import data from "./projectData";

const Projects = (props) => {
  return (
    <div id="Projects" className={classes.Projects}>
      <div className={classes.Title}>Projects</div>
      <div className={classes.Container}>
        {data.map((data, index) => (
          <Project data={data} key={index}></Project>
        ))}
      </div>
    </div>
  );
};

export default withDeviceInfo(Projects);
