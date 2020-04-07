import React from 'react';
import logo from './logo.svg';
import './App.css';
import Deck from './Components/Deck';
import DeckCreate from './Components/DeckCreate';

function App() {
  return (
    <div className="App">      
      <DeckCreate/>
      <Deck/>
    </div>
  );
}

export default App;
