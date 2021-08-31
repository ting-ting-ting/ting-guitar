import React from 'react';
import Measure from '../Measure';
import './index.scss';

const Line = ({
  line,
}) => {
  console.log('line', line);

  return (
    <div className="line">
      <div className="measures-wrapper">
        {line.chords.map((measure, idx) => (
          <Measure key={idx} measure={measure} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Line);
