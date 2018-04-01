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
      this.editAction = this.editAction.bind(this)
    }

    onUpSpanClick() {
      console.log("xx")
      let {currentPos} = this.state
      this.props.onChangePosition(currentPos - 1, currentPos)
    }

    onDownSpanClick() {
      console.log("xx")
      let {currentPos} = this.state
      this.props.onChangePosition(currentPos + 1, currentPos)
    }
    onTopSpanClick() {
      let {currentPos} = this.state
      this.props.onChangePosition(0 , currentPos)
    }
    onBottomSpanClick() {
      let {currentPos} = this.state
      this.props.onChangePosition(this.props.length - 1 , currentPos)
    }
    onDeleteSpanClick() {
      let {currentPos} = this.state
      this.props.onDeleteItem(currentPos)
    }
    onEditSpanClick() {
      this.editAction() 
    }
    onNewSpanClick() {
      this.editAction()
    }
    onSaveEditSpanClick() {
      this.editAction()
      if (this.props.type === TEXT_TYPE || this.props.type === LONG_TEXT_TYPE) {
        this.props.onEditContent(this.props.position, this.refs.text_input.value)
      }
    }
    onCancelEditSpanClick() {
      this.editAction()
      if (this.props.type === TEXT_TYPE || this.props.type === LONG_TEXT_TYPE) {
       this.refs.text_input.value = this.props.content
      }
    }
    editAction() {
      this.refs.input.classList.toggle('active')
      if (this.props.type === TEXT_TYPE || this.props.type === LONG_TEXT_TYPE) {
        this.refs.text_input.focus()
      }
      this.refs.content.classList.toggle('disabled')
      this.refs.save_control.classList.toggle('disabled')
      this.refs.edit_control.classList.toggle('disabled')
      this.refs.move_control.classList.toggle('disabled')
    }
    render() {
      console.log("Wrap render" + this.props.type)
      let input
      if (this.props.type == TEXT_TYPE) {
        input = <input ref="text_input" type="text" defaultValue={this.props.content}/>
      } else if (this.props.type == LONG_TEXT_TYPE) {
        input = <textarea ref="text_input"  rows="4" defaultValue={this.props.content}></textarea>
      } else if (this.props.type == IMAGE_TYPE) {
        input = <input type="file" />
      }
      return (
        <div className="wrapper">
          <div ref="input" className="input disabled">
            {input}
          </div>
          <div className="edit-view">
            <div ref="save_control" className="save-control disabled">
              <Span content="Save" onSpanClick={this.onSaveEditSpanClick.bind(this)}/>
              <Span content="Cancel" onSpanClick={this.onCancelEditSpanClick.bind(this)}/>  
            </div>
            <div ref="edit_control" className="edit-control">
              <Span content="New here" onSpanClick={this.onNewSpanClick.bind(this)}/>
              <Span content="Edit" onSpanClick={this.onEditSpanClick.bind(this)}/>
              <Span content="Delete" onSpanClick={this.onDeleteSpanClick.bind(this)}/>
            </div>
            <div ref="move_control" className="move-control">
              <Span content="Up" onSpanClick={this.onUpSpanClick}/>
              <Span content="Down" onSpanClick={this.onDownSpanClick.bind(this)}/>
              <Span content="Move bottom" onSpanClick={this.onBottomSpanClick.bind(this)}/>
              <Span content="Move top" onSpanClick={this.onTopSpanClick.bind(this)}/>
            </div>
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