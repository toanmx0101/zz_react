import React, { Component } from 'react';
import '../styles/Button.css';

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
      <button className={this.props.className} onClick={this.handleClick}>{this.props.value}</button>
    );
  }
}
 export default Button;
