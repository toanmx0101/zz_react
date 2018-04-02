import React, { Component } from 'react';
import '../../styles/Image.css';
import '../../styles/App.css';
import withwithEditViewWrapper from '../commons/with_edit_view_wrapper.jsx'

class LongText extends Component {
  render() {
    console.log(this.props.focus)
    return (
      <React.Fragment>
        {this.props.focus ? (
          <div lassName="input">
            <textarea ref={this.props.inputRef} autoFocus rows="4" defaultValue={this.props.content}></textarea>
          </div>
        ) : (
          <p position={this.props.position}>{this.props.content}</p>
        )}
        
      </React.Fragment>
    );
  }
}
const textWithWrapper = withwithEditViewWrapper(LongText)

export default textWithWrapper;
