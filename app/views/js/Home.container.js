import React from "react";
import { connect } from "react-redux";

import Toggles from "./Toggles";
import { actions as togglesActions } from "./Toggles";

@connect((store, ownProps) => {
	return {};
}, Object.assign({}, togglesActions))
export default class Home extends React.Component {
	componentWillMount() {
		// Simulate questions being handed to toggle module from API call
		const question = {
			question: "Ideal conditions for bacterial growth",
			options: [
				{
					option_0: "Cold",
					option_1: "Warm",
					correctOption: 1
				},
				{
					option_0: "No water",
					option_1: "Water",
					correctOption: 1
				},
				{
					option_0: "No food",
					option_1: "Food",
					correctOption: 1
				}
			]
		};

		// Call toggles action to load question into toggles reducer
		this.props.onQuestionLoad(question);
	}

	render() {
		return (
			<div>
				<Toggles />
			</div>
		);
	}
}
