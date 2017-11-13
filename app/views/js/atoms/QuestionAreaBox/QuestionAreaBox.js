import React from "react";

import styles from "./QuestionAreaBox.css";

export default class QuestionsAreaBoxAtom extends React.Component {
  render() {
    // Update background colour when correct
    const answer_style = this.props.correct ? styles.correct : styles.incorrect;

    return (
      <div className={`${styles.Mask} ${answer_style}`}>
        {this.props.children}
      </div>
    );
  }
}

QuestionsAreaBoxAtom.propTypes = {
  correct: React.PropTypes.bool
};
