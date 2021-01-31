import { FC } from 'react';
import styleVariables from 'constants/styleVariables';
import styles from './LoadingDot.scss';

interface ILoadingDotsProps {
  width?: string,
  color?: string
}

const LoadingDot: FC<ILoadingDotsProps> = ({
  width = '8rem',
  color = styleVariables.colorPrimary
}) => (
  <div
    className={styles.container}
    style={{
      width,
      height: width,
    }}
  >
    <div style={{ backgroundColor: color }} />
    <div style={{ backgroundColor: color }} />
    <div style={{ backgroundColor: color }} />
  </div>
);

export default LoadingDot;
