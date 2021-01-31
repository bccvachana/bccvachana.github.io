import { action } from 'typesafe-actions';
import { ACTIONS_CONSTANT } from './constants';
import { TDevice } from './types';

export const setDeviceAction = (
  device: TDevice,
) => action(ACTIONS_CONSTANT.SET_DEVICE, device);

export const setScreenWidthAction = (
  width: number,
) => action(ACTIONS_CONSTANT.SET_SCREEN_WIDTH, width);

export const setScreenHeightAction = (
  height: number,
) => action(ACTIONS_CONSTANT.SET_SCREEN_HEIGHT, height);

export const setScrollYAction = (
  scroll: number,
) => action(ACTIONS_CONSTANT.SET_SCROLL_Y, scroll);
