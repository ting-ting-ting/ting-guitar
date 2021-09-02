import maydayTabData from './mayday/index';
import piaTabData from './pia/index';
import weibirdTabData from './weibird/index';

export const tabData = {
  ...maydayTabData,
  ...piaTabData,
  ...weibirdTabData,
};

export const tablist = Object.keys(tabData);
