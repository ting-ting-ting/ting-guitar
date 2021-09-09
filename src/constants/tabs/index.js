import self from './self/index';
import mayday from './mayday/index';
import piaTab from './pia/index';
import weibird from './weibird/index';
import sodagreen from './sodagreen/index';
import yoga from './yoga/index';
import ronghao from './ronghao/index';
import movie from './movie/index';

export const tabData = {
  ...self,
  ...mayday,
  ...piaTab,
  ...weibird,
  ...sodagreen,
  ...yoga,
  ...ronghao,
  ...movie,
};

export const tablist = Object.keys(tabData);
