import React from 'react';
import Measure from '../Measure';
import './index.scss';

const Line = ({

}) => {
  return (
    <div className="line">
      <Measure />
      <Measure />
      <Measure />
      <Measure />
    </div>
  );
};

export default React.memo(Line);
