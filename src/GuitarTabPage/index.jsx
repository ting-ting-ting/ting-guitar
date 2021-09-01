import React, { useState } from 'react';
import {
  Link,
} from "react-router-dom";
import { tabData } from '../constants/tabData';
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

  const lines = tabData[id].lines;

  console.log('tonality', tonality)

  return (
    <div className="guitar-tab">
      <TonalitySelector
        tonality={tonality}
        setTonality={setTonality}
      />
      <TonalityContext.Provider
        value={{
          tonality,
        }}
      >
        <div className="tab-container">
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
