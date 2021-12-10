import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import 'react-phone-number-input/style.css'

// import Tabs from "./Tabs";

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
      
     
    </BrowserRouter>
    
  </>,
  document.getElementById("root")
);
