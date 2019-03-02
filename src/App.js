import React, { Component } from 'react';
// import logo from './svp_logo.svg';
import './App.css';

// Local imports
import SubGrid from "./layout/subGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
          <SubGrid className="SubGrid" rowNum={5} colNum={3}/>
          <SubGrid className="SubGrid" rowNum={5} colNum={5}/>
      </div>
    );
  }
}

export default App;
