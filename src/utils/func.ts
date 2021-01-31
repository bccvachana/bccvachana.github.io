import { map } from 'lodash/fp';

export const mapWithIndex = (map as unknown | any).convert({ cap: false });

export const delayFunc = async (time: number) => new Promise((
  resolve,
) => {
  const timer = setTimeout(() => {
    resolve(undefined);
    clearTimeout(timer);
  }, time);
});
