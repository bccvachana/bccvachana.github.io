import store from 'store';
import {
  setDeviceAction,
  setScreenWidthAction,
  setScreenHeightAction,
  setScrollYAction
} from './actions';
import { TDevice } from './types';

export const setDevice = (device: TDevice) => {
  store.dispatch(setDeviceAction(device));
};

export const setScreenWidth = (width: number) => {
  store.dispatch(setScreenWidthAction(width));
};

export const setScreenHeight = (height: number) => {
  store.dispatch(setScreenHeightAction(height));
};

export const setScrollY = (scroll: number) => {
  store.dispatch(setScrollYAction(scroll));
};
