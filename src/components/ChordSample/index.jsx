import React from 'react';
import String from './String';
import './index.scss';

const ChordSample = ({

}) => {
  return (
    <div className="chord-sample-wrapper">
      <p className="chord-name">C</p>
      <div className="chord-sample">
        <div className="fret">
          <String />
          <String />
          <String />
          <String />
          <String />
          <String />
        </div>
        <div className="fret">
          <String />
          <String />
          <String />
          <String />
          <String />
          <String />
        </div>
        <div className="fret">
          <String />
          <String />
          <String />
          <String />
          <String />
          <String />
        </div>
        <div className="fret">
          <String />
          <String />
          <String />
          <String />
          <String />
          <String />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChordSample);
