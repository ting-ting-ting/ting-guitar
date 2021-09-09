import angel from './angel';
import matchesHeaven from './matchesHeaven';

const singerInfoData = {
  singer: '自己的想法',
  singerId: 'self',
};

const self = {
  'self-1': {
    id: 'self-1',
    ...singerInfoData,
    ...angel,
  },
  'self-2': {
    id: 'self-2',
    ...singerInfoData,
    ...matchesHeaven,
  },
}

export default self;
