import React, { Component } from 'react';
import '../../styles/Image.css';
import '../../styles/App.css';
import withEditViewWrapper from '../commons/with_edit_view_wrapper.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Map, List } from 'immutable'
class Text extends Component {

  handleChange(event) {
    this.props.handleChangeInput(event, this.props.position)
  }
  render() {
    return (
      <React.Fragment>
        {this.props.focus ? (
          <div className="input">
            <input ref={this.props.inputRef}  autoFocus type="text" defaultValue={this.props.content} onChange={this.handleChange.bind(this)} />
          </div>
        ) : (
          <p position={this.props.position}>{this.props.content}</p>
        )}
      </React.Fragment>
    );
  }
}


const textWithWrapper = withEditViewWrapper(Text)

const textRedux = connect(
  (state) => {

    return {
      list: state.articles.get('list')
    }
  },
  (dispatch) => ({
    actions: bindActionCreators(require('../../actions'), dispatch),
  })
)(textWithWrapper)



export default textRedux;

