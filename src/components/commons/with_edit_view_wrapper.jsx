import React from 'react';
import '../../styles/App.css'
import Span from '../Span.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const IMAGE_TYPE = 1
const TEXT_TYPE = 2
const LONG_TEXT_TYPE = 3

function withEditViewWrapper(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Newext_position: props.position,
        content: props.content
      }
      this.onUpSpanClick = this.onUpSpanClick.bind(this)
    }
    onUpSpanClick() {
      this.props.actions.moveUpItem(this.props.position)
    }
    onDownSpanClick() {
      if (this.props.position + 1 < this.props.length) {
        this.props.actions.moveDownItem(this.props.position)
      }
    }
    onTopSpanClick() {
      this.props.actions.moveToTopItem(this.props.position)
    }
    onBottomSpanClick() {
      this.props.actions.moveToBottomItem(this.props.position)
    }
    onDeleteSpanClick() {
      this.props.actions.deleteArticle(this.props.position)
    }
    onEditSpanClick() {
      this.props.actions.editArticle(this.props.position)
    }
    onNewSpanClick() {
    }
    onSaveEditSpanClick() {
      if (this.props.position == this.props.editPosition) {
        this.props.actions.saveEditArticle({position: this.props.position, content: this.props.editContent })
      } else {
        this.props.actions.cancelEditArticle(this.props.position)
      }
    }
    onCancelEditSpanClick() {
      this.props.actions.cancelEditArticle(this.props.position)
    }
    onNewTextSpanClick() {
      this.props.actions.newArticle({position: this.props.position, type: TEXT_TYPE, content: "", position: this.props.position})
    }
    onNewLongTextSpanClick() {
      this.props.actions.newArticle({position: this.props.position, type: LONG_TEXT_TYPE , content: "", position: this.props.position})
    }
    onNewImageSpanClick() {
      this.props.actions.newArticle({position: this.props.position, type: IMAGE_TYPE, content: "", position: this.props.position})
    }
    render() {
      return (
        <div className="wrapper">
          <div className="edit-view">
            {this.props.focus ? (
              <div ref="save_control" className="save-control">
                <Span content="Save" onSpanClick={this.onSaveEditSpanClick.bind(this)}/>
                <Span content="Cancel" onSpanClick={this.onCancelEditSpanClick.bind(this)}/>
              </div>
            ) : (
              <React.Fragment>
                <div ref="edit_control" className="edit-control">
                  <div className="new xx">
                    <Span content="New here" onSpanClick={this.onNewSpanClick.bind(this)}/>
                    <div className="xx"  ref="new_element" className="new-element" >
                      <Span content="New text" onSpanClick={this.onNewTextSpanClick.bind(this)}/>
                      <Span content="New long text" onSpanClick={this.onNewLongTextSpanClick.bind(this)}/>
                      <Span content="New image" onSpanClick={this.onNewImageSpanClick.bind(this)}/>
                    </div>
                  </div>
                  <Span className="xx" content="Edit" onSpanClick={this.onEditSpanClick.bind(this)}/>
                  <Span className="xx" content="Delete" onSpanClick={this.onDeleteSpanClick.bind(this)}/>
                </div>
                <div ref="move_control" className="move-control">
                  <Span content="Up" onSpanClick={this.onUpSpanClick}/>
                  <Span content="Down" onSpanClick={this.onDownSpanClick.bind(this)}/>
                  <Span content="Move bottom" onSpanClick={this.onBottomSpanClick.bind(this)}/>
                  <Span content="Move top" onSpanClick={this.onTopSpanClick.bind(this)}/>
                </div>
              </React.Fragment>  
            )}
            
            
          </div>
          <div className="content" ref="content">
            <WrappedComponent  {...this.props} />
          </div>  
        </div>
      );
    }
  };
}

export default withEditViewWrapper;