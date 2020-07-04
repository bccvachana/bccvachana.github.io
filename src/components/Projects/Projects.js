import React from "react";
import classes from "./Projects.module.scss";
import Box from "../UI/Box/Box";

const Projects = (props) => {
  return (
    <div id="Projects" className={classes.Projects}>
      <div className={classes.Title}>Projects</div>
      <Box></Box>
    </div>
  );
};

export default Projects;
