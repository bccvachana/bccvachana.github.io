import { ActionType } from 'typesafe-actions';
import { IDeviceInfoStore, TDevice } from './types';
import * as actions from './actions';
import { ACTIONS_CONSTANT } from './constants';

export type TDeviceInfoActions = ActionType<typeof actions>;

const initState: IDeviceInfoStore = {
  device: undefined,
  screenWidth: undefined,
  screenHeight: undefined,
  scrollY: undefined
};

export const deviceInfoReducer = (
  state: IDeviceInfoStore = initState,
  action: TDeviceInfoActions,
): IDeviceInfoStore => {
  switch (action.type) {
    case ACTIONS_CONSTANT.SET_DEVICE:
      return {
        ...state,
        device: action.payload as TDevice,
      };
    case ACTIONS_CONSTANT.SET_SCREEN_WIDTH:
      return {
        ...state,
        screenWidth: action.payload as number
      };
    case ACTIONS_CONSTANT.SET_SCREEN_HEIGHT:
      return {
        ...state,
        screenHeight: action.payload as number
      };
    case ACTIONS_CONSTANT.SET_SCROLL_Y:
      return {
        ...state,
        scrollY: action.payload as number
      };
    default:
      return state;
  }
};
