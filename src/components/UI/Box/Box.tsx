import { FC, CSSProperties, ReactNode } from 'react';
import { TNotReturnFunction } from 'types/common';
import styles from './Box.scss';

interface IBoxProps {
  title?: string,
  className?: string,
  containerClassName?: string,
  style?: CSSProperties,
  onClick?: TNotReturnFunction,
  children?: ReactNode,
}

const Box: FC<IBoxProps> = ({
  title,
  className,
  containerClassName,
  style,
  onClick,
  children,
}) => (
  <div
    className={`bg-color-element ${styles.box} ${
      className || ''
    }`}
    style={style}
    onClick={onClick}
  >
    {title && <div className={`text-lg font-bold ${styles.title}`}>{title}</div>}
    <div className={containerClassName || ''}>
      {children}
    </div>
  </div>
);

export default Box;
