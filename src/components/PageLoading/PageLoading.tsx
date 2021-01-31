import { FC } from 'react';
import { LoadingDot } from 'components/UI';
import { usePage } from 'hooks';
import styleVariables from 'constants/styleVariables';
import styles from './PageLoading.scss';

const PageLoading: FC = () => {
  const { isImgLoaded, isDarkMode } = usePage();

  return (
    <div
      className={styles.pageLoading}
      style={{
        visibility: isImgLoaded ? 'hidden' : 'visible',
        opacity: isImgLoaded ? 0 : 1,
        backgroundColor: isDarkMode
          ? styleVariables.darkModeColorBackground : styleVariables.colorBackground,
      }}
    >
      <LoadingDot />
    </div>
  );
};

export default PageLoading;
