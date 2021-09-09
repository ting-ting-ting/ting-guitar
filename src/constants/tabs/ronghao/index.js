import kingOfComedy from './kingOfComedy';
import whiteLi from './whiteLi';
import notMatch from './notMatch';

const singerInfoData = {
  singer: '李榮浩',
  singerId: 'ronghao',
};

const ronghao = {
  'ronghao-1': {
    id: 'ronghao-1',
    ...singerInfoData,
    ...kingOfComedy,
  },
  'ronghao-2': {
    id: 'ronghao-2',
    ...singerInfoData,
    ...whiteLi,
  },
  'ronghao-3': {
    id: 'ronghao-3',
    ...singerInfoData,
    ...notMatch,
  },
}

export default ronghao;
