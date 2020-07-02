import {ADD_POST, ADD_COMMENT} from './actionTypes'
import axios from 'axios'

export const addPost = post => {

///Objeto action///
//  return {
//    type: ADD_POST,
//    payload: post
//  }

  return dispatch => {
    axios.post('/posts.json', {...post})
      .catch(err => console.log(err))
      .then(res => console.log('teste')
    )
  }
}

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  }
}