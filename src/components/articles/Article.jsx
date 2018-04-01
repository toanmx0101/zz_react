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
      list: [ {type: TEXT_TYPE, id: 2, content: 'mới có học được hai bài thôi. về học chữ cái đi là theo được ấy..'},  { type: IMAGE_TYPE, id: 1, content: "large-2.jpg" }, {type: LONG_TEXT_TYPE, id: 3, content: 'Thông tin cuối cùng là buổi workshop Chia sẻ kỹ năng Tester vẫn sẽ được tổ chức vào sáng thứ 7 tuần này như lịch ban đầu cả nhà nhé. Ngày 31/3/2018 ạ. (dance) Mọi người tham gia đầy đủ theo đăng ký nhé. Còn ai quên chưa đăng ký thì link đây nha: '}]
    }
    this.onChangePosition = this.onChangePosition.bind(this)
    this.onDeleteItem = this.onDeleteItem.bind(this)
    this.onEditContent = this.onEditContent.bind(this)
    this.array_move = this.array_move.bind(this)
    this.next_position = 0
    this.old_position = 0
  }
  onChangePosition(next_position, old_position) {
    console.log( next_position+ "xxxx" + old_position)

    let state = this.state
    console.log("state:", state)
    let arr = this.array_move(state.list, old_position, next_position)
    this.setState(...state, arr)
  }
  onEditContent(position, new_content) {
    let state = this.state
    let arr = this.state.list
    arr[position]['content'] = new_content
    this.setState(...state, arr)
  }
  onDeleteItem(item_position) {
    let state = this.state
    let arr = this.state.list.splice(item_position, 1)
    this.setState(...state, arr)
  }
  array_move(arr, old_index, new_index) {
    console.log("arr", {arr, old_index, new_index})
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
    console.log("Rerender")
    const listContent = []
    for (var i = 0; i <= this.state.list.length - 1; i++) {
      if (this.state.list[i].type === IMAGE_TYPE) {
        
        listContent.push(<Image content={this.state.list[i].content} key={i} id={this.state.list[i].id} position={i} onChangePosition={this.onChangePosition} length={this.state.list.length} type={this.state.list[i].type} onDeleteItem={this.onDeleteItem}/>)
      } else if (this.state.list[i].type === TEXT_TYPE) {

        listContent.push(<Text content={this.state.list[i].content} key={i} id={this.state.list[i].id} position={i} onChangePosition={this.onChangePosition} length={this.state.list.length} type={TEXT_TYPE} type={this.state.list[i].type} onDeleteItem={this.onDeleteItem} onEditContent={this.onEditContent}/>)
      } else if (this.state.list[i].type === LONG_TEXT_TYPE) {

        listContent.push(<LongText content={this.state.list[i].content} key={i} id={this.state.list[i].id} position={i} onChangePosition={this.onChangePosition} length={this.state.list.length} type={LONG_TEXT_TYPE} type={this.state.list[i].type} onDeleteItem={this.onDeleteItem} onEditContent={this.onEditContent}/>)
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