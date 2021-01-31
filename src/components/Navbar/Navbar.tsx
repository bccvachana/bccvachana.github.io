import { FC, useState } from 'react';
import { PageContainer } from 'components/UI';
import { useDeviceInfo } from 'hooks';
import {
  Logo, Links, DarkModeSwitch, Hamburger
} from './subComponents';
import styles from './Navbar.scss';

const Navbar: FC = () => {
  const { device } = useDeviceInfo();
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <PageContainer
        containerClassName={`bg-color-element ${styles.container}`}
        bodyClassName={styles.body}
      >
        <Logo />
        {device !== 'mobile' ? (
          <div className={styles.menuTabletDesktop}>
            <Links />
            <div className={styles.line} />
            <DarkModeSwitch />
          </div>
        ) : (
          <>
            <div className={styles.menuMobile}>
              <Hamburger
                isDropdown={isDropdown}
                setIsDropdown={setIsDropdown}
              />
            </div>
            <div
              className={styles.dropdown}
              style={{ transform: `translateY(${isDropdown ? '0' : '-100%'})` }}
            >
              <PageContainer
                containerClassName="bg-color-element"
                bodyClassName={styles.dropdownBody}
              >
                <Links />
                <DarkModeSwitch />
              </PageContainer>
              <div className={`bg-color-shadow ${styles.shadow}`} />
            </div>
          </>
        )}
      </PageContainer>
      <div className={`bg-color-shadow ${styles.shadow}`} />
    </div>
  );
};

export default Navbar;
