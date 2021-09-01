import React from 'react';
import Chord from '../Chord';
import './index.scss';

const Measure = ({
  measure,
}) => {
  return (
    <div className="measure">
      <div className="chords-wrapper">
        {measure.map((chord, idx) => (
          <Chord key={idx} chord={chord} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Measure);
