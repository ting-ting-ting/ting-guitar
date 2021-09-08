import newsletterSong from './newsletterSong';

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
}

export default pia;
