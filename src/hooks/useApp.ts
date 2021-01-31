/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { isNil, toString } from 'lodash/fp';
import {
  setDevice, setScreenHeight, setScreenWidth, setScrollY
} from 'store/deviceInfo/func';
import { TNotReturnFunction } from 'types/common';
import { usePage } from 'hooks';
import { setIsDarkMode } from 'store/page/func';
import styleVariables from 'constants/styleVariables';

const checkDevice = (): 'desktop' | 'tablet' | 'mobile' => {
  const windowWidth = window.innerWidth;
  if (windowWidth > styleVariables.screenSmMax) return 'desktop';
  if (windowWidth > styleVariables.screenXsMax) return 'tablet';
  return 'mobile';
};

const useApp: TNotReturnFunction = () => {
  const { isDarkMode } = usePage();

  useEffect(() => {
    setDevice(checkDevice());
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    setScrollY(0);

    window.onscroll = () => {
      if (document.body.style.position !== 'fixed') {
        setScrollY(window.scrollY);
      }
    };
    window.onresize = () => {
      setDevice(checkDevice());
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      setScrollY(window.scrollY);
    };

    if (isNil(localStorage.getItem('vachanaIsDarkMode'))) {
      setIsDarkMode(window.matchMedia
        && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      setIsDarkMode(localStorage.getItem('vachanaIsDarkMode') === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('vachanaIsDarkMode', toString(isDarkMode));
    document.body.className = isDarkMode ? 'darkMode' : '';
  }, [isDarkMode]);
};

export default useApp;
