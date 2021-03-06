import React, { useContext } from 'react';
import {
  shiftNoteName,
  numberTransfer,
  typeTransfer,
} from '../../utils';
import { isNumber } from 'lodash';
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

  const {
    number,
    on,
    type,
    capture,
    shift,
  } = chord;

  const usedTonality = isNumber(shift) && shift !== 0 ?  shiftNoteName({ note: tonality, shift }) : tonality;

  const getChordName = () => {
    if (!!on) {
      return `${numberTransfer({ number, tonality: usedTonality })}${typeTransfer(type)}/${numberTransfer({ number: on, tonality: usedTonality })}`;
    }

    return `${numberTransfer({ number, tonality: usedTonality })}${typeTransfer(type)}`;
  }

  if (capture === 2) {
    return (
      <p className="chord">
        <span>—</span>
        <span>{getChordName()}</span>
        <span>—</span>
        <span>—</span>
      </p>
    );
  }

  if (capture === 3) {
    return (
      <p className="chord">
        <span>—</span>
        <span>{getChordName()}</span>
      </p>
    );
  }

  return (
    <p className="chord">
      {getChordName()}
    </p>
  );
};

export default React.memo(Chord);
