import React from 'react';
import PropTypes from 'prop-types';

const WhiteKey = ({ x, y, width, height, padding, radius }) => {
  return (
    <rect
      x={x * width + padding / 2}
      y={y}
      width={width - padding}
      height={height}
      className='white-key'
      rx={radius}
    />
  );
};

WhiteKey.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  padding: PropTypes.number
};

export default WhiteKey;
