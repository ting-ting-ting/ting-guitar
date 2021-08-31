import React from 'react';
import Measure from '../../components/Measure';
import Line from '../../components/Line';

const Angel = () => {
  return (
    <>
      <Line
        line={{
          chords: [
            [
              {
                number: '1',
                type: 'maj',
              },
              null,
              null,
              null,
            ],
            [
              {
                number: '6',
                type: 'm',
              },
              null,
              null,
              null,
            ],
            [
              {
                number: '4',
                type: 'maj',
              },
              null,
              null,
              null,
            ],
            [
              {
                number: '5',
                type: 'maj',
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
