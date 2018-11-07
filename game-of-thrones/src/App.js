import React, { Component } from 'react';
import Characters from './Components/Characters/Characters';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Characters />
      </div>
    );
  }
}

export default App;
