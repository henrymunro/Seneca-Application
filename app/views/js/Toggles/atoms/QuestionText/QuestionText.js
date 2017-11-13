import React from "react";
import PropTypes from "prop-types";

import styles from "./QuestionText.css";

export default class QuestionTextAtom extends React.Component {
	render() {
		return <div className={styles.text}>{this.props.text}</div>;
	}
}

QuestionTextAtom.propTypes = {
	text: PropTypes.string
};
