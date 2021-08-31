import React from 'react';
import {
  Link,
} from "react-router-dom";
import Measure from '../components/Measure';

const GuitarTabPage = () => (
  <div>
    <Measure />
    <Link to="/">back</Link>
  </div>
);

export default React.memo(GuitarTabPage);
