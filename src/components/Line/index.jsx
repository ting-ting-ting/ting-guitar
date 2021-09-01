import React from 'react';
import Measure from '../Measure';
import './index.scss';

const Line = ({
  line,
}) => {
  const chords = line.chords;
  const words = line.words;

  return (
    <div className="line">
      <div className="measures-wrapper">
        {chords.map((measure, idx) => (
          <Measure key={idx} measure={measure} />
        ))}
      </div>
      {!!words && (
        <div className="words-wrapper">
          <p>{words}</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(Line);
