import maydayTabData from './mayday/index';
import piaTabData from './pia/index';

export const tabData = {
  ...maydayTabData,
  ...piaTabData,
};

export const tablist = Object.keys(tabData);
