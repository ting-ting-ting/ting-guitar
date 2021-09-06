import {
  NUMBER_ONE,
  NUMBER_TWO,
  NUMBER_THREE,
  NUMBER_FOUR,
  NUMBER_FIVE,
  NUMBER_SIX,
  NUMBER_SEVEN,
} from '../../number';
import {
  TYPE_MAJOR,
  TYPE_MINOR,
  TYPE_MINOR7,
  TYPE_MAJOR_ADD9,
} from '../../type';
import {
  NOTE_NAME_A,
} from '../../noteName';

const aAdd9 = {
  number: NUMBER_ONE,
  type: TYPE_MAJOR_ADD9,
};

const someoneWaitingForMeTabData = {
  name: '有人在等我',
  singer: '韋禮安',
  singerId: 'weibird',
  originKey: NOTE_NAME_A,
  play: NOTE_NAME_A,
  capo: 0,
  video: '',
  samples: [{
    name: 'Aadd9',
    muted: [4, 6],
    opened: [1, 5],
    frets: [{
      position: [],
    }, {
      position: [2],
    }, {
      position: [],
    }, {
      position: [3],
    }],
  }, {
    name: 'Asus2',
    muted: [6],
    opened: [1, 2, 5],
    frets: [{
      position: [],
    }, {
      position: [3, 4],
    }, {
      position: [],
    }],
  }, {
    name: 'F#m7add11',
    muted: [4],
    opened: [1, 5],
    frets: [{
      position: [],
    }, {
      position: [2, 6],
    }, {
      position: [],
    }, {
      position: [3],
    }],
  }, {
    name: 'F#m7add11*',
    opened: [1, 2, 5],
    frets: [{
      position: [],
    }, {
      position: [3, 4, 6],
    }, {
      position: [],
    }],
  }, {
    name: 'Dsus2',
    muted: [5, 6],
    opened: [1, 4],
    frets: [{
      position: [],
    }, {
      position: [3],
    }, {
      position: [2],
    }],
  }, {
    name: 'Dmaj9',
    muted: [5, 6],
    opened: [1, 4],
    frets: [{
      position: [],
    }, {
      position: [2, 3],
    }, {
      position: [],
    }],
  }, {
    name: 'Bm7add11',
    muted: [6],
    opened: [1, 4],
    frets: [{
      position: [],
    }, {
      position: [3, 5],
    }, {
      position: [2],
    }],
  }],
  lines: [

  ],
};

export default someoneWaitingForMeTabData;