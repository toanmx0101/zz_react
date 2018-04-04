const initialState = {
  list: [ 
    { "focus": false, "type": 2, "id": 1, "content": "mới có học được hai bài thôi. về học chữ cái đi là theo được ấy.."},  
    { "focus": false, "type": 1, "id": 2, "content": "large-2.jpg"},
    { "focus": false, "type": 3, "id": 3, "content": "Thông tin cuối cùng là buổi workshop Chia sẻ kỹ năng Tester vẫn sẽ được tổ chức vào sáng thứ 7 tuần này như lịch ban đầu cả nhà nhé. Ngày 31/3/2018 ạ. (dance) Mọi người tham gia đầy đủ theo đăng ký nhé. Còn ai quên chưa đăng ký thì link đây nha: "},
    { "focus": false, "type": 3, "id": 4, "content": "Thông tin cuối cùng là buổi workshop "}
  ]
}

const arrayMove =  (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_EDIT_ARTICLE':
      state.list[action.payload.position].focus = false
      state.list[action.payload.position].content = action.payload.content
      return {
        ...state,
        list: JSON.parse(JSON.stringify(state.list))
      }

    case 'CANCEL_EDIT_ARTICLE':
      state.list[action.payload].focus = false
      return {
        ...state,
        list: JSON.parse(JSON.stringify(state.list))
      }

    case 'EDIT_ARTICLE':
      state.list.forEach(function(element) {
        element.focus = false
      });
      state.list[action.payload].focus = true
      return {
        ...state,
        list: JSON.parse(JSON.stringify(state.list))
      }
    case 'DELETE_ARTICLE':
      return {
        ...state,
        list: state.list.filter(article => article !== state.list[action.payload])
      }
    case 'NEW_ARTICLE':
      state.list.splice(action.payload.position, 0, ({ focus: true, content: action.payload.content, type: action.payload.type }))
      console.log(state.list)
      return {
      ...state,
        list: JSON.parse(JSON.stringify(state.list))
      }
      
    case 'MOVE_UP':
      return { ...state,
        list: JSON.parse(JSON.stringify(arrayMove(state.list, action.payload, action.payload - 1 )))
      }
      
    case 'MOVE_DOWN':
      return {
        ...state,
        list: JSON.parse(JSON.stringify(arrayMove(state.list, action.payload, action.payload  + 1 )))
      }

    case 'MOVE_TO_TOP':
      return {
        ...state,
        list: JSON.parse(JSON.stringify(arrayMove(state.list, action.payload, 0 )))
      }

    case 'MOVE_TO_BOTTOM':
      return {
        ...state,
        list: JSON.parse(JSON.stringify(arrayMove(state.list, action.payload, state.list.length - 1 )))
      }
    
    default:
      return state
  }
}


export default articles
