import React, { Component } from 'react';
import './App.css';
import ArrowKeys from './components/ArrowKeys/ArrowKeys'
import AutoToggle from './components/AutoToggle/AutoToggle'
import { publishMessage } from './components/ArrowKeys/ArrowKeys'

function App() {
  const handleArrowClick = (direction) => {
    const topic = 'gardola/controls/arrows';
    console.log(`Arrow clicked: ${direction}`);
    publishMessage(topic, direction);
  };

  const handleAutoToggle = (info) => {
    const topic = 'gardola/controls/toggles';
    console.log(`Button clicked: ${info}`);
    publishMessage(topic, info);
  };

  return (
    <div>
      <ArrowKeys onArrowClick={handleArrowClick} />
      <AutoToggle onAutoToggle={handleAutoToggle} />
    </div>
  );
}

export default App;
