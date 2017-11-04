import React from 'react'

import styles from './SliderArea.css'


export default class SliderAreaAtom extends React.Component {

  render () {

    return <div className={styles.slider_area}>
    	{this.props.children}
    </div>
  }
}


SliderAreaAtom.propTypes = {


}
