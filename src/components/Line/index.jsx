import React from 'react';
import Measure from '../Measure';
import './index.scss';

const Line = ({
  line: {
    title,
    measures,
    lyrics,
  },
}) => {
  return (
    <div className="line">
      {!!title && (
        <div className="title-wrapper">
          <p>{title}</p>
        </div>
      )}
      <div className="measures-wrapper">
        {measures.map((measure, idx) => (
          <Measure key={idx} measure={measure} />
        ))}
      </div>
      {!!lyrics && (
        <div className="lyrics-wrapper">
          {lyrics.map((l, idx) => (
            <p key={idx}>{l}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Line);
