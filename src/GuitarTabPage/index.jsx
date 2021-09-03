import React, { useState } from 'react';
import { noteNameTransfer } from '../utils';
import { tabData } from '../constants/tabs';
import { TonalityContext } from '../context';
import TonalitySelector from '../components/TonalitySelector';
import Line from '../components/Line';
import PdfViewer from '../components/PdfViewer';
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
    originKey,
    play,
    capo,
    video,
  } = tabData[id];

  return (
    <div className="guitar-tab">
      <div className="head-wrapper">
        <div className="basic-info-wrapper">
          <p className="info-option">
            <span>Key:</span>
            {noteNameTransfer(originKey)}
          </p>
          <p className="info-option">
            <span>Play:</span>
            {noteNameTransfer(play)}
          </p>
          <p className="info-option">
            <span>Capo:</span>
            {capo}
          </p>
        </div>
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
      {/* <PdfViewer name={name} lines={lines} /> */}
    </div>
  );
};

export default React.memo(GuitarTabPage);
