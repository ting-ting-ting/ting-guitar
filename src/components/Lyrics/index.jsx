import React from 'react';
import './index.scss';

const Lyrics = ({
  lyrics,
}) => (
  <div className="lyrics-wrapper">
    {lyrics.map((l, idx) => {
      if (lyrics.length > 1) {
        return (
          <p key={idx}>{`${idx + 1}. ${l}`}</p>
        );
      }

      return (
        <p key={idx}>{l}</p>
      );
    })}
  </div>
);

export default React.memo(Lyrics);
