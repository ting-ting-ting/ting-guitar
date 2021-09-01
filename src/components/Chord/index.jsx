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

  if (!chord) {
    return (
      <span className="chord" />
    );
  }

  const getChordName = () => {
    if (!!chord.on) {
      return `${numberTransfer({ number: chord.number, tonality })}${typeTransfer(chord.type)}/${numberTransfer({ number: chord.on, tonality })}`;
    }

    return `${numberTransfer({ number: chord.number, tonality })}${typeTransfer(chord.type)}`;
  }

  return (
    <span className="chord">
      {getChordName()}
    </span>
  );
};

export default React.memo(Chord);
