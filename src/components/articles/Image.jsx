import React, { Component } from 'react';
import '../../styles/Image.css';
import '../../styles/App.css';
import withEditViewWrapper from '../commons/with_edit_view_wrapper.jsx'

class Image extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.focus ? (
          <div className="input">
            <input ref={this.props.inputRef}  type="file" />
          </div>
        ) : (
          <img position={this.props.position} src={this.props.content} />
        )}
        
      </React.Fragment>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
  }
}
const imageWithWrapper = withEditViewWrapper(Image)

export default imageWithWrapper;
