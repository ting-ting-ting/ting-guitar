import help from './help';
import spoiledInnocence from './spoiledInnocence';
import adultFairyTale from './adultFairyTale';

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
  'yoga-3': {
    id: 'yoga-3',
    ...singerInfoData,
    ...adultFairyTale,
  },
}

export default yoga;
