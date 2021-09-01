import React, { useState } from 'react';
import {
  Link,
} from "react-router-dom";
import { tabData } from '../constants/tabs';
import { TonalityContext } from '../context';
import TonalitySelector from '../components/TonalitySelector';
import Line from '../components/Line';
import './index.scss';

const GuitarTabPage = ({
  match: {
    params: {
      id,
    },
  },
}) => {
  const [tonality, setTonality] = useState(null);

  const {
    name,
    lines,
  } = tabData[id];

  return (
    <div className="guitar-tab">
      <div className="tonality-selector-wrapper">
        <TonalitySelector
          tonality={tonality}
          setTonality={setTonality}
        />
      </div>
      <TonalityContext.Provider
        value={{
          tonality,
        }}
      >
        <div className="tab-container">
          <h1>{name}</h1>
          {lines.map((line, idx) => (
            <Line key={idx} line={line} />
          ))}
        </div>
      </TonalityContext.Provider>
      <Link to="/">back</Link>
    </div>
  );
};

export default React.memo(GuitarTabPage);
