/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import { map } from 'lodash/fp';
import { Box, HightLightTitle, List } from 'components/UI';
import content from 'contents/about.json';
import { ICommonObject } from 'types/common';
import { EducationAndExperience } from './subComponents';
import styles from './About.scss';

const About = () => {
  const { skills, languages, interests } = content as ICommonObject;
  return (
    <div id="About" className={styles.about}>
      <EducationAndExperience type="education" />
      <EducationAndExperience type="experience" />
      <Box title={skills.title} containerClassName={styles.skills}>
        <div>
          <HightLightTitle>{skills.programming.title}</HightLightTitle>
          {map(({ title, list }) => (
            <div key={title} className={styles.twoColumn}>
              <div className={`font-bold ${styles.mainColumn}`}>{title}</div>
              <List data={list} type="comma" />
            </div>
          ), skills.programming.content)}
        </div>
        <div>
          <HightLightTitle>{skills.other.title}</HightLightTitle>
          <div><List data={skills.other.list} type="comma" /></div>
        </div>
      </Box>
    </div>
  );
};

export default About;
