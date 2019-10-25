import React from 'react';
import Piano from './Components/Piano/piano';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header container'>
          <Piano keys={37} />
      </header>
    </div>
  );
}

export default App;
