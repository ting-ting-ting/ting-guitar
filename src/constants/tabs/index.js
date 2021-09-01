import maydayTabData from './mayday';
import piaTabData from './pia';

export const tabData = {
  ...maydayTabData,
  ...piaTabData,
};

export const tablist = Object.keys(tabData);
