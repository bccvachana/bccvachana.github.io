/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { map } from 'lodash/fp';
import profileImg from 'assets/profileImg.jpg';
import icon from 'assets/icon';
import content from 'contents/header.json';
import { ICommonObject } from 'types/common';
import styles from './Header.scss';

const Header: FC = () => (
  <div id="Home" className={styles.header}>
    <img className={styles.image} src={profileImg} alt="profileImg" />
    <div className={styles.content}>
      <div className="text-lg">
        {content.hello}
      </div>
      <div className={`text-xl font-bold ${styles.firstName}`}>
        {content.firstName}
      </div>
      <div className={`text-xl font-bold ${styles.lastName}`}>
        {content.lastName}
      </div>
      <div className="text-lg font-bold color-primary">
        {content.position}
      </div>
      <div className={styles.detail}>
        {content.detail}
      </div>
      <div className={styles.contact}>
        {map(({ type, href, target }) => (
          <a href={href} target={target} key={type}>
            <img src={(icon as ICommonObject)[type]} alt={type} />
          </a>
        ), content.contact)}
      </div>
    </div>
  </div>
);

export default Header;
