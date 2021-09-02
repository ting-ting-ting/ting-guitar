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
  TYPE_MINOR_SEVEN,
} from '../../type';
import {
  NOTE_NAME_C,
  NOTE_NAME_D,
} from '../../noteName';

const c = {
  number: NUMBER_ONE,
  type: TYPE_MAJOR,
};

const f = {
  number: NUMBER_FOUR,
  type: TYPE_MAJOR,
};

const g = {
  number: NUMBER_FIVE,
  type: TYPE_MAJOR,
};

const angelTabData = {
  name: '天使',
  singer: '五月天',
  singerId: 'mayday',
  originKey: NOTE_NAME_D,
  play: NOTE_NAME_C,
  capo: 2,
  lines: [
    {
      title: '前奏',
      measures: [
        [
          c,
          null,
          g,
          null,
        ],
        [
          {
            number: NUMBER_SIX,
            type: TYPE_MINOR,
          },
          null,
          f,
          null,
        ],
        [
          c,
          null,
          g,
          null,
        ],
        [
          c,
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
          c,
          null,
          null,
          {
            number: NUMBER_FIVE,
            on: NUMBER_SEVEN,
            type: TYPE_MAJOR,
            capture: 3,
          },
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
          f,
          null,
          null,
          null,
        ],
        [
          g,
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
          c,
          null,
          null,
          {
            number: NUMBER_FIVE,
            on: NUMBER_SEVEN,
            type: TYPE_MAJOR,
            capture: 3,
          },
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
          f,
          null,
          null,
          null,
        ],
        [
          g,
          null,
          null,
          null,
        ],
      ],
      lyrics: ['你就是我的天使 給我快樂的天使 甚至我學會了飛翔'],
    },
    {
      title: '導歌',
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
          f,
          null,
          c,
          null,
        ],
      ],
      lyrics: ['飛過人間的無常 才懂愛才是寶藏'],
    },
    {
      measures: [
        [
          f,
          null,
          null,
          null,
        ],
        [
          g,
          null,
          null,
          null,
        ],
      ],
      lyrics: ['不管世界變得怎麼樣 只要有你就會是天堂'],
    },
    {
      title: '副歌',
      measures: [
        [
          c,
          null,
          g,
          null,
        ],
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
      ],
      lyrics: ['★像孩子依賴著肩膀 像眼淚依賴著臉龐'],
    },
    {
      measures: [
        [
          f,
          null,
          c,
          null,
        ],
        [
          f,
          null,
          g,
          null,
        ],
      ],
      lyrics: ['你就像天使一樣 給我依賴 給我力量'],
    },
    {
      measures: [
        [
          c,
          null,
          g,
          null,
        ],
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
      ],
      lyrics: ['像詩人依賴著月亮 像海豚依賴海洋'],
    },
    {
      measures: [
        [
          f,
          null,
          c,
          null,
        ],
        [
          f,
          null,
          g,
          null,
        ],
      ],
      lyrics: ['你是天使 你是天使 你是我最初和最後的天堂'],
    },
    {
      title: '間奏1',
      measures: [
        [
          c,
          null,
          g,
          null,
        ],
        [
          {
            number: NUMBER_SIX,
            type: TYPE_MINOR,
          },
          null,
          f,
          null,
        ],
        [
          c,
          null,
          g,
          null,
        ],
        [
          c,
          null,
          null,
          null,
        ],
      ],
      lyrics: ['回到▲'],
    },
    {
      title: '間奏2',
      measures: [
        [
          f,
          null,
          null,
          null,
        ],
        [
          c,
          null,
          null,
          null,
        ],
        [
          {
            number: NUMBER_TWO,
            type: TYPE_MINOR_SEVEN,
          },
          null,
          null,
          null,
        ],
        [
          g,
          null,
          f,
          g,
        ],
      ],
      lyrics: ['回到★'],
    },
    {
      title: '間奏3',
      measures: [
        [
          f,
          g,
          {
            number: NUMBER_SIX,
            type: TYPE_MINOR,
          },
          {
            number: NUMBER_FIVE,
            on: NUMBER_SEVEN,
            type: TYPE_MAJOR,
            capture: 2,
          },
        ],
      ],
      lyrics: ['回到★'],
    },
    {
      title: '尾奏',
      measures: [
        [
          c,
          null,
          g,
          null,
        ],
        [
          {
            number: NUMBER_SIX,
            type: TYPE_MINOR,
          },
          null,
          f,
          null,
        ],
        [
          c,
          null,
          g,
          null,
        ],
        [
          c,
          null,
          null,
          null,
        ],
      ],
    },
  ],
};

export default angelTabData;