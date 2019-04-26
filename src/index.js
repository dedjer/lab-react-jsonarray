import React from "react";
import ReactDOM from "react-dom";
import ArrayList1 from "./ArrayList1";
import ArrayList2 from "./ArrayList2";
import ArrayList3 from "./ArrayList3";
import "./styles.css";

function App() {
	return (
		<div className="App">
			<h1>JSON Array Object</h1>
			<h2>Load a JSON object into a dropdown.</h2>
			Array List 1: Assigning an array list to a dropdown using map and value.
			<ArrayList1 />
			<br />
			Array List 2: Assigning an array list to a dropdown using map, value, and
			index.
			<ArrayList2 />
			Array List 3: Converting an json array string list object to an array
			object that will allow you to call the map function.
			<ArrayList3 />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
