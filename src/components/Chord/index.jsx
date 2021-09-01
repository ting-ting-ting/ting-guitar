import React from 'react';
import {
  numberTransfer,
  typeTransfer,
} from '../../utils';
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
      {`${numberTransfer(chord.number)}${typeTransfer(chord.type)}`}
    </span>
  );
};

export default React.memo(Chord);
