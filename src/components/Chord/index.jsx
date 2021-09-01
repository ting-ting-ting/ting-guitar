import React from 'react';
import { numberTransfer } from '../../utils/numberTransfer';
import './index.scss';

const Chord = ({
  chord,
}) => {
  console.log('chord', chord);

  if (!chord) {
    return (
      <span className="chord" />
    );
  }

  return (
    <span className="chord">
      {numberTransfer(chord.number)}
    </span>
  );
};

export default React.memo(Chord);
