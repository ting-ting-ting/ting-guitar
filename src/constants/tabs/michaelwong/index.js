import agreement from './agreement';

const singerInfoData = {
  singer: '光良',
  singerId: 'michaelwong',
};

const michaelwong = {
  'michaelwong-1': {
    id: 'michaelwong-1',
    ...singerInfoData,
    ...agreement,
  },
}

export default michaelwong;
