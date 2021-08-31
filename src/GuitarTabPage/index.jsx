import React from 'react';
import {
  Link,
} from "react-router-dom";
import { tabData } from '../constants/tabData';

const GuitarTabPage = ({
  match: {
    params: {
      id,
    },
  },
}) => {
  const Comp = tabData[id].component;

  return (
    <div>
      <Comp />
      <Link to="/">back</Link>
    </div>
  );
};

export default React.memo(GuitarTabPage);
