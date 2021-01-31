import { FC, ReactNode } from 'react';
import styles from './HightLightTitle.scss';

interface IHightLightTitleProps {
  children: ReactNode,
}

const HightLightTitle: FC<IHightLightTitleProps> = ({ children }) => (
  <div className={`font-bold ${styles.container}`}>
    {children}
  </div>
);

export default HightLightTitle;
