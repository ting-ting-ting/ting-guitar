import newsletterSong from './newsletterSong';
import followPath from './followPath';
import emotional from './emotional';

const singerInfoData = {
  singer: 'PiA',
  singerId: 'pia',
};

const pia = {
  'pia-1': {
    id: 'pia-1',
    ...singerInfoData,
    ...newsletterSong,
  },
  'pia-2': {
    id: 'pia-2',
    ...singerInfoData,
    ...followPath,
  },
  'pia-3': {
    id: 'pia-3',
    ...singerInfoData,
    ...emotional,
  },
}

export default pia;
