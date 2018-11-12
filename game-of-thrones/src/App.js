import React, { Component } from 'react';
import Header from './Components/Header/Header';
import HouseList from './Components/HouseList/HouseList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HouseList />
      </div>
    );
  }
}

export default App;
