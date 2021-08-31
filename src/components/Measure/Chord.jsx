import React from 'react';

const Chord = ({
  chord,
}) => {
  console.log('chord', chord);

  if (!chord) {
    return (
      <span className="chord" />
    );
  }

  return (
    <span className="chord">C</span>
  );
};

export default React.memo(Chord);
