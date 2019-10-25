import React from 'react';
import WhiteKey from './Keys/whiteKey';
import BlackKey from './Keys/blackKey';
import Panel from './Panel/panel';
import './piano.sass';

// Sizing constants
const WHITE_KEY_WIDTH = 100;
const WHITE_KEY_HEIGHT = 400;
const BLACK_KEY_WIDTH = WHITE_KEY_WIDTH * 0.7;
const BLACK_KEY_HEIGHT = WHITE_KEY_HEIGHT * 0.65;
const PANEL_HEIGHT = 50;
const PANEL_SHADOW_HEIGHT = 10;
const KEY_RADIUS = 10;

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
        width={WHITE_KEY_WIDTH}
        height={WHITE_KEY_HEIGHT}
        key={i}
        padding={10}
        radius={KEY_RADIUS}
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
            width={BLACK_KEY_WIDTH}
            height={BLACK_KEY_HEIGHT}
            wWidth={WHITE_KEY_WIDTH}
            radius={KEY_RADIUS}
          />
        );
      }
    }
    i += 1;
  }
  const totalWidth = whiteKeys.length * WHITE_KEY_WIDTH;
  const yMin = PANEL_HEIGHT * -1 + KEY_RADIUS;
  return (
    <svg
      className='piano'
      viewBox={`0 ${yMin} ${totalWidth} ${WHITE_KEY_HEIGHT + PANEL_HEIGHT}`}
    >
      <g className='keys'>
        {whiteKeys}
        {blackKeys}
      </g>
      <Panel
        y={yMin}
        width={totalWidth}
        height={PANEL_HEIGHT}
        shadowHeight={PANEL_SHADOW_HEIGHT}
        radius={KEY_RADIUS}
      />
    </svg>
  );
};

export default Piano;
