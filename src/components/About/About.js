import React from "react";
import classes from "./About.module.scss";
import Box from "../UI/Box/Box";
import Bullet from "../UI/Bullet/Bullet";
import List from "../UI/List/List";
import Link from "../UI/Link/Link";

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

        <Box title="Experience" className={classes.Experience}>
          <div className={classes.TwoColumnFlex}>
            <div className="RedBold">Jan - May 2020</div>
            <div>
              <div className="Bold">Teaching Assistant</div>
              <Bullet>@KMUTT</Bullet>
              <Bullet>Web Programming</Bullet>
              <List
                lists={["HTML", "CSS", "PHP", "SQL"]}
                className={classes.List}
              />
            </div>
          </div>
          <div className={classes.TwoColumnFlex}>
            <div className="RedBold">Jun - Jul 2019</div>
            <div>
              <div className="Bold">Developer Intern</div>
              <Bullet>@Boonmee Lab</Bullet>
              <Bullet>
                <div className="Detail">
                  <div>Data Visualization</div> / <div>Chatbot</div> /{" "}
                  <div>E-Commerce</div>
                </div>
              </Bullet>
              <Bullet>
                <Link
                  to="https://medium.com/@vachanachongrujipinyo/ประสบการณ์ฝึกงาน-เปลี่ยนชีวิต-ที่-boonmee-lab-70b568f95f8e"
                  name="medium"
                />
              </Bullet>
              <List
                lists={["NodeJS", "Vue", "Dialogflow"]}
                className={classes.List}
              />
            </div>
          </div>
        </Box>
      </div>

      <Box title="Skills" containerClassName={classes.Skills}>
        <div>
          <div className="RedHightLight">Programming</div>
          <div className={classes.TwoColumnFlex}>
            <div className="Bold">Intermediate</div>
            <List
              comma
              lists={["HTML", "CSS", "SCSS", "ES6", "NodeJS", "React"]}
            />
          </div>
          <div className={classes.TwoColumnFlex}>
            <div className="Bold">Beginner</div>
            <List
              comma
              lists={["Vue", "Electron", "PHP", "SQL", "C#", "Python"]}
            />
          </div>
        </div>
        <div>
          <div className="RedHightLight">Other</div>
          <List
            comma
            lists={[
              "UX/UI Design",
              "Design Thinking",
              "Arduino",
              "Dialogflow",
              "Adobe Illustrator",
              "Adobe XD",
            ]}
          />
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
        <Box title="Interests">
          <List
            comma
            lists={[
              "Backend",
              "Mobile Application",
              "Chatbot",
              "Machine Learning",
            ]}
          />
        </Box>
      </div>
    </div>
  );
};

export default About;
