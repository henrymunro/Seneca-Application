import React from "react";
import PropTypes from "prop-types";

import styles from "./Slider.css";

import Slider from "../../atoms/Slider";
import SliderArea from "../../atoms/SliderArea";
import SliderText from "../../atoms/SliderText";

export default class SliderMolecule extends React.Component {
  render() {
    return (
      <div className={styles.slider}>
        <SliderArea />
        <Slider
          currentOption={this.props.currentOption}
          correct={this.props.correct}
          onClick={this.props.onSliderClick}
        />
        <SliderText
          text={this.props.option_0}
          correct={this.props.correct}
          selected={this.props.currentOption === 0}
        />
        <SliderText
          text={this.props.option_1}
          correct={this.props.correct}
          selected={this.props.currentOption === 1}
          option={1}
        />
      </div>
    );
  }
}

SliderMolecule.propTypes = {
  option_0: PropTypes.string,
  option_1: PropTypes.string,
  currentOption: PropTypes.number,
  correct: PropTypes.bool,
  onSliderClick: PropTypes.func
};
