import iThinkYou from './iThinkYou';

const singerInfoData = {
  singer: '蘇打綠',
  singerId: 'sodagreen',
};

const sodagreen = {
  'sodagreen-1': {
    id: 'sodagreen-1',
    ...singerInfoData,
    ...iThinkYou,
  },
}

export default sodagreen;
