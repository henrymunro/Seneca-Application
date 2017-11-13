import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./SliderText.css";

export default class SliderTextAtom extends React.Component {
  render() {
    // Assemble neccessary text classes
    const textClass = cx({
      // General styling
      [styles.general_text]: true,

      // Styling dependant on if option 1 or 2
      [styles.text_left]: !(this.props.option === 1),
      [styles.text_right]: this.props.option === 1,

      // Styling dependant of if answers are correcr
      [styles.correct]: this.props.correct,
      [styles.incorrect]: !this.props.correct,

      // Styling dependant on if the option is currently selected
      [styles.not_selected]: !this.props.selected
    });

    return <div className={textClass}>{this.props.text}</div>;
  }
}

SliderTextAtom.propTypes = {
  text: PropTypes.string,
  option: PropTypes.number,
  correct: PropTypes.bool,
  selected: PropTypes.bool
};
