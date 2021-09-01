import {
  NUMBER_ONE,
  NUMBER_THREE,
  NUMBER_FOUR,
  NUMBER_FIVE,
  NUMBER_SIX,
  NUMBER_SEVEN,
} from '../../number';
import {
  TYPE_MAJOR,
  TYPE_MINOR,
} from '../../type';

const angelTabData = {
  name: '天使',
  singer: '五月天',
  lines: [
    {
      title: '前奏',
      measures: [
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
      title: '主歌',
      measures: [
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
      lyrics: ['▲你就是我的天使 保護著我的天使 從此我再也沒有憂傷'],
    },
    {
      measures: [
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
      lyrics: ['你就是我的天使 給我快樂的天使 甚至我學會了飛翔'],
    },
    {
      measures: [
        [
          {
            number: NUMBER_SIX,
            type: TYPE_MINOR,
          },
          null,
          {
            number: NUMBER_THREE,
            type: TYPE_MINOR,
          },
          null,
        ],
        [
          {
            number: NUMBER_FOUR,
            type: TYPE_MAJOR,
          },
          null,
          {
            number: NUMBER_ONE,
            type: TYPE_MAJOR,
          },
          null,
        ],
      ],
      lyrics: ['飛過人間的無常 才懂愛才是寶藏'],
    },
    {
      measures: [
        [
          {
            number: NUMBER_FIVE,
            type: TYPE_MAJOR,
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
      ],
      lyrics: ['不管世界變得怎麼樣 只要有你就會是天堂'],
    },
  ],
};

export default angelTabData;