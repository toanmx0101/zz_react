import React, { Component } from 'react';
import '../../styles/Button.css';
import withCalculatorButtonWrapper from '../commons/with_calculator_button_wrapper.jsx'

class NumberButton extends Component {
  
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick} >{this.props.value}</button>
    );
  }
}

const numberButtonWithWrapper = withCalculatorButtonWrapper(NumberButton)

export default numberButtonWithWrapper;
