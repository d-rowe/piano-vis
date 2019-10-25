import React from 'react';
import './blackKey.css';

type propTypes = {
  x: number;
  y: number;
  width: number;
  height: number;
  wWidth: number;
  radius: number;
  color: string;
};

const BlackKey = ({
  x,
  y,
  width,
  height,
  wWidth,
  radius,
  color
}: propTypes) => {
  x = (x + 1) * wWidth - width / 2; // Set so that key is in the middle of two white keys
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      className='black-key'
      fill={color}
      rx={radius}
    />
  );
};

export default BlackKey;
