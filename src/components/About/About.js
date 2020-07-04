import React from "react";
import classes from "./About.module.scss";
import Box from "../UI/Box/Box";

const About = (props) => {
  return (
    <div id="About" className={classes.About}>
      <div className={classes.TwoColumnGrid}>
        <Box title="Education" className={classes.Education}>
          <div className={classes.TwoColumnFlex}>
            <div className="RedBold">2016 - 2019</div>
            <div>
              <div className="Bold">Media Technology</div>
              King Mongkut's University of Technology Thonburi
            </div>
          </div>
          <div className={classes.TwoColumnFlex}>
            <div className="RedBold">2013 - 2015</div>
            <div>
              <div className="Bold">Mathematics-Science Program</div>
              Bangkok Christian College
            </div>
          </div>
        </Box>

        <Box title="Experience">
          <div className={classes.TwoColumnFlex}>
            <div className="RedBold">June - July 2019</div>
            <div>
              <div className="Bold">Developer Intern</div>
              Boonmee Lab
            </div>
          </div>
          <div className="Detail">
            <div>Data Visualization</div> / <div>Chatbot</div> /{" "}
            <div>E-Commerce</div>
          </div>

          <div className="Bold">#NodeJS &nbsp;#Vue &nbsp;#Dialogflow</div>
        </Box>
      </div>

      <Box title="Skills" className={classes.Skills}>
        <div>
          <div className="RedHightLight">Programming</div>
          <div className={classes.TwoColumnFlex}>
            <div className="Bold">Intermediate</div>
            <div>
              HTML,&nbsp; CSS,&nbsp; SCSS,&nbsp; ES6,&nbsp; NodeJS,&nbsp; React
            </div>
          </div>
          <div className={classes.TwoColumnFlex}>
            <div className="Bold">Beginner</div>
            <div>
              Vue,&nbsp; Electron,&nbsp; PHP,&nbsp; SQL,&nbsp; C#,&nbsp; Python
            </div>
          </div>
        </div>
        <div>
          <div className="RedHightLight">Other</div>
          <div className="Detail">
            <div>UX/UI Design,</div>&nbsp; <div>Design Thinking,</div>&nbsp;
            Arduino,&nbsp; Dialogflow,&nbsp; <div>Adobe Illustrator,</div>&nbsp;{" "}
            <div>Adobe XD</div>
          </div>
        </div>
      </Box>
      <div className={classes.TwoColumnGrid}>
        <Box title="Languages" className={classes.Languages}>
          <div>
            <div className="RedBold">Thai</div>Native
          </div>
          <div>
            <div className="RedBold">English</div>Intermediate
          </div>
        </Box>
        <Box title="Interests" className="Detail">
          Backend,&nbsp; Mobile Application,&nbsp; Chatbot,&nbsp;{" "}
          <div>Machine Learning</div>
        </Box>
      </div>
    </div>
  );
};

export default About;
