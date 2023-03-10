import React from "react";
import ReactDOM from "react-dom/client";

import "./pattern-lib/styles/index.css";
import "./pattern-lib/styles/font.css";
import "./pattern-lib/styles/color.css";
import "./pattern-lib/styles/flex.css";
import "./pattern-lib/styles/misc.css";
import "./pattern-lib/styles/padding-margin.css";

import HomePage from "./components/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
