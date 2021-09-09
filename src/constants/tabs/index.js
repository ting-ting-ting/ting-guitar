import self from './self/index';
import mayday from './mayday/index';
import piaTab from './pia/index';
import weibird from './weibird/index';
import sodagreen from './sodagreen/index';
import yoga from './yoga/index';

export const tabData = {
  ...self,
  ...mayday,
  ...piaTab,
  ...weibird,
  ...sodagreen,
  ...yoga,
};

export const tablist = Object.keys(tabData);
