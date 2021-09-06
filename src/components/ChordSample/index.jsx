import React from 'react';
import cx from 'classnames';
import Fret from './Fret';
import './index.scss';

const ChordSample = ({
  sample: {
    name,
    muted,
    frets,
  },
}) => {
  const mutedClass = position => cx('muted-mark', {
    'is-muted': !!muted && !!muted.find(m => m === position)
  });

  return (
    <div className="chord-sample-wrapper">
      <p className="chord-name">{name}</p>
      {!!muted && (
        <div className="muted-wrapper">
          <span className={mutedClass(6)}>X</span>
          <span className={mutedClass(5)}>X</span>
          <span className={mutedClass(4)}>X</span>
          <span className={mutedClass(3)}>X</span>
          <span className={mutedClass(2)}>X</span>
          <span className={mutedClass(1)}>X</span>
        </div>
      )}
      <div className="chord-sample">
        {frets.map((fret, idx) => (
          <Fret key={idx} fret={fret}  />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ChordSample);
