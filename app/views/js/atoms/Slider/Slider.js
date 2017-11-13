import React from "react";
import PropTypes from "prop-types";

import styles from "./Slider.css";

export default class SliderAtom extends React.Component {
  // Opacity dip on hover of slider element
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  onMouseEnter() {
    this.setState({ hovered: true });
  }

  onMouseLeave() {
    this.setState({ hovered: false });
  }

  // Slider moves left or right on click
  onClick() {
    this.props.onClick();
  }

  render() {
    // Add hover class if necessary
    let divClass = `${styles.slider} ${this.state.hovered && styles.hovered}`;

    // Determine position of slider, slide on click
    if (this.props.currentOption === 1) {
      divClass = `${divClass} ${styles.slider_right_margin}`;
    }

    return (
      <div
        className={divClass}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        onClick={this.onClick.bind(this)}
      />
    );
  }
}

SliderAtom.propTypes = {
  currentOption: PropTypes.number,
  onClick: PropTypes.func
};
