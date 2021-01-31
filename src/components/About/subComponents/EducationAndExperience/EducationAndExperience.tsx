/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import { FC } from 'react';
import { map } from 'lodash/fp';
import {
  Box, Bullet, List, Link
} from 'components/UI';
import content from 'contents/about.json';
import { ICommonObject } from 'types/common';
import styles from './EducationAndExperience.scss';

interface IEducationAndExperienceProps {
  type: 'education' | 'experience';
}

const EducationAndExperience: FC<IEducationAndExperienceProps> = ({
  type
}) => {
  const {
    title: typeTitle,
    content: typeContent
  } = (content as ICommonObject)[type];

  return (
    <Box
      title={typeTitle}
      containerClassName={styles.container}
    >
      {
        map(({
          year, title, location, locationLink, bullet, list
        }) => (
          <div key={title} className={styles.item}>
            <div className="color-primary font-bold">{year}</div>
            <div>
              <div className="font-bold">{title}</div>
              <a
                href={locationLink}
                target="_blank"
                rel="noreferrer"
              >
                {location}
              </a>
            </div>
            {bullet && (
              <div className={styles.bullet}>
                {map((text) => (
                  <Bullet key={text}>
                    {text.to ? <Link to={text.to} title={text.title} /> : text}
                  </Bullet>
                ), bullet)}
              </div>
            )}
            {list && (
              <List
                data={list}
                type="hash"
                className="font-bold"
              />
            )}
          </div>
        ), typeContent)
      }
    </Box>
  );
};

export default EducationAndExperience;
