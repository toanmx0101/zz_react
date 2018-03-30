import React, { Component } from 'react';
import '../../styles/Button.css';
import withCalculatorButtonWrapper from '../commons/with_calculator_button_wrapper.jsx'

class OperandButton extends Component {
  
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

const operandButtonWithWrapper = withCalculatorButtonWrapper(OperandButton)

export default operandButtonWithWrapper;
