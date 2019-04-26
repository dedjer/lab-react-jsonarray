import React from "react";
import data from "./data/cars.json";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.loadModels = this.loadModels.bind(this);
		this.state = {
			cars: [],
			models: []
		};
	}

	loadModels(e) {
		if (e.target.value !== "0") {
			var models = this.state.cars
				.filter(m => m.brand === e.target.value)
				.map(m => m.models);
			this.setState({
				models: models[0]
			});
		} else {
			this.setState({
				models: []
			});
		}
	}
	componentDidMount() {
		this.setState({ cars: data });
	}
	render() {
		return (
			<React.Fragment>
				<div>
					<select onChange={this.loadModels} key="makes">
						<option key="0" value="0">
							select make
						</option>
						{this.state.cars.map(m => (
							<option key={m.brand} value={m.brand}>
								{m.brand}
							</option>
						))}
					</select>
				</div>
				<div>
					<select key="models">
						<option key="0">select model</option>
						{this.state.models.map((val, ind) => (
							<option key={ind} value={val}>
								Index: {ind} Value: {val}
							</option>
						))}
					</select>
				</div>
			</React.Fragment>
		);
	}
}

export default Search;
