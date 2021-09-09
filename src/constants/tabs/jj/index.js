import ifOnly from './ifOnly';

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
}

export default jj;
