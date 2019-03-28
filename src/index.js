import React from 'react';
import WebFont from "webfontloader";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

WebFont.load({
  google: {
    families: ["Open Sans", "Roboto", "Source Sans Pro:400,600"],
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
