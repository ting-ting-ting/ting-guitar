import React from 'react';
import './index.scss';

const Measure = ({
  measure,
}) => {
  console.log('measure', measure);

  return (
    <div className="measure">
      <div className="chords-wrapper">
        {measure.map(chord => (
          <span className="chord">C</span>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Measure);
