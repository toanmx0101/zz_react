import React, { Component } from 'react';
import '../../styles/Image.css';
import '../../styles/App.css';
import withEditViewWrapper from '../commons/with_edit_view_wrapper.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LongText extends Component {
  handleChange(event) {
    this.props.handleChangeInput(event, this.props.position)
  }
  render() {
    return (
      <React.Fragment>
        {this.props.focus ? (
          <div lassName="input">
            <textarea ref={this.props.inputRef} autoFocus rows="4" defaultValue={this.props.content} onChange={this.handleChange.bind(this)}></textarea>
          </div>
        ) : (
          <p position={this.props.position}>{this.props.content}</p>
        )}
        
      </React.Fragment>
    );
  }
}

const imageWithWrapper = withEditViewWrapper(LongText)

const longTextRedux = connect(
  (state) => {
    return {
      list: state.articles.list
    }
  },
  (dispatch) => ({
    actions: bindActionCreators(require('../../actions'), dispatch),
  })
)(imageWithWrapper)




export default longTextRedux;
