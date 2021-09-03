import React from 'react';
import Fret from './Fret';
import './index.scss';

const ChordSample = ({
  sample: {
    name,
    frets,
  },
}) => (
  <div className="chord-sample-wrapper">
    <p className="chord-name">{name}</p>
    <div className="chord-sample">
      {frets.map((fret, idx) => (
        <Fret key={idx} fret={fret}  />
      ))}
    </div>
  </div>
);

export default React.memo(ChordSample);
