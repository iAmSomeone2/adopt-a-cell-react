import React, { Component } from 'react';
// import logo from './svp_logo.svg';
import './App.css';

// Local imports
import CellArray from "./layout/array";
import DetailCell from "./layout/detailCell";

class App extends Component {
  _cellOverlay = React.createRef();

  render() {
    return (
      <div className="App">
          <CellArray className={"center-div"} cellDetail={this._cellOverlay}/>
          <div id={"overlay"} ref={this._cellOverlay}>
              <DetailCell/>
          </div>
      </div>
    );
  }
}

export default App;
