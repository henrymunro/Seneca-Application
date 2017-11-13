import React from "react";
import PropTypes from "prop-types";

import Slider from "../../molecules/Slider";

import styles from "./SlidersGroup.css";

export default class SlidersGroupOrganism extends React.Component {
  assembleSliders() {
    // Assembles the sliders from the list of questions pulled from the store
    const Sliders = this.props.options.map((option, key) => {
      return (
        <Slider
          {...option}
          onSliderClick={() => this.props.onSliderClick(key)}
          correct={this.props.allQuestionsCorrect}
          currentOption={this.props.answers[key].currentOption}
          key={key}
        />
      );
    });

    return <div className={styles.sliders_div}>{Sliders}</div>;
  }

  render() {
    return (
      <div className={styles.sliders_div_wrapper}>
        <div className={styles.slider_border} />
        {this.assembleSliders.bind(this)()}
        <div className={styles.slider_border} />
      </div>
    );
  }
}

SlidersGroupOrganism.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option_0: PropTypes.string,
      option_1: PropTypes.string,
      correctOption: PropTypes.number
    })
  ),
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      optionKey: PropTypes.number,
      currentOption: PropTypes.number
    })
  ),
  onSliderClick: PropTypes.func,
  allQuestionsCorrect: PropTypes.bool
};
