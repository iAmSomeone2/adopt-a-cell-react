import React, { Component } from 'react';
// import logo from './svp_logo.svg';
import './App.css';

// Local imports
import CellArray from "./layout/array";
import DetailWindow from "./detailWindow";
import Info from "./info";

class App extends Component {
  _detailRef = React.createRef();

  render() {
    return (
      <div className={"App"} >
        <div className={"container"}>
          <div className={"cell-array"}>
            <CellArray detailRef={this._detailRef}/>
            <div className={"detail-window"}>
              <DetailWindow ref={this._detailRef}/>
            </div>
            <div className={"info-display"}>
              <Info/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
