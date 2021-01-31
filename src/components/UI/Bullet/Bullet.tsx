import { FC, ReactNode } from 'react';
import styles from './Bullet.scss';

interface IBulletProps {
  className?: string;
  children?: ReactNode;
}

const Bullet: FC<IBulletProps> = ({
  className,
  children
}) => (
  <div className={`${styles.container} ${className || ''}`}>
    <div className={styles.bullet} />
    <div>{children}</div>
  </div>
);

export default Bullet;
