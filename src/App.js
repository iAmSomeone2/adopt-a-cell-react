import React, { Component } from 'react';
// import logo from './svp_logo.svg';
import './App.css';

// Local imports
import CellArray from "./layout/array";
import DetailCell from "./layout/detailCell";

class App extends Component {
  _overlay = React.createRef();

  render() {
    return (
      <div className="App">
          <CellArray className={"center-div"}/>
          <div id={"overlay"}>
              <DetailCell/>
          </div>
      </div>
    );
  }
}

export default App;
