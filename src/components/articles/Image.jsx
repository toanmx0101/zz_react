import React, { Component } from 'react';
import '../../styles/Image.css';
import '../../styles/App.css';
import withEditViewWrapper from '../commons/with_edit_view_wrapper.jsx'

class Image extends Component {
  // componentWillUpdate(nextProps, nextStates) {
  //   console.log("WILL UPDATE")
  //   console.log(nextProps)
  //   this.props.onChangePosition(nextProps.next_position, nextProps.position)
  // }
  render() {
    return (
      <img position={this.props.position} src={this.props.content}/>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("DID UPDATE")
    console.log(prevProps)
  }
}
const imageWithWrapper = withEditViewWrapper(Image)

export default imageWithWrapper;
