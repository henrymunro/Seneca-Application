import React from 'react'

import styles from './QuestionResponse.css'

export default class QuestionResponseAtom extends React.Component {

  render () {

  	const text = `This answer is ${this.props.correct ? 'correct!' : 'incorrect.'}`

    return <div className={styles.answer_text}>
    	{text}
    </div>
  }
}


QuestionResponseAtom.propTypes = {
	correct: React.PropTypes.bool
}
