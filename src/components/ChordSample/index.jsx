import React from 'react';
import MutedMark from './MutedMark';
import Fret from './Fret';
import './index.scss';

const ChordSample = ({
  sample: {
    name,
    muted,
    frets,
  },
}) => (
  <div className="chord-sample-wrapper">
    <p className="chord-name">{name}</p>
    {!!muted && (
      <div className="muted-wrapper">
        <MutedMark isMuted={!!muted.find(m => m === 6)} />
        <MutedMark isMuted={!!muted.find(m => m === 5)} />
        <MutedMark isMuted={!!muted.find(m => m === 4)} />
        <MutedMark isMuted={!!muted.find(m => m === 3)} />
        <MutedMark isMuted={!!muted.find(m => m === 2)} />
        <MutedMark isMuted={!!muted.find(m => m === 1)} />
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
