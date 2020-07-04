import React from "react";
import classes from "./Achievements.module.scss";
import Box from "../UI/Box/Box";

const Achievements = (props) => {
  return (
    <div id="Achievements" className={classes.Achievements}>
      <div className={classes.Title}>Achievements</div>
      <Box>
        <div className="RedHightLight">Competition</div>
      </Box>
      <Box>
        <div className="RedHightLight">Academic</div>
        <div className={classes.DetailContainer}>
          <div className={classes.RedBullet} />
          <div className="Detail">
            <div className="Bold">Petchra Pra Jom Klao Scholarship</div> &nbsp;
            <div>|&nbsp; KMUTT</div>
          </div>
        </div>
        <div className={classes.DetailContainer}>
          <div className={classes.RedBullet} />
          <div className="Detail">
            <div className="Bold">Outstanding Academic Performance</div> in the
            first year with GPAX 3.92 &nbsp;
            <div>|&nbsp; KMUTT</div>
          </div>
        </div>
        <div className={classes.DetailContainer}>
          <div className={classes.RedBullet} />
          <div className="Detail">
            <div className="Bold">Outstanding Academic Performance</div> in the
            second year with GPAX 3.91 &nbsp;
            <div>|&nbsp; KMUTT</div>
          </div>
        </div>
        <div className={classes.DetailContainer}>
          <div className={classes.RedBullet} />
          <div className="Detail">
            <div className="Bold">Outstanding Academic Performance</div> in the
            third year with GPAX 3.90 &nbsp;
            <div>|&nbsp; KMUTT</div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Achievements;
