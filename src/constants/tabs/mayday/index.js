import angel from './angel';
import bestDay from './bestDay';

const singerInfoData = {
  singer: '五月天',
  singerId: 'mayday',
};

const mayday = {
  'mayday-1': {
    id: 'mayday-1',
    ...singerInfoData,
    ...angel,
  },
  'mayday-2': {
    id: 'mayday-2',
    ...singerInfoData,
    ...bestDay,
  },
}

export default mayday;
