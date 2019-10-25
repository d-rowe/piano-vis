import React from 'react';
import WhiteKey from './Keys/whiteKey';
import BlackKey from './Keys/blackKey';

const WHITE_WIDTH = 100; // White key width
const HEIGHT = 400; // White key height
const BLACK_WIDTH = WHITE_WIDTH * 0.7; // Black key width
const BLACK_HEIGHT = HEIGHT * 0.65; // Black key height
const RADIUS = 10;
const PANEL_HEIGHT = 30;
const BLACK = 'black';
const WHITE = 'white';

type propTypes = {
  keys: number;
};

const Piano = ({ keys }: propTypes) => {
  if (!keys) keys = 25; // Default number of keys
  const bKeyPat = [1, 1, 0, 1, 1, 1, 0]; // Black key pattern

  const renderedKeys = () => whiteKeys.length + blackKeys.length; // Get number of currently rendered keys

  let whiteKeys = []; // To be populated with WhiteKey components
  let blackKeys = []; // To be populated with BlackKey components
  let i = 0; // Loop index
  while (renderedKeys() < keys) {
    // Add white key
    whiteKeys.push(
      <WhiteKey
        x={i}
        y={0}
        width={WHITE_WIDTH}
        height={HEIGHT}
        key={i}
        padding={10}
        radius={RADIUS}
        color={WHITE}
      />
    );

    // Check if we still need more keys
    if (renderedKeys() < keys) {
      // Check if the current note has a black key next to it
      if (bKeyPat[i % 7] === 1) {
        // Add black key
        blackKeys.push(
          <BlackKey
            x={i}
            y={0}
            key={i + 0.5}
            width={BLACK_WIDTH}
            height={BLACK_HEIGHT}
            wWidth={WHITE_WIDTH}
            radius={RADIUS}
            color={BLACK}
          />
        );
      }
    }
    i += 1;
  }
  const totalWidth = whiteKeys.length * WHITE_WIDTH;
  const yMin = PANEL_HEIGHT * -1 + RADIUS;
  return (
    <svg
      className='piano'
      viewBox={`0 ${yMin} ${totalWidth} ${HEIGHT + PANEL_HEIGHT}`}
    >
      {whiteKeys}
      {blackKeys}
      <g>
        <rect
          width={totalWidth}
          height={PANEL_HEIGHT}
          y={yMin}
          fill='#851de0'
          rx={RADIUS / 2}
        />
        <rect
          width={totalWidth}
          height={15}
          y={RADIUS}
          fill='black'
          opacity={0.2}
        />
      </g>
    </svg>
  );
};

export default Piano;
