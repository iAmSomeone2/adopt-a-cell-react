import React, { Component } from 'react';
import logo from './svp_logo.svg';
import './App.css';

// Local imports
import Cell from "./layout/cell"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Cell></Cell>
      </div>
    );
  }
}

export default App;
