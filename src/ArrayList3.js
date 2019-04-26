import React from "react";

class ArrayList3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jsonListString: `{"Apples", "Oranges", "Pears"}`
		};
	}
	componentDidMount() {
		this.setState({
			jsonListString: JSON.parse("[" + this.state.jsonListString + "]")
		});
	}
	render() {
		return (
			<React.Fragment>
				{this.state.jsonListString.split(",").map((val, ind) => (
					<div key={ind}>
						Index: {ind} &nbsp; Value: {val}
					</div>
				))}
			</React.Fragment>
		);
	}
}

export default ArrayList3;
