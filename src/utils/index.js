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
  TYPE_MAJOR_SEVEN,
  TYPE_MINOR,
  TYPE_MINOR_SEVEN,
} from '../constants/type';

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

    case NUMBER_THREE_FLAT:
      return 'b3';

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

    case NUMBER_FIVE_FLAT:
      return 'b5';

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

    case NUMBER_SIX_FLAT:
      return 'b6';

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

    case TYPE_MAJOR_SEVEN:
      return 'maj7';

    case TYPE_MINOR:
      return 'm';

    case TYPE_MINOR_SEVEN:
      return 'm7';

    default:
      return '';
  }
}