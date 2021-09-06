import React from 'react';
import Mark from './Mark';
import Fret from './Fret';
import './index.scss';

const ChordSample = ({
  sample: {
    name,
    muted,
    opened,
    frets,
  },
}) => (
  <div className="chord-sample-wrapper">
    <p className="chord-name">{name}</p>
    {(!!muted || !!opened) && (
      <div className="mark-wrapper">
        <Mark isMuted={!!muted && !!muted.find(m => m === 6)} />
        <Mark isMuted={!!muted && !!muted.find(m => m === 5)} />
        <Mark isMuted={!!muted && !!muted.find(m => m === 4)} />
        <Mark isMuted={!!muted && !!muted.find(m => m === 3)} />
        <Mark isMuted={!!muted && !!muted.find(m => m === 2)} />
        <Mark isMuted={!!muted && !!muted.find(m => m === 1)} />
      </div>
    )}
    <div className="chord-sample">
      {frets.map((fret, idx) => (
        <Fret key={idx} fret={fret}  />
      ))}
    </div>
  </div>
);

export default React.memo(ChordSample);
