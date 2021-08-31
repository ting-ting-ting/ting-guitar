import React from 'react';
import './index.scss';

const Measure = ({

}) => {
  return (
    <div className="measure">
      <div className="chords-wrapper">
        <span className="chord">C</span>
        <span className="chord"></span>
        <span className="chord">F</span>
        <span className="chord"></span>
      </div>
      <div className="words-wrapper">
        <span className="word">Oublie-le</span>
        <span className="word"></span>
        <span className="word"></span>
        <span className="word"></span>
      </div>
    </div>
  );
};

export default React.memo(Measure);
