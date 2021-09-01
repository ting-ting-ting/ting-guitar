import React, { useState } from 'react';
import {
  Link,
} from "react-router-dom";
import { tabData } from '../constants/tabData';
import TonalitySelector from '../components/TonalitySelector';
import './index.scss';

const GuitarTabPage = ({
  match: {
    params: {
      id,
    },
  },
}) => {
  const [tonality, setTonality] = useState(null);

  const Comp = tabData[id].component;

  console.log('tonality', tonality)

  return (
    <div className="guitar-tab">
      <TonalitySelector
        tonality={tonality}
        setTonality={setTonality}
      />
      <div className="tab-container">
        <Comp />
      </div>
      <Link to="/">back</Link>
    </div>
  );
};

export default React.memo(GuitarTabPage);
