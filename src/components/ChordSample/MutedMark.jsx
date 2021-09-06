import React from 'react';
import './index.scss';

const MutedMark = ({
  isMuted,
}) => {
  if (!isMuted) {
    return (
      <span className="muted-mark" />
    );
  }

  return (
    <span className="muted-mark">X</span>
  );
};

export default React.memo(MutedMark);
