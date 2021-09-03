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
    frets: [{
      position: [],
    }, {
      position: [2],
    }, {
      position: [],
    }, {
      position: [3],
    }],
  }],
  lines: [

  ],
};

export default someoneWaitingForMeTabData;