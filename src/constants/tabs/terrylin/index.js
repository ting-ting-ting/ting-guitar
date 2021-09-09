import phoenix from './phoenix';

const singerInfoData = {
  singer: '林志炫',
  singerId: 'terrylin',
};

const terrylin = {
  'terrylin-1': {
    id: 'terrylin-1',
    ...singerInfoData,
    ...phoenix,
  },
}

export default terrylin;
