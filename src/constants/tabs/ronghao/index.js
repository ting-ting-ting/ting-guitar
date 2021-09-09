import kingOfComedy from './kingOfComedy';
import whiteLi from './whiteLi';

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
}

export default ronghao;
