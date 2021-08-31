import React from 'react';
import './index.scss';

const Measure = ({

}) => {
  return (
    <div className="measure">
      <span className="chord">C</span>
      <span className="chord">Dm7</span>
      <span className="chord">F</span>
      <span className="chord">G</span>
    </div>
  );
};

export default React.memo(Measure);
