import React from 'react';
import Fret from './Fret';
import './index.scss';

const ChordSample = ({

}) => {
  return (
    <div className="chord-sample-wrapper">
      <p className="chord-name">C</p>
      <div className="chord-sample">
        <Fret />
        <Fret />
        <Fret />
        <Fret />
      </div>
    </div>
  );
};

export default React.memo(ChordSample);
