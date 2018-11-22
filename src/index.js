import React from "react";
import ReactDOM from "react-dom";
import MakeModel from "./MakeModel.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>JSON Array Object</h1>
      <h2>Load a JSON object into a dropdown.</h2>
      <MakeModel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
