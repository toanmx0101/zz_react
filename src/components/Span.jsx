import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Span extends Component {
  constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
  handleClick(event) {
    this.props.onSpanClick(event)
  }
  render() {
    return (
      <div className={this.props.className}>
        <span onClick={this.handleClick}>{this.props.content === '' ? 0 : this.props.content}</span>
      </div>
    );
  }
}
Span.defaultProps = {
}
Span.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ])
}
export default Span;
