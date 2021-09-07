import helpTabData from './help';

const singerInfoData = {
  singer: '林宥嘉',
  singerId: 'yoga',
};

const yogaTabData = {
  'yoga-1': {
    id: 'yoga-1',
    ...singerInfoData,
    ...helpTabData,
  },
}

export default yogaTabData;
