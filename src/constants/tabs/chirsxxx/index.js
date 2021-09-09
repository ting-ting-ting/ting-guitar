import can from './can';
import secondSong from './secondSong';
import hundredWishes from './hundredWishes';

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
  'chirsxxx-2': {
    id: 'chirsxxx-2',
    ...singerInfoData,
    ...secondSong,
  },
  'chirsxxx-3': {
    id: 'chirsxxx-3',
    ...singerInfoData,
    ...hundredWishes,
  },
}

export default chirsxxx;
