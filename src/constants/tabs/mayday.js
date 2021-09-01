import {
  NUMBER_ONE,
  NUMBER_FOUR,
  NUMBER_FIVE,
  NUMBER_SIX,
  NUMBER_SEVEN,
} from '../number';
import {
  TYPE_MAJOR,
  TYPE_MINOR,
} from '../type';

const maydayTabData = {
  'mayday-1': {
    id: 'mayday-1',
    name: '天使',
    singer: '五月天',
    lines: [
      {
        chords: [
          [
            {
              number: NUMBER_ONE,
              type: TYPE_MAJOR,
            },
            null,
            {
              number: NUMBER_FIVE,
              on: NUMBER_SEVEN,
              type: TYPE_MAJOR,
            },
            null,
          ],
          [
            {
              number: NUMBER_SIX,
              type: TYPE_MINOR,
            },
            null,
            {
              number: NUMBER_FOUR,
              type: TYPE_MAJOR,
            },
            null,
          ],
          [
            {
              number: NUMBER_ONE,
              type: TYPE_MAJOR,
            },
            null,
            {
              number: NUMBER_FIVE,
              type: TYPE_MAJOR,
            },
            null,
          ],
          [
            {
              number: NUMBER_ONE,
              type: TYPE_MAJOR,
            },
            null,
            null,
            null,
          ],
        ],
      },
      {
        chords: [
          [
            {
              number: NUMBER_ONE,
              type: TYPE_MAJOR,
            },
            null,
            null,
            null,
          ],
          [
            {
              number: NUMBER_SIX,
              type: TYPE_MINOR,
            },
            null,
            null,
            null,
          ],
          [
            {
              number: NUMBER_FOUR,
              type: TYPE_MAJOR,
            },
            null,
            null,
            null,
          ],
          [
            {
              number: NUMBER_FIVE,
              type: TYPE_MAJOR,
            },
            null,
            null,
            null,
          ],
        ],
        words: '你就是我的天使 保護著我的天使 從此我再也沒有憂傷',
      }
    ],
  },
};

export default maydayTabData;
