import React from 'react';
import './index.scss';

const Mark = ({
  isMuted,
  isOpened,
}) => {
  if (isMuted) {
    return (
      <span className="mark">X</span>
    );
  }

  if (isOpened) {
    return (
      <span className="mark">O</span>
    );
  }

  return (
    <span className="mark" />
  );
};

export default React.memo(Mark);
