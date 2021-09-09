import help from './help';
import spoiledInnocence from './spoiledInnocence';

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
  'yoga-2': {
    id: 'yoga-2',
    ...singerInfoData,
    ...spoiledInnocence,
  },
}

export default yoga;
