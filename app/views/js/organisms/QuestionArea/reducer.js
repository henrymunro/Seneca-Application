import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'


const question = {
	question: 'Ideal conditions for bacterial growth',
	options: [{
	  		option_0: 'Cold',
			option_1: 'Warm',
			currentOption: 0,
			correctOption: 1
	  	},{
	  		option_0: 'No water',
			option_1: 'Water',
			currentOption: 0,
			correctOption: 1
	  	},{
	  		option_0: 'No food',
			option_1: 'Food',
			currentOption: 1,
			correctOption: 1
	  	}]
}

const initialState = {
	question
}


export default handleActions({
	ON_SLIDER_CLICK: (state, action) => onSliderClick(state, action),

}, initialState)

// Move slider on click
const onSliderClick = (state, action) => {
	// Pull out key of question from action payload	
	const key = action.payload

	// Find question and toggle currentOption
	const nextOptionsState = state.question.options.map((option, optKey) => {
		if(optKey === key) {
			return Object.assign({}, option, {currentOption: option.currentOption === 1 ? 0 : 1})
		} 
		return option
	})

	const nextQuestionState = Object.assign({}, state.question, {options: nextOptionsState})
	return Object.assign({}, state, {question: nextQuestionState})

}


/*  #############       Selectors     ################   */
export const getQuestion = state => (state.questionArea.question)
export const getAllQuestionsCorrect = state => {
    let correct = true
    // Loop over all options and look for any incorrect answers
    state.questionArea.question.options.map(option => {
      const {correctOption, currentOption} = option
      if (correctOption != currentOption) {
        correct = false
      }
    }) 

    return correct
}


