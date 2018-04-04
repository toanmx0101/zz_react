import React, { Component } from 'react';
import Image from './Image.jsx'
import Text from './Text.jsx'
import LongText from './LongText.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const IMAGE_TYPE = 1
const TEXT_TYPE = 2
const LONG_TEXT_TYPE = 3

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate() {
  }
  handleChangeInput(event, position, imagePreviewUrl) {
    this.setState({editPosition: position})
    if (event.target.value) {
      this.setState({editContent: event.target.value})  
    } else {
      this.setState({editContent: imagePreviewUrl})  
    }
    
  }
  render() {
    const listContent = []
    for (var i = 0; i <= this.props.list.length - 1; i++) {
      if (this.props.list[i].type === IMAGE_TYPE) {
        listContent.push(
          <Image
            focus={this.props.list[i].focus}
            content={this.props.list[i].content}
            key={i}
            id={this.props.list[i].id}
            position={i}
            length={this.props.list.length}
            type={this.props.list[i].type}
            editPosition={this.state.editPosition}
            editContent={this.state.editContent}
            handleChangeInput={this.handleChangeInput.bind(this)}
          />
        )
      } else if (this.props.list[i].type === TEXT_TYPE) {
        listContent.push(
          <Text
            key={i}
            id={this.props.list[i].id}
            focus={this.props.list[i].focus}
            content={this.props.list[i].content}
            position={i}
            length={this.props.list.length}
            type={this.props.list[i].type}
            editPosition={this.state.editPosition}
            editContent={this.state.editContent}
            handleChangeInput={this.handleChangeInput.bind(this)}
            />
          )
      } else if (this.props.list[i].type === LONG_TEXT_TYPE) {
        listContent.push(
          <LongText
            focus={this.props.list[i].focus}
            content={this.props.list[i].content}
            key={i}
            id={this.props.list[i].id}
            position={i}
            length={this.props.list.length}
            type={this.props.list[i].type}
            editPosition={this.state.editPosition}
            editContent={this.state.editContent}
            handleChangeInput={this.handleChangeInput.bind(this)}
            />
          )
      }
    }
    return (
      <React.Fragment>
        <button>Edit article</button>
        <h2>List Articles</h2><br></br>
        {listContent}
      </React.Fragment>
    );
  }
}
export default connect(
  (state) => {
    return {
      list: state.articles.list
    }
  },
  (dispatch) => ({
    actions: bindActionCreators(require('../../actions'), dispatch),
  })
)(Article)
