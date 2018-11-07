import React, { Component } from 'react';
import CharactersList from './Components/CharactersList/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharactersList />
      </div>
    );
  }
}

export default App;
