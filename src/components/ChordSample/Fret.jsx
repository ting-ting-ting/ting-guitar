import React from 'react';
import String from './String';
import './index.scss';

const Fret = ({

}) => {
  return (
    <div className="fret">
      <String />
      <String />
      <String />
      <String />
      <String />
      <String />
    </div>
  );
};

export default React.memo(Fret);
