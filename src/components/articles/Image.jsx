import React, { Component } from 'react';
import '../../styles/Image.css';
import '../../styles/App.css';
import withEditViewWrapper from '../commons/with_edit_view_wrapper.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Map, List } from 'immutable'

class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
    let {imagePreviewUrl} = this.state
    this.props.handleChangeInput(e, this.props.position, imagePreviewUrl)
  }
  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} />);
    }
    return (
      <React.Fragment>
        {this.props.focus ? (
          <div className="input">
            <input ref={this.props.inputRef}  type="file" onChange={this.handleChange.bind(this)}/>
            {imagePreview}
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

const imageRedux = connect(
  (state) => {
    return {
      list: state.articles.get('list')
    }
  },
  (dispatch) => ({
    actions: bindActionCreators(require('../../actions'), dispatch),
  })
)(imageWithWrapper)



export default imageRedux;

