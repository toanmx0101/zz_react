import React, { Component } from 'react';
import '../../styles/Image.css';
import '../../styles/App.css';
import withwithEditViewWrapper from '../commons/with_edit_view_wrapper.jsx'

class LongText extends Component {
  
  render() {
    return (
      <p position={this.props.position}>{this.props.content}</p>
    );
  }
}
const textWithWrapper = withwithEditViewWrapper(LongText)

export default textWithWrapper;
