import React from 'react'

import styles from './Slider.css'

import Slider from '../../atoms/Slider'
import SliderArea from '../../atoms/SliderArea'
import SliderText from '../../atoms/SliderText'

export default class SliderMolecule extends React.Component {

  render () {

    return <div className={styles.slider}>
    	<SliderArea/>
    	<Slider 
	    	currentOption={this.props.currentOption} 
	    	correct={this.props.correct} 
	    	onClick={this.props.onSliderClick}/>
		<SliderText 
			text={this.props.option_0} 
			correct={this.props.correct}
			selected={this.props.currentOption === 0}/>
		<SliderText 
			text={this.props.option_1} 
			correct={this.props.correct} 
			selected={this.props.currentOption === 1}
			option={1} />
    </div>
  }
}


SliderMolecule.propTypes = {
	option_0: React.PropTypes.string,
	option_1: React.PropTypes.string,
	currentOption: React.PropTypes.number,
	correct: React.PropTypes.bool,
	onSliderClick: React.PropTypes.func

}
