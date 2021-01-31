export type TDevice = 'mobile' | 'tablet' | 'desktop' | undefined;

export interface IDeviceInfoStore {
  device: TDevice;
  screenWidth: number | undefined;
  screenHeight: number | undefined;
  scrollY: number | undefined;
}
