import articles from '../api/articles'
import * as types from '../constants/ActionTypes'

const receiveArticles = articles => ({
  type: types.RECEIVE_ARTICLES,
  payload: articles
})

export const getAllArticles = () => dispatch => {
  articles.getArticles(articles => {
    dispatch(receiveArticles(articles))
  })
}

export const deleteArticle = position => ({
  type: types.DELETE_ARTICLE,
  payload: position
})

export const moveUpItem = position => ({
  type: types.MOVE_UP,
  payload: position
})

export const moveDownItem = position => ({
  type: types.MOVE_DOWN,
  payload: position
})

export const moveToTopItem = position => ({
  type: types.MOVE_TO_TOP,
  payload: position
})
export const moveToBottomItem = position => ({
  type: types.MOVE_TO_BOTTOM,
  payload: position
})

export const saveEditArticle = article => ({
  type: types.SAVE_EDIT_ARTICLE,
  payload: article
})
export const newArticle = article => ({
  type: types.NEW_ARTICLE,
  payload: article
})
export const editArticle = position => ({
  type: types.EDIT_ARTICLE,
  payload: position
})
export const cancelEditArticle = position => ({
  type: types.CANCEL_EDIT_ARTICLE,
  payload: position
})
