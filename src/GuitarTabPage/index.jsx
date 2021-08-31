import React from 'react';
import {
  Link,
} from "react-router-dom";
import Measure from '../components/Measure';
import Line from '../components/Line';

const GuitarTabPage = () => (
  <div>
    <Line />
    <Link to="/">back</Link>
  </div>
);

export default React.memo(GuitarTabPage);
