import angelTabData from './angel';

const singerInfoData = {
  singer: '五月天',
  singerId: 'mayday',
};

const maydayTabData = {
  'mayday-1': {
    id: 'mayday-1',
    ...singerInfoData,
    ...angelTabData,
  },
}

export default maydayTabData;
