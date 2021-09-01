import React from 'react';
import cx from 'classnames';
import './index.scss';

const TonalityButton = ({
  name,
  value,
  tonality,
  setTonality,
}) => {
  const isActive = tonality === value;
  const onClick = () => {
    if (isActive) {
      setTonality(null);
    } else {
      setTonality(value);
    }
  };

  const btnClass = cx('tonality-btn', {
    'is-active': isActive,
  });

  return (
    <button
      type="button"
      className={btnClass}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default React.memo(TonalityButton);
