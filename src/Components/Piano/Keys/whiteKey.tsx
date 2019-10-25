import React from 'react';
import './whiteKey.css';

type propTypes = {
  x: number;
  y: number;
  width: number;
  height: number;
  padding: number;
  radius: number;
};

const WhiteKey = ({ x, y, width, height, padding, radius }: propTypes) => {
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

export default WhiteKey;
