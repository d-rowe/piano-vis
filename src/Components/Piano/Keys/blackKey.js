import React from 'react';
import PropTypes from 'prop-types';

const BlackKey = ({ x, y, width, height, gridWidth, radius }) => {
  x = (x + 1) * gridWidth - width / 2; // Set so that key is in the middle of two white keys
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      className='black-key'
      rx={radius}
    />
  );
};

BlackKey.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  gridWidth: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  padding: PropTypes.number
};

export default BlackKey;
