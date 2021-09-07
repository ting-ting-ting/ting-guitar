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
  TYPE_MAJOR_ADD9,
  TYPE_MINOR,
  TYPE_MINOR7,
  TYPE_MINOR7_ADD11,
} from '../../type';
import {
  NOTE_NAME_A,
} from '../../noteName';

const aAdd9 = {
  number: NUMBER_ONE,
  type: TYPE_MAJOR_ADD9,
};

const fSharpM7Add11 = {
  number: NUMBER_SIX,
  type: TYPE_MINOR7_ADD11,
};

const someoneWaitingForMeTabData = {
  name: '有人在等我',
  originKey: NOTE_NAME_A,
  play: NOTE_NAME_A,
  capo: 0,
  video: '',
  samples: [{
    name: 'Aadd9',
    muted: [4, 6],
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
    frets: [{
      position: [],
    }, {
      position: [3, 4],
    }, {
      position: [],
    }],
  }, {
    name: '#Fm7add11',
    muted: [4],
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
    name: '#Fm7add11*',
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
    frets: [{
      position: [],
    }, {
      position: [3, 5],
    }, {
      position: [2],
    }],
  }],
  lines: [
    {
      title: '前奏',
      measures: [
        [
          aAdd9,
          null,
          null,
          null,
        ],
        [
          fSharpM7Add11,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
        ],
      ],
    },
  ],
};

export default someoneWaitingForMeTabData;