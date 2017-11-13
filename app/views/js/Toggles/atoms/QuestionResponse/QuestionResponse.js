import React from "react";
import PropTypes from "prop-types";

import styles from "./QuestionResponse.css";

export default class QuestionResponseAtom extends React.Component {
	render() {
		const text = `This answer is ${
			this.props.correct ? "correct!" : "incorrect."
		}`;

		return <div className={styles.answer_text}>{text}</div>;
	}
}

QuestionResponseAtom.propTypes = {
	correct: PropTypes.bool
};
