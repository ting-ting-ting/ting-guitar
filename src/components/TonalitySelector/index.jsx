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
import './index.scss';

const TonalitySelector = ({
  tonality,
  setTonality,
}) => {
  return (
    <div className="tonality-selector">
      <button type="button" className="tonality-btn" onClick={() => setTonality(NOTE_NAME_C)}>C</button>
      <button type="button" className="tonality-btn" onClick={() => setTonality(NOTE_NAME_D)}>D</button>
      <button type="button" className="tonality-btn" onClick={() => setTonality(NOTE_NAME_E)}>E</button>
      <button type="button" className="tonality-btn" onClick={() => setTonality(NOTE_NAME_F)}>F</button>
      <button type="button" className="tonality-btn" onClick={() => setTonality(NOTE_NAME_G)}>G</button>
      <button type="button" className="tonality-btn" onClick={() => setTonality(NOTE_NAME_A)}>A</button>
      <button type="button" className="tonality-btn" onClick={() => setTonality(NOTE_NAME_B)}>B</button>
    </div>
  );
};

export default React.memo(TonalitySelector);
