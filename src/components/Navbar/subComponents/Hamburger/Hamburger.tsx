import { FC, Dispatch, SetStateAction } from 'react';
import { mapWithIndex } from 'utils/func';
import styles from './Hamburger.scss';

interface IHamburgerProps {
  isDropdown: boolean,
  setIsDropdown: Dispatch<SetStateAction<boolean>>
}

const Hamburger: FC<IHamburgerProps> = ({
  isDropdown,
  setIsDropdown
}) => (
  <div
    className={`${styles.hamburger} ${isDropdown ? styles.active : ''}`}
    onClick={() => {
      setIsDropdown(!isDropdown);
    }}
  >
    {mapWithIndex((_: any, i: number) => (
      <div
        className={styles.bar}
        key={`bar${i}`}
      />
    ), [...Array(3)])}
  </div>
);

export default Hamburger;
