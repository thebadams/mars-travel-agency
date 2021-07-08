<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
>>>>>>> development-trunk

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <App />
      <GlobalStyle />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

