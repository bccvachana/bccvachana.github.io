import {
  compose, toPairs, reduce, replace, toNumber
} from 'lodash/fp';
import { ICommonObject } from 'types/common';
import styleVariables from 'styles/_var.scss';
import colorStyleVariables from 'styles/_colors.scss';
import breakpointStyleVariables from 'styles/_breakpoints.scss';

const normalizeStyleVariables = (
  variables: ICommonObject
): ICommonObject => compose(
  reduce((acc: ICommonObject, [key, value]: string[]) => {
    acc[key] = toNumber(replace(/px/, '', value));
    return acc;
  }, {}),
  toPairs
)(variables);

export default {
  ...normalizeStyleVariables(styleVariables),
  ...colorStyleVariables,
  ...normalizeStyleVariables(breakpointStyleVariables)
} as ICommonObject;
