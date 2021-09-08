import help from './help';

const singerInfoData = {
  singer: '林宥嘉',
  singerId: 'yoga',
};

const yoga = {
  'yoga-1': {
    id: 'yoga-1',
    ...singerInfoData,
    ...help,
  },
}

export default yoga;
