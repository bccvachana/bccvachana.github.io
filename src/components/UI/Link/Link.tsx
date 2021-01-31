import { FC } from 'react';
import linkIcon from 'assets/icon/link.svg';
import styles from './Link.scss';

interface ILinkProps {
  to: string,
  title: string,
}

const Link: FC<ILinkProps> = ({ to, title }) => (
  <div className={styles.link}>
    <a href={to} target="_blank" rel="noopener noreferrer">
      <img src={linkIcon} alt="linkIcon" />
      {title}
    </a>
  </div>
);

export default Link;
