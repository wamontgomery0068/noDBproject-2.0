import React, { Component } from 'react';
import CharactersList from './Components/CharactersList/CharactersList';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CharactersList />
      </div>
    );
  }
}

export default App;
