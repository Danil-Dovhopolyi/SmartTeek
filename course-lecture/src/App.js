import React, { useState } from 'react';
import './App.css';
import Tabs from './Tabs';
import ThemeContext, { themes } from './ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value={themes}>
      <Tabs />
    </ThemeContext.Provider>
  );
}

export default App;
