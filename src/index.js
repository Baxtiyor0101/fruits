import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// "export default" qilib export qilingan componenta bolsa uni compennta nomi ozi bn charish kk
// "export"  qilib export qilingan componenta bolsa uni compennta nomini {} qavs ichida charish kk
//
