import angel from './angel';

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
}

export default mayday;
