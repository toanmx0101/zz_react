import React, { Component } from 'react';
import '../styles/Button.css';
import PropTypes from 'prop-types';

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
      <button ref={this.props.buttonRef} className={this.props.className} onClick={this.handleClick}>{this.props.value}</button>
    );
  }
}
Button.defaultProps = {
  onButtonClick: () => {},
}
Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  className: PropTypes.string
}

export default Button;
