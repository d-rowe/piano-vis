import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ y, width, height, radius, shadowHeight }) => (
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

Panel.propTypes = {
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  shadowHeight: PropTypes.number
};

export default Panel;
