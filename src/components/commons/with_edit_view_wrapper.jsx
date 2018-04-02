import React from 'react';
import '../../styles/App.css'
import Span from '../Span.jsx'
const IMAGE_TYPE = 1
const TEXT_TYPE = 2
const LONG_TEXT_TYPE = 3

function withEditViewWrapper(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Newext_position: props.position,
        currentPos: props.position,
        content: props.content
      }
      this.onUpSpanClick = this.onUpSpanClick.bind(this)
      this.next_position = this.props.position
    }

    onUpSpanClick() {
      let {currentPos} = this.state
      this.props.handleChangePosition(currentPos - 1, currentPos)
    }

    onDownSpanClick() {
      let {currentPos} = this.state
      if (currentPos + 1 < this.props.length) {
        this.props.handleChangePosition(currentPos + 1, currentPos)  
      }
    }
    onTopSpanClick() {
      let {currentPos} = this.state
      this.props.handleChangePosition(0 , currentPos)
    }
    onBottomSpanClick() {
      let {currentPos} = this.state
      this.props.handleChangePosition(this.props.length - 1 , currentPos)
    }
    onDeleteSpanClick() {
      let {currentPos} = this.state
      this.props.handleDeleteItem(currentPos)
    }
    onEditSpanClick() {
      this.props.handleEditView(this.props.position, true)
    }
    onNewSpanClick() {
    }
    onSaveEditSpanClick() {
      this.props.handleEditContent(this.props.position)
    }
    onCancelEditSpanClick() {
      this.props.handleEditView(this.props.position, false)
    }
    onNewTextSpanClick() {
      let {currentPos} = this.state
      this.props.handleNewElement(currentPos, TEXT_TYPE, "", true)
    }
    onNewLongTextSpanClick() {
      let {currentPos} = this.state
      this.props.handleNewElement(currentPos, LONG_TEXT_TYPE, "", true)
    }
    onNewImageSpanClick() {
      let {currentPos} = this.state
      this.props.handleNewElement(currentPos, IMAGE_TYPE, "", true)
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