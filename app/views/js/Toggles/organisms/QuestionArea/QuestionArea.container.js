import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as selectors from "../../reducer";
import actions from "../../actions";

import QuestionAreaBox from "../../atoms/QuestionAreaBox";
import QuestionResponse from "../../atoms/QuestionResponse";
import QuestionText from "../../atoms/QuestionText";

import SlidersGroup from "../SlidersGroup";

import styles from "./QuestionArea.css";

class QuestionsAreaOrganism extends React.Component {
  render() {
    return (
      <div className={styles.question_area_div}>
        <QuestionAreaBox correct={this.props.allQuestionsCorrect}>
          <QuestionText text={this.props.question.question} />
          <SlidersGroup
            options={this.props.question.options}
            onSliderClick={this.props.onSliderClick}
            allQuestionsCorrect={this.props.allQuestionsCorrect}
          />
          <QuestionResponse correct={this.props.allQuestionsCorrect} />
        </QuestionAreaBox>
      </div>
    );
  }
}

QuestionsAreaOrganism.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        option_0: PropTypes.string,
        option_1: PropTypes.string,
        currentOption: PropTypes.number,
        correctOption: PropTypes.number
      })
    )
  }),
  allQuestionsCorrect: PropTypes.bool
};

@connect((store, ownProps) => {
  return {
    question: selectors.getQuestion(store),
    allQuestionsCorrect: selectors.getAllQuestionsCorrect(store)
  };
}, Object.assign({}, actions))
export default class QuestionsAreaOrganismContainer extends React.Component {
  render() {
    return <QuestionsAreaOrganism {...this.props} />;
  }
}
