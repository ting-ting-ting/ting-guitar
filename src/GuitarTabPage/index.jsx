import React from 'react';
import {
  Link,
} from "react-router-dom";
import { tabData } from '../constants/tabData';
import './index.scss';

const GuitarTabPage = ({
  match: {
    params: {
      id,
    },
  },
}) => {
  const Comp = tabData[id].component;

  return (
    <div className="guitar-tab">
      <div className="tab-container">
        <Comp />
      </div>
      <Link to="/">back</Link>
    </div>
  );
};

export default React.memo(GuitarTabPage);
