import React from 'react';
import Fret from './Fret';
import './index.scss';

const ChordSample = ({

}) => {
  const sample = {
    name: 'C',
    frets: [{
      position: [2],
    }, {
      position: [4],
    }, {
      position: [5],
    }],
  };

  return (
    <div className="chord-sample-wrapper">
      <p className="chord-name">{sample.name}</p>
      <div className="chord-sample">
        {sample.frets.map((fret, idx) => (
          <Fret key={idx} fret={fret}  />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ChordSample);
