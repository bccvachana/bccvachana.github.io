import { FC, ReactNode, CSSProperties } from 'react';
import styles from './PageContainer.scss';

interface IPageContainerProps {
  children: ReactNode;
  containerClassName?: string;
  containerStyle?: CSSProperties;
  bodyClassName?: string;
  bodyStyle?: CSSProperties;
}

const PageContainer: FC<IPageContainerProps> = ({
  children,
  containerClassName,
  containerStyle,
  bodyClassName,
  bodyStyle
}) => (
  <>
    <div
      className={`${styles.container} ${containerClassName || ''}`}
      style={containerStyle}
    >
      <div
        className={`${styles.body} ${bodyClassName || ''}`}
        style={bodyStyle}
      >
        {children}
      </div>
    </div>
  </>
);

export default PageContainer;
