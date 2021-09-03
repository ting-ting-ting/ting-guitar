import React from 'react';
import './index.scss';

const String = ({
  isActive,
}) => {
  return (
    <div className="string">
      {isActive && (
        <div className="finger" />
      )}
    </div>
  );
};

export default React.memo(String);
