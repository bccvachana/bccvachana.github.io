import { ActionType } from 'typesafe-actions';
import { IPageStore } from './types';
import * as actions from './actions';
import { ACTIONS_CONSTANT } from './constants';

export type TPageActions = ActionType<typeof actions>;

const initState: IPageStore = {
  isDarkMode: false,
  isImgLoaded: false
};

export const pageReducer = (
  state: IPageStore = initState,
  action: TPageActions,
): IPageStore => {
  switch (action.type) {
    case ACTIONS_CONSTANT.SET_IS_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case ACTIONS_CONSTANT.SET_IS_IMG_LOADED:
      return {
        ...state,
        isImgLoaded: action.payload
      };
    default:
      return state;
  }
};
