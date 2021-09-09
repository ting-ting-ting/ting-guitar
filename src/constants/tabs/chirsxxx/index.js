import can from './can';

const singerInfoData = {
  singer: '廖文強',
  singerId: 'chirsxxx',
};

const chirsxxx = {
  'chirsxxx-1': {
    id: 'chirsxxx-1',
    ...singerInfoData,
    ...can,
  },
}

export default chirsxxx;
