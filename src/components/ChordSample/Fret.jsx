import React from 'react';
import String from './String';
import './index.scss';

const Fret = ({
  fret: {
    position,
  },
}) => {
  return (
    <div className="fret">
      <String isActive={!!position.find(p => p === 6)} />
      <String isActive={!!position.find(p => p === 5)} />
      <String isActive={!!position.find(p => p === 4)} />
      <String isActive={!!position.find(p => p === 3)} />
      <String isActive={!!position.find(p => p === 2)} />
      <String isActive={!!position.find(p => p === 1)} />
    </div>
  );
};

export default React.memo(Fret);
