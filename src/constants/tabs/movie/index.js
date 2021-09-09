import startOfSomethingNew from './startOfSomethingNew';

const singerInfoData = {
  singer: '電影主題曲',
  singerId: 'movie',
};

const movie = {
  'movie-1': {
    id: 'movie-1',
    ...singerInfoData,
    ...startOfSomethingNew,
  },
}

export default movie;
