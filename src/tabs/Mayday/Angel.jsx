import React from 'react';
import Measure from '../../components/Measure';
import Line from '../../components/Line';
import {
  NUMBER_ONE,
  NUMBER_FOUR,
  NUMBER_FIVE,
  NUMBER_SIX,
} from '../../constants/number';
import {
  TYPE_MAJOR,
  TYPE_MINOR,
} from '../../constants/type';

const Angel = () => {
  return (
    <>
      <Line
        line={{
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
          words: [
            '你就是我的天使',
            '保護著我的天使',
            '從此我再也沒有憂傷',
          ],
        }}
      />
    </>
  );
};

export default React.memo(Angel);
