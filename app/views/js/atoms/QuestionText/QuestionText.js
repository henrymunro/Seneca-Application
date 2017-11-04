import React from 'react'
import styles from './QuestionText.css'


export default class QuestionTextAtom extends React.Component {

  render () {


    return <div className={styles.text}>
    	{this.props.text}
    </div>
  }
}


QuestionTextAtom.propTypes = {
	text: React.PropTypes.string,
}
