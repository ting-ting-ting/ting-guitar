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
  TYPE_MAJOR,
  TYPE_MAJOR_SEVEN,
  TYPE_MINOR,
  TYPE_MINOR_SEVEN,
} from '../constants/type';

export function numberTransfer(number) {
  switch (number) {
    case NUMBER_ONE:
      return '1';

    case NUMBER_ONE_SHARP:
      return '#1';

    case NUMBER_TWO_FLAT:
      return 'b2';

    case NUMBER_TWO:
      return '2';

    case NUMBER_TWO_SHARP:
      return '#2';

    case NUMBER_THREE_FLAT:
      return 'b3';

    case NUMBER_THREE:
      return '3';

    case NUMBER_FOUR:
      return '4';

    case NUMBER_FOUR_SHARP:
      return '#4';

    case NUMBER_FIVE_FLAT:
      return 'b5';

    case NUMBER_FIVE:
      return '5';

    case NUMBER_FIVE_SHARP:
      return '#5';

    case NUMBER_SIX_FLAT:
      return 'b6';

    case NUMBER_SIX:
      return '6';

    case NUMBER_SIX_SHARP:
      return '#6';

    case NUMBER_SEVEN_FLAT:
      return 'b7';

    case NUMBER_SEVEN:
      return '7';

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