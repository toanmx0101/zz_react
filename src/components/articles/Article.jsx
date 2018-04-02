import React, { Component } from 'react';
import Image from './Image.jsx'
import Text from './Text.jsx'
import LongText from './LongText.jsx'
const IMAGE_TYPE = 1
const TEXT_TYPE = 2
const LONG_TEXT_TYPE = 3

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [ 
      { focus: false, type: TEXT_TYPE, id: 2, content: 'mới có học được hai bài thôi. về học chữ cái đi là theo được ấy..'},  
      { focus: false, type: IMAGE_TYPE, id: 1, content: "large-2.jpg" }, 
      { focus: false, type: LONG_TEXT_TYPE, id: 3, content: 'Thông tin cuối cùng là buổi workshop Chia sẻ kỹ năng Tester vẫn sẽ được tổ chức vào sáng thứ 7 tuần này như lịch ban đầu cả nhà nhé. Ngày 31/3/2018 ạ. (dance) Mọi người tham gia đầy đủ theo đăng ký nhé. Còn ai quên chưa đăng ký thì link đây nha: '}]
    }
    this.handleChangePosition = this.handleChangePosition.bind(this)
    this.handleNewElement = this.handleNewElement.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleEditContent = this.handleEditContent.bind(this)
    this.handleEditView = this.handleEditView.bind(this)
    this.array_move = this.array_move.bind(this)
    this.next_position = 0
    this.old_position = 0
  }
  handleChangePosition(next_position, old_position) {
    let state = this.state
    let arr = this.array_move(state.list, old_position, next_position)
    this.setState(...state, arr)
  }
  handleEditContent(position) {
    let state = this.state
    let arr = this.state.list
    if (arr[position].type === TEXT_TYPE || arr[position].type === LONG_TEXT_TYPE) {
      arr[position]['content'] = this.inputElement.value
      arr[position]['focus'] = false
    } else if (arr[position].type === IMAGE_TYPE) {
      let file = this.inputElement.files[0];
      let reader = new FileReader();
      reader.onloadend = function (e) {
        Promise.all([arr[position]['content'] = reader.result]).then(function() {
          arr[position]['focus'] = false
        }, function(e) {
          console.log("NOT LOAD")
        });
        
      };
      reader.readAsDataURL(file);
    }
    this.setState({list: arr})
  }

  handleEditView(position, focus) {
    let arr = this.state.list
    arr[position]['focus'] = focus
    this.setState({list: arr})
  }
  handleNewElement(position, type, content, focus) {
    let state = this.state
    let arr = this.state.list
    if (type === TEXT_TYPE || type === LONG_TEXT_TYPE) {
      arr.splice(position, 0, {type: type, content: content, focus: focus } )
    } else if (type === IMAGE_TYPE) {
      arr.splice(position, 0, {type: type, content: content, focus: focus } )
    }
    this.setState(...state, arr) 
  }
  handleDeleteItem(item_position) {
    let state = this.state
    let arr = this.state.list.splice(item_position, 1)
    this.setState(...state, arr)
  }
  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  };
  render() {
    console.log("Render" + this.state.list.length)
    const listContent = []
    for (var i = 0; i <= this.state.list.length - 1; i++) {
      if (this.state.list[i].type === IMAGE_TYPE) {
        listContent.push(
          <Image
            focus={this.state.list[i].focus}
            content={this.state.list[i].content}
            key={i}
            id={this.state.list[i].id}
            position={i}
            handleChangePosition={this.handleChangePosition}
            inputRef={el => this.inputElement = el}
            length={this.state.list.length}
            type={this.state.list[i].type}
            handleEditContent={this.handleEditContent}
            handleDeleteItem={this.handleDeleteItem}
            handleNewElement={this.handleNewElement}
            handleEditView={this.handleEditView.bind(this)}
          />
        )
      } else if (this.state.list[i].type === TEXT_TYPE) {
        listContent.push(
          <Text
            key={i}
            id={this.state.list[i].id}
            inputRef={el => this.inputElement = el}
            focus={this.state.list[i].focus}
            content={this.state.list[i].content}
            position={i}
            handleChangePosition={this.handleChangePosition}
            length={this.state.list.length}
            type={this.state.list[i].type}
            handleDeleteItem={this.handleDeleteItem}
            handleEditContent={this.handleEditContent}
            handleNewElement={this.handleNewElement}
            handleEditView={this.handleEditView.bind(this)}
            />
          )
      } else if (this.state.list[i].type === LONG_TEXT_TYPE) {
        listContent.push(
          <LongText
            inputRef={el => this.inputElement = el}
            focus={this.state.list[i].focus}
            content={this.state.list[i].content}
            key={i}
            id={this.state.list[i].id}
            position={i}
            handleChangePosition={this.handleChangePosition}
            length={this.state.list.length}
            type={this.state.list[i].type}
            handleDeleteItem={this.handleDeleteItem}
            handleEditContent={this.handleEditContent}
            handleNewElement={this.handleNewElement}
            handleEditView={this.handleEditView}/>)
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

export default Article;