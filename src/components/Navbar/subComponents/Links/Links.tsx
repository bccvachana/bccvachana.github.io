/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { Link } from 'react-scroll';
import { map } from 'lodash/fp';
import styleVariables from 'constants/styleVariables';
import styles from './Links.scss';

const navbarLinks = ['Home', 'About', 'Achievements', 'Projects'];

const Links: FC = () => (
  <>
    {map((link: string) => (
      <Link
        to={link}
        spy
        smooth
        duration={500}
        offset={styleVariables.scrollOffset}
        className={`font-bold ${styles.link}`}
        activeClass={styles.active}
        key={link}
      >
        {link}
      </Link>
    ), navbarLinks)}
  </>
);

export default Links;
