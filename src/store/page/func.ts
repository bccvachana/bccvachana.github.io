import store from 'store';
import {
  setIsDarkModeAction,
  setIsImgLoadedAction
} from './actions';

export const setIsDarkMode = (isDarkMode: boolean) => {
  store.dispatch(setIsDarkModeAction(isDarkMode));
};

export const setIsImgLoaded = (isImgLoaded: boolean) => {
  store.dispatch(setIsImgLoadedAction(isImgLoaded));
};
