import { nth } from 'lodash';
import {
  NUMBER_ONE,
  NUMBER_ONE_SHARP,
  NUMBER_TWO_FLAT,
  NUMBER_TWO,
  NUMBER_TWO_SHARP,
  NUMBER_THREE_FLAT,
  NUMBER_THREE,
  NUMBER_FOUR,
  NUMBER_FOUR_SHARP,
  NUMBER_FIVE_FLAT,
  NUMBER_FIVE,
  NUMBER_FIVE_SHARP,
  NUMBER_SIX_FLAT,
  NUMBER_SIX,
  NUMBER_SIX_SHARP,
  NUMBER_SEVEN_FLAT,
  NUMBER_SEVEN,
} from '../constants/number';
import {
  NOTE_NAME_C,
  NOTE_NAME_C_SHARP,
  NOTE_NAME_D_FLAT,
  NOTE_NAME_D,
  NOTE_NAME_D_SHARP,
  NOTE_NAME_E_FLAT,
  NOTE_NAME_E,
  NOTE_NAME_F,
  NOTE_NAME_F_SHARP,
  NOTE_NAME_G_FLAT,
  NOTE_NAME_G,
  NOTE_NAME_G_SHARP,
  NOTE_NAME_A_FLAT,
  NOTE_NAME_A,
  NOTE_NAME_A_SHARP,
  NOTE_NAME_B_FLAT,
  NOTE_NAME_B,
} from '../constants/noteName';
import {
  TYPE_MAJOR,
  TYPE_MAJOR7,
  TYPE_MAJOR9,
  TYPE_MAJOR11,
  TYPE_MAJOR13,
  TYPE_MAJOR_ADD9,
  TYPE_MAJOR_ADD11,
  TYPE_MINOR,
  TYPE_MINOR7,
  TYPE_MINOR7_ADD11,
  TYPE_SUS2,
  TYPE_SUS4,
} from '../constants/type';

const sharpNumberArray = [
  NUMBER_ONE,
  NUMBER_ONE_SHARP,
  NUMBER_TWO,
  NUMBER_TWO_SHARP,
  NUMBER_THREE,
  NUMBER_FOUR,
  NUMBER_FOUR_SHARP,
  NUMBER_FIVE,
  NUMBER_FIVE_SHARP,
  NUMBER_SIX,
  NUMBER_SIX_SHARP,
  NUMBER_SEVEN,
];

const flatNumberArray = [
  NUMBER_ONE,
  NUMBER_TWO_FLAT,
  NUMBER_TWO,
  NUMBER_THREE_FLAT,
  NUMBER_THREE,
  NUMBER_FOUR,
  NUMBER_FIVE_FLAT,
  NUMBER_FIVE,
  NUMBER_SIX_FLAT,
  NUMBER_SIX,
  NUMBER_SEVEN_FLAT,
  NUMBER_SEVEN,
];

const sharpNoteNameArray = [
  NOTE_NAME_C,
  NOTE_NAME_C_SHARP,
  NOTE_NAME_D,
  NOTE_NAME_D_SHARP,
  NOTE_NAME_E,
  NOTE_NAME_F,
  NOTE_NAME_F_SHARP,
  NOTE_NAME_G,
  NOTE_NAME_G_SHARP,
  NOTE_NAME_A,
  NOTE_NAME_A_SHARP,
  NOTE_NAME_B,
];

const flatNoteNameArray = [
  NOTE_NAME_C,
  NOTE_NAME_D_FLAT,
  NOTE_NAME_D,
  NOTE_NAME_E_FLAT,
  NOTE_NAME_E,
  NOTE_NAME_F,
  NOTE_NAME_G_FLAT,
  NOTE_NAME_G,
  NOTE_NAME_A_FLAT,
  NOTE_NAME_A,
  NOTE_NAME_B_FLAT,
  NOTE_NAME_B,
];

export function shiftNoteName({
  note,
  shift,
}) {
  switch (note) {
    case NOTE_NAME_C:
      return 'C';

    case NOTE_NAME_C_SHARP:
      return '#C';

    case NOTE_NAME_D_FLAT:
      return 'bD';

    case NOTE_NAME_D:
      return 'D';

    case NOTE_NAME_D_SHARP:
      return '#D';

    case NOTE_NAME_E_FLAT:
      return 'bE';

    case NOTE_NAME_E:
      return 'E';

    case NOTE_NAME_F:
      return 'F';

    case NOTE_NAME_F_SHARP:
      return '#F';

    case NOTE_NAME_G_FLAT:
      return 'bG';

    case NOTE_NAME_G:
      return 'G';

    case NOTE_NAME_G_SHARP:
      return '#G';

    case NOTE_NAME_A_FLAT:
      return 'bA';

    case NOTE_NAME_A:
      return 'A';

    case NOTE_NAME_A_SHARP:
      return '#A';

    case NOTE_NAME_B_FLAT:
      return 'bB';

    case NOTE_NAME_B:
      return 'B';

    default:
      return '';
  }
}

export function shiftNumber({
  number,
  shift,
}) {
  let sharpArray
  let flatArray

  switch (number) {
    case NUMBER_ONE: {
      sharpArray = sharpNumberArray;
      flatArray = flatNumberArray;

      break;
    }

    case NUMBER_ONE_SHARP: {
      sharpArray = [
        ...sharpNumberArray.slice(1),
        ...sharpNumberArray.slice(0, 1),
      ];
      flatArray = [
        ...flatNumberArray.slice(1),
        ...flatNumberArray.slice(0, 1),
      ];

      break;
    }

    case NUMBER_TWO_FLAT: {
      sharpArray = [
        ...sharpNumberArray.slice(1),
        ...sharpNumberArray.slice(0, 1),
      ];
      flatArray = [
        ...flatNumberArray.slice(1),
        ...flatNumberArray.slice(0, 1),
      ];

      break;
    }

    case NUMBER_TWO: {
      sharpArray = [
        ...sharpNumberArray.slice(2),
        ...sharpNumberArray.slice(0, 2),
      ];
      flatArray = [
        ...flatNumberArray.slice(2),
        ...flatNumberArray.slice(0, 2),
      ];

      break;
    }

    case NUMBER_TWO_SHARP: {
      sharpArray = [
        ...sharpNumberArray.slice(3),
        ...sharpNumberArray.slice(0, 3),
      ];
      flatArray = [
        ...flatNumberArray.slice(3),
        ...flatNumberArray.slice(0, 3),
      ];

      break;
    }

    case NUMBER_THREE_FLAT: {
      sharpArray = [
        ...sharpNumberArray.slice(3),
        ...sharpNumberArray.slice(0, 3),
      ];
      flatArray = [
        ...flatNumberArray.slice(3),
        ...flatNumberArray.slice(0, 3),
      ];

      break;
    }

    case NUMBER_THREE: {
      sharpArray = [
        ...sharpNumberArray.slice(4),
        ...sharpNumberArray.slice(0, 4),
      ];
      flatArray = [
        ...flatNumberArray.slice(4),
        ...flatNumberArray.slice(0, 4),
      ];

      break;
    }

    case NUMBER_FOUR: {
      sharpArray = [
        ...sharpNumberArray.slice(5),
        ...sharpNumberArray.slice(0, 5),
      ];
      flatArray = [
        ...flatNumberArray.slice(5),
        ...flatNumberArray.slice(0, 5),
      ];

      break;
    }

    case NUMBER_FOUR_SHARP: {
      sharpArray = [
        ...sharpNumberArray.slice(6),
        ...sharpNumberArray.slice(0, 6),
      ];
      flatArray = [
        ...flatNumberArray.slice(6),
        ...flatNumberArray.slice(0, 6),
      ];

      break;
    }

    case NUMBER_FIVE_FLAT: {
      sharpArray = [
        ...sharpNumberArray.slice(6),
        ...sharpNumberArray.slice(0, 6),
      ];
      flatArray = [
        ...flatNumberArray.slice(6),
        ...flatNumberArray.slice(0, 6),
      ];

      break;
    }

    case NUMBER_FIVE: {
      sharpArray = [
        ...sharpNumberArray.slice(7),
        ...sharpNumberArray.slice(0, 7),
      ];
      flatArray = [
        ...flatNumberArray.slice(7),
        ...flatNumberArray.slice(0, 7),
      ];

      break;
    }

    case NUMBER_FIVE_SHARP: {
      sharpArray = [
        ...sharpNumberArray.slice(8),
        ...sharpNumberArray.slice(0, 8),
      ];
      flatArray = [
        ...flatNumberArray.slice(8),
        ...flatNumberArray.slice(0, 8),
      ];

      break;
    }

    case NUMBER_SIX_FLAT: {
      sharpArray = [
        ...sharpNumberArray.slice(8),
        ...sharpNumberArray.slice(0, 8),
      ];
      flatArray = [
        ...flatNumberArray.slice(8),
        ...flatNumberArray.slice(0, 8),
      ];

      break;
    }

    case NUMBER_SIX: {
      sharpArray = [
        ...sharpNumberArray.slice(9),
        ...sharpNumberArray.slice(0, 9),
      ];
      flatArray = [
        ...flatNumberArray.slice(9),
        ...flatNumberArray.slice(0, 9),
      ];

      break;
    }

    case NUMBER_SIX_SHARP: {
      sharpArray = [
        ...sharpNumberArray.slice(10),
        ...sharpNumberArray.slice(0, 10),
      ];
      flatArray = [
        ...flatNumberArray.slice(10),
        ...flatNumberArray.slice(0, 10),
      ];

      break;
    }

    case NUMBER_SEVEN_FLAT: {
      sharpArray = [
        ...sharpNumberArray.slice(10),
        ...sharpNumberArray.slice(0, 10),
      ];
      flatArray = [
        ...flatNumberArray.slice(10),
        ...flatNumberArray.slice(0, 10),
      ];

      break;
    }

    case NUMBER_SEVEN: {
      sharpArray = [
        ...sharpNumberArray.slice(11),
        ...sharpNumberArray.slice(0, 11),
      ];
      flatArray = [
        ...flatNumberArray.slice(11),
        ...flatNumberArray.slice(0, 11),
      ];

      break;
    }

    default: {
      sharpArray = sharpNumberArray;
      flatArray = flatNumberArray;

      break;
    }
  }

  if (shift > 0) {
    return nth(sharpArray, shift);
  }

  if (shift < 0) {
    return nth(flatArray, shift);
  }

  return number;
}

export function numberTransfer({
  number,
  tonality,
}) {
  switch (number) {
    case NUMBER_ONE: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'C';

        case NOTE_NAME_D:
          return 'D';

        case NOTE_NAME_E:
          return 'E';

        case NOTE_NAME_F:
          return 'F';

        case NOTE_NAME_G:
          return 'G';

        case NOTE_NAME_A:
          return 'A';

        case NOTE_NAME_B:
          return 'B';

        default:
          return '1';
      }
    }

    case NUMBER_ONE_SHARP:
      return '#1';

    case NUMBER_TWO_FLAT: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'bD';

        case NOTE_NAME_D:
          return 'bE';

        case NOTE_NAME_E:
          return 'F';

        case NOTE_NAME_F:
          return 'bG';

        case NOTE_NAME_G:
          return 'bA';

        case NOTE_NAME_A:
          return 'bB';

        case NOTE_NAME_B:
          return 'C';

        default:
          return 'b2';
      }
    }

    case NUMBER_TWO: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'D';

        case NOTE_NAME_D:
          return 'E';

        case NOTE_NAME_E:
          return '#F';

        case NOTE_NAME_F:
          return 'G';

        case NOTE_NAME_G:
          return 'A';

        case NOTE_NAME_A:
          return 'B';

        case NOTE_NAME_B:
          return '#C';

        default:
          return '2';
      }
    }

    case NUMBER_TWO_SHARP:
      return '#2';

    case NUMBER_THREE_FLAT: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'bE';

        case NOTE_NAME_D:
          return 'F';

        case NOTE_NAME_E:
          return 'G';

        case NOTE_NAME_F:
          return 'bA';

        case NOTE_NAME_G:
          return 'bB';

        case NOTE_NAME_A:
          return 'C';

        case NOTE_NAME_B:
          return 'D';

        default:
          return 'b3';
      }
    }

    case NUMBER_THREE: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'E';

        case NOTE_NAME_D:
          return '#F';

        case NOTE_NAME_E:
          return '#G';

        case NOTE_NAME_F:
          return 'A';

        case NOTE_NAME_G:
          return 'B';

        case NOTE_NAME_A:
          return '#C';

        case NOTE_NAME_B:
          return '#D';

        default:
          return '3';
      }
    }

    case NUMBER_FOUR: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'F';

        case NOTE_NAME_D:
          return 'G';

        case NOTE_NAME_E:
          return 'A';

        case NOTE_NAME_F:
          return 'bB';

        case NOTE_NAME_G:
          return 'C';

        case NOTE_NAME_A:
          return 'D';

        case NOTE_NAME_B:
          return 'E';

        default:
          return '4';
      }
    }

    case NUMBER_FOUR_SHARP:
      return '#4';

    case NUMBER_FIVE_FLAT: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'bG';

        case NOTE_NAME_D:
          return 'bA';

        case NOTE_NAME_E:
          return 'bB';

        case NOTE_NAME_F:
          return 'B';

        case NOTE_NAME_G:
          return 'bD';

        case NOTE_NAME_A:
          return 'bE';

        case NOTE_NAME_B:
          return 'F';

        default:
          return 'b5';
      }
    }

    case NUMBER_FIVE: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'G';

        case NOTE_NAME_D:
          return 'A';

        case NOTE_NAME_E:
          return 'B';

        case NOTE_NAME_F:
          return 'C';

        case NOTE_NAME_G:
          return 'D';

        case NOTE_NAME_A:
          return 'E';

        case NOTE_NAME_B:
          return '#F';

        default:
          return '5';
      }
    }

    case NUMBER_FIVE_SHARP:
      return '#5';

    case NUMBER_SIX_FLAT: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'bA';

        case NOTE_NAME_D:
          return 'bB';

        case NOTE_NAME_E:
          return 'C';

        case NOTE_NAME_F:
          return 'bD';

        case NOTE_NAME_G:
          return 'bE';

        case NOTE_NAME_A:
          return 'F';

        case NOTE_NAME_B:
          return 'G';

        default:
          return 'b6';
      }
    }

    case NUMBER_SIX: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'A';

        case NOTE_NAME_D:
          return 'B';

        case NOTE_NAME_E:
          return '#C';

        case NOTE_NAME_F:
          return 'D';

        case NOTE_NAME_G:
          return 'E';

        case NOTE_NAME_A:
          return '#F';

        case NOTE_NAME_B:
          return '#G';

        default:
          return '6';
      }
    }

    case NUMBER_SIX_SHARP:
      return '#6';

    case NUMBER_SEVEN_FLAT: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'bB';

        case NOTE_NAME_D:
          return 'C';

        case NOTE_NAME_E:
          return 'D';

        case NOTE_NAME_F:
          return 'bE';

        case NOTE_NAME_G:
          return 'F';

        case NOTE_NAME_A:
          return 'G';

        case NOTE_NAME_B:
          return 'A';

        default:
          return 'b7';
      }
    }

    case NUMBER_SEVEN: {
      switch (tonality) {
        case NOTE_NAME_C:
          return 'B';

        case NOTE_NAME_D:
          return '#C';

        case NOTE_NAME_E:
          return '#D';

        case NOTE_NAME_F:
          return 'E';

        case NOTE_NAME_G:
          return '#F';

        case NOTE_NAME_A:
          return '#G';

        case NOTE_NAME_B:
          return '#A';

        default:
          return '7';
      }
    }

    default:
      return '';
  }
}

export function noteNameTransfer(note) {
  switch (note) {
    case NOTE_NAME_C:
      return 'C';

    case NOTE_NAME_C_SHARP:
      return '#C';

    case NOTE_NAME_D_FLAT:
      return 'bD';

    case NOTE_NAME_D:
      return 'D';

    case NOTE_NAME_D_SHARP:
      return '#D';

    case NOTE_NAME_E_FLAT:
      return 'bE';

    case NOTE_NAME_E:
      return 'E';

    case NOTE_NAME_F:
      return 'F';

    case NOTE_NAME_F_SHARP:
      return '#F';

    case NOTE_NAME_G_FLAT:
      return 'bG';

    case NOTE_NAME_G:
      return 'G';

    case NOTE_NAME_G_SHARP:
      return '#G';

    case NOTE_NAME_A_FLAT:
      return 'bA';

    case NOTE_NAME_A:
      return 'A';

    case NOTE_NAME_A_SHARP:
      return '#A';

    case NOTE_NAME_B_FLAT:
      return 'bB';

    case NOTE_NAME_B:
      return 'B';

    default:
      return '';
  }
}

export function typeTransfer(type) {
  switch (type) {
    case TYPE_MAJOR:
      return '';

    case TYPE_MAJOR7:
      return 'maj7';

    case TYPE_MAJOR9:
      return 'maj9';

    case TYPE_MAJOR11:
      return 'maj11';

    case TYPE_MAJOR13:
      return 'maj13';

    case TYPE_MAJOR_ADD9:
      return 'add9';

    case TYPE_MAJOR_ADD11:
      return 'add11';

    case TYPE_MINOR:
      return 'm';

    case TYPE_MINOR7:
      return 'm7';

    case TYPE_MINOR7_ADD11:
      return 'm7add11';

    case TYPE_SUS2:
      return 'sus2';

    case TYPE_SUS4:
      return 'sus4';

    default:
      return '';
  }
}