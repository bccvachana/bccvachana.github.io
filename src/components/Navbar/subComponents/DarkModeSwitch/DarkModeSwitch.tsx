import { FC } from 'react';
import { usePage } from 'hooks';
import { setIsDarkMode } from 'store/page/func';
import styles from './DarkModeSwitch.scss';

const DarkModeSwitch: FC = () => {
  const { isDarkMode } = usePage();

  return (
    <div
      className={styles.darkModeSwitch}
      onClick={() => {
        setIsDarkMode(!isDarkMode);
      }}
    >
      <div className={styles.toggleSwitchContainer}>
        <div
          className={styles.toggleSwitch}
          style={{
            transform: isDarkMode ? 'translateX(100%)' : 'translateX(0%)',
          }}
        />
      </div>
      <div className={`font-bold ${styles.label}`}>
        Dark Mode
      </div>
    </div>
  );
};

export default DarkModeSwitch;
