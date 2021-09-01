import React from 'react';
import {
  NOTE_NAME_C,
  NOTE_NAME_D,
  NOTE_NAME_E,
  NOTE_NAME_F,
  NOTE_NAME_G,
  NOTE_NAME_A,
  NOTE_NAME_B,
} from '../../constants/noteName';
import TonalityButton from './TonalityButton';
import './index.scss';

const TonalitySelector = ({
  tonality,
  setTonality,
}) => {
  return (
    <div className="tonality-selector">
      <TonalityButton
        name="C"
        value={NOTE_NAME_C}
        tonality={tonality}
        setTonality={setTonality}
      />
      <TonalityButton
        name="D"
        value={NOTE_NAME_D}
        tonality={tonality}
        setTonality={setTonality}
      />
      <TonalityButton
        name="E"
        value={NOTE_NAME_E}
        tonality={tonality}
        setTonality={setTonality}
      />
      <TonalityButton
        name="F"
        value={NOTE_NAME_F}
        tonality={tonality}
        setTonality={setTonality}
      />
      <TonalityButton
        name="G"
        value={NOTE_NAME_G}
        tonality={tonality}
        setTonality={setTonality}
      />
      <TonalityButton
        name="A"
        value={NOTE_NAME_A}
        tonality={tonality}
        setTonality={setTonality}
      />
      <TonalityButton
        name="B"
        value={NOTE_NAME_B}
        tonality={tonality}
        setTonality={setTonality}
      />
    </div>
  );
};

export default React.memo(TonalitySelector);
