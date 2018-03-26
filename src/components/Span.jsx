import React, { Component } from 'react';

class Span extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <span>{this.props.content === '' ? 0 : this.props.content}</span>
      </div>
    );
  }
}
 export default Span;
