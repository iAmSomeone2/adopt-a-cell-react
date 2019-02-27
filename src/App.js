import React, { Component } from 'react';
// import logo from './svp_logo.svg';
import './App.css';

// Local imports
import Cell from "./layout/cell"
//import CellGrid from "./layout/cellGrid"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Cell className="Cell" index={1} owner={""} claimed={false} size={64}/>
      </div>
    );
  }
}

export default App;
