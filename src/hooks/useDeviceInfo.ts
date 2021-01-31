import { useSelector } from 'react-redux';
import { IRootStore } from 'store';
import { IDeviceInfoStore } from 'store/deviceInfo/types';

const useDeviceInfo = (): IDeviceInfoStore => useSelector((state: IRootStore) => state.deviceInfo);

export default useDeviceInfo;
