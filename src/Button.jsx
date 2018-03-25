import React, { Component } from 'react';
import './Button.css';
const NUMBERS = [1, 2, 3, 4, 5];

class Button extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onButtonClick(event, this.props.value)
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.value}</button>
    );
  }
}
 export default Button;
