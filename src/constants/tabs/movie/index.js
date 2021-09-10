import startOfSomethingNew from './startOfSomethingNew';
import southOfCountry from './southOfCountry';

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
  'movie-2': {
    id: 'movie-2',
    ...singerInfoData,
    ...southOfCountry,
  },
}

export default movie;
