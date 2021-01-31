import { action } from 'typesafe-actions';
import { ACTIONS_CONSTANT } from './constants';

export const setIsDarkModeAction = (
  isDarkMode: boolean,
) => action(ACTIONS_CONSTANT.SET_IS_DARK_MODE, isDarkMode);

export const setIsImgLoadedAction = (
  isImgLoaded: boolean,
) => action(ACTIONS_CONSTANT.SET_IS_IMG_LOADED, isImgLoaded);
