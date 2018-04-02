import React, { Component } from 'react';
import '../../styles/Button.css';
import withCalculatorButtonWrapper from '../commons/with_calculator_button_wrapper.jsx'

class EqualButton extends Component {
  
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

const equalButtonWithWrapper = withCalculatorButtonWrapper(EqualButton)

export default equalButtonWithWrapper;
