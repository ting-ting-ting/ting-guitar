import React, { useContext } from 'react';
import {
  numberTransfer,
  typeTransfer,
} from '../../utils';
import { TonalityContext } from '../../context';
import './index.scss';

const Chord = ({
  chord,
}) => {
  const { tonality } = useContext(TonalityContext);

  console.log('chord', chord);
  console.log('context', tonality)

  if (!chord) {
    return (
      <span className="chord" />
    );
  }

  return (
    <span className="chord">
      {`${numberTransfer({ number: chord.number, tonality })}${typeTransfer(chord.type)}`}
    </span>
  );
};

export default React.memo(Chord);
