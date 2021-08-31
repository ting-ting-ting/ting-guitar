import React from 'react';
import {
  Link,
} from "react-router-dom";
import Measure from '../components/Measure';
import Line from '../components/Line';
import tabData from '../pu.json';

const GuitarTabPage = ({
  match: {
    params: {
      id,
    },
  },
}) => {
  const tab = tabData.data[id];

  console.log('tab', tab);

  return (
    <div>
      <Line />
      <Link to="/">back</Link>
    </div>
  );
};

export default React.memo(GuitarTabPage);
