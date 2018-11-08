import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Houses from './Components/Houses/Houses';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Houses />
      </div>
    );
  }
}

export default App;
