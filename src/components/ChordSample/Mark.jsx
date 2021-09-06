import React from 'react';
import './index.scss';

const Mark = ({
  isMuted,
}) => {
  if (!isMuted) {
    return (
      <span className="mark" />
    );
  }

  return (
    <span className="mark">X</span>
  );
};

export default React.memo(Mark);
