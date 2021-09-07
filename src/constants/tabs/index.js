import maydayTabData from './mayday/index';
import piaTabData from './pia/index';
import weibirdTabData from './weibird/index';
import yogaTabData from './yoga/index';

export const tabData = {
  ...maydayTabData,
  ...piaTabData,
  ...weibirdTabData,
  ...yogaTabData,
};

export const tablist = Object.keys(tabData);
