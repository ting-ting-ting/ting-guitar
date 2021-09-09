import ifOnly from './ifOnly';
import practiceLove from './practiceLove';

const singerInfoData = {
  singer: '林俊傑',
  singerId: 'jj',
};

const jj = {
  'jj-1': {
    id: 'jj-1',
    ...singerInfoData,
    ...ifOnly,
  },
  'jj-2': {
    id: 'jj-2',
    ...singerInfoData,
    ...practiceLove,
  },
}

export default jj;
