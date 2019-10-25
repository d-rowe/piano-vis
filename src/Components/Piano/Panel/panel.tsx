import React from 'react';

type propTypes = {
  y: number;
  width: number;
  height: number;
  radius: number;
  shadowHeight: number;
};

const Panel = ({ y, width, height, radius, shadowHeight }: propTypes) => (
  <g className='panel'>
    <rect width={width} height={height} y={y} rx={radius} />
    <rect
      className='panel-shadow'
      width={width}
      height={shadowHeight}
      y={radius}
    />
  </g>
);

export default Panel;
