import React, { Component } from 'react';
import '../../styles/Image.css';
import '../../styles/App.css';
import withwithEditViewWrapper from '../commons/with_edit_view_wrapper.jsx'

class Text extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.focus ? (
          <div className="input">
            <input ref={this.props.inputRef}  autoFocus type="text" defaultValue={this.props.content}/>
          </div>
        ) : (
          <p position={this.props.position}>{this.props.content}</p>
        )}
      </React.Fragment>
    );
  }
}
const textWithWrapper = withwithEditViewWrapper(Text)

export default textWithWrapper;
