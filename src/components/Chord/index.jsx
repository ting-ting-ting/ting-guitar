import React, { useContext } from 'react';
import {
  shiftNumberTransfer,
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

  const usedNumber = isNumber(shift) && shift !== 0 ? shiftNumberTransfer({ number, shift }) : number;
  const usedOn = isNumber(shift) && shift !== 0 ? shiftNumberTransfer({ number: on, shift }) : on;

  const getChordName = () => {
    if (!!on) {
      return `${numberTransfer({ number: usedNumber, tonality })}${typeTransfer(type)}/${numberTransfer({ number: usedOn, tonality })}`;
    }

    return `${numberTransfer({ number: usedNumber, tonality })}${typeTransfer(type)}`;
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
