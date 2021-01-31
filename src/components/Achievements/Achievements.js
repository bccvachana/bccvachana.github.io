import React from 'react';
import classes from './Achievements.module.scss';
import Box from '../UI/Box/Box';
import Bullet from '../UI/Bullet/Bullet';

import ymc1 from '../../assets/Achievements/ymc1.jpg';
import ymc2 from '../../assets/Achievements/ymc2.jpg';
import total1 from '../../assets/Achievements/total1.jpg';
import total2 from '../../assets/Achievements/total2.jpg';
import ywc1 from '../../assets/Achievements/ywc1.jpg';
import ywc2 from '../../assets/Achievements/ywc2.jpg';

const competition = [
  {
    title: 'The Winner',
    detail: '17th Young Webmaster Camp',
    img1: ywc1,
    img2: ywc2,
  },
  {
    title: 'Finalist',
    detail: 'TOTAL Startupper of the Year',
    img1: total1,
    img2: total2,
  },
  {
    title: 'Finalist',
    detail: 'Young Makers Contest 3',
    img1: ymc1,
    img2: ymc2,
  },
];

const Achievements = (props) => {
  return (
    <div id='Achievements' className={classes.Achievements}>
      <div className={classes.Title}>Achievements</div>
      <Box>
        <div className='RedHightLight'>Competition</div>
        {competition.map(({ title, detail, img1, img2 }, index) => (
          <div className={classes.Competition} key={detail}>
            <Bullet className={classes.DetailContainer}>
              <div className='Bold'>{title}</div>
              {detail}
            </Bullet>
            <div className={classes.ImgContainer}>
              <img src={img1} alt={`${title}-img1`} />
              <img src={img2} alt={`${title}-img2`} />
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Achievements;
