import React, { Component } from 'react';
// import logo from './svp_logo.svg';
import './App.css';

// Local imports
import CellArray from "./layout/array";

class App extends Component {
  render() {
    return (
      <div className="App">
          <CellArray/>
      </div>
    );
  }
}

export default App;
