import { combineReducers, createStore } from 'redux';
import { IPageStore } from './page/types';
import { pageReducer } from './page/reducer';
import { IDeviceInfoStore } from './deviceInfo/types';
import { deviceInfoReducer } from './deviceInfo/reducer';

export interface IRootStore {
  page: IPageStore;
  deviceInfo: IDeviceInfoStore;
}

const store = createStore<IRootStore, any, any, any>(
  combineReducers({
    page: pageReducer,
    deviceInfo: deviceInfoReducer
  }),
);

export default store;
