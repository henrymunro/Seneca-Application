import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import { markQuestion, randomiseInitialAnswers } from "./methods";

const initialState = {
  question: {
    question: "",
    options: []
  },
  answers: [],
  marks: {
    allAnswersCorrect: false,
    markBreakDown: []
  }
};

export default handleActions(
  {
    ON_QUESTION_LOAD: (state, action) => onQuestionLoad(state, action),
    ON_SLIDER_CLICK: (state, action) => onSliderClick(state, action)
  },
  initialState
);

/*  #############   Reducer Actions  ################   */

// Initialised question object and answers array when passed from external source
const onQuestionLoad = (state, action) => {
  // Initialise the random answers and marking object
  const initialAnswers = randomiseInitialAnswers(action.payload.options);
  return Object.assign(state, {
    question: action.payload,
    answers: initialAnswers,
    marks: markQuestion(action.payload.options, initialAnswers)
  });
};

// Move slider on click
const onSliderClick = (state, action) => {
  // Pull out key of question from action payload
  const key = action.payload;

  // Find question and toggle currentOption
  const nextAnswersState = state.answers.map((option, optKey) => {
    if (optKey === key) {
      return Object.assign({}, option, {
        currentOption: option.currentOption === 1 ? 0 : 1
      });
    }
    return option;
  });

  // Mark new answers
  const nextMarksState = markQuestion(state.question.options, nextAnswersState);
  return Object.assign({}, state, {
    answers: nextAnswersState,
    marks: nextMarksState
  });
};

/*  #############       Selectors     ################   */
export const getQuestion = state => state.toggles.question;
export const getAnswers = state => state.toggles.answers;
export const getAllQuestionsCorrect = state =>
  state.toggles.marks.allAnswersCorrect;
