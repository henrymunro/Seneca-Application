import React from "react";
import cx from "classnames";

import styles from "./SliderText.css";

export default class SliderTextAtom extends React.Component {
  render() {
    // Assemble neccessary text classes
    const textClass = cx({
      // General styling
      [styles.general_text]: true,

      // Styling dependant on if option 1 or 2
      [styles.text_margin_left]: !(this.props.option === 1),
      [styles.text_margin_right]: this.props.option === 1,

      // Styling dependant of if answers are correcr
      [styles.correct]: this.props.correct,
      [styles.incorrect]: !this.props.correct,

      // Styling dependant on if the option is currently selected
      [styles.not_selected]: !this.props.selected
    });

    return (
      <div className={styles.box_position}>
        <div className={textClass}>{this.props.text}</div>
      </div>
    );
  }
}

SliderTextAtom.propTypes = {
  text: React.PropTypes.string,
  option: React.PropTypes.number,
  correct: React.PropTypes.bool,
  selected: React.PropTypes.bool
};
