const { fromJS, Map } = require('immutable')

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

const articles = (state = fromJS(initialState), action) => {
  let listArticle = state.get('list')
  switch (action.type) {
    case 'SAVE_EDIT_ARTICLE':
      state = state.setIn(['list', action.payload.position, 'focus'], false )
      state = state.setIn(['list', action.payload.position, 'content'], action.payload.content )
      return state

    case 'CANCEL_EDIT_ARTICLE':
      return state.setIn(['list', action.payload, 'focus'], false )

    case 'EDIT_ARTICLE':
      return state.setIn(['list', action.payload, 'focus'], true )

    case 'DELETE_ARTICLE':
      return state.deleteIn(['list', action.payload])

    case 'NEW_ARTICLE':
      let articles = state.get('list')
      state = state.setIn(['list'], articles.insert(action.payload.position, Map({focus: true, type: action.payload.type, content: ''})))
      return state

    case 'MOVE_UP':
      let articles = listArticle.get(action.payload.position)
      state = state.setIn(['list'], state.get('list').delete(action.payload.position).insert(action.payload.position - 1, old_article))
      return state

    case 'MOVE_DOWN':
      if (action.payload.position < state.get('list').size - 1) {
        return state
      }
      let old_article = state.get('list').get(action.payload.position)
      state = state.setIn(['list'], state.get('list').delete(action.payload.position).insert(action.payload.position + 1, old_article))
      return state

    case 'MOVE_TO_TOP':
      return 

    case 'MOVE_TO_BOTTOM':
      return 

    default:
      return state
  }
}


export default articles
