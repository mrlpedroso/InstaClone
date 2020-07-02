import {ADD_POST, ADD_COMMENT} from '../actions/actionTypes'
import { act } from 'react-test-renderer'

const initialState = {
  posts: [{
    id: Math.random(),
    nickname: 'Rafael',
    email: 'rafinha@gmail.com',
    image: require('../../../assets/imgs/fence.jpg'),
    comments: [{
      nickname: 'João',
      comment: 'Engraçado de mais'
    }, {
      nickname: 'Henrique',
      comment: 'Cercadinho maneiro'
    }]
  }, {
    id: Math.random(),
    nickname: 'Barreto',
    email: 'barretao@gmail.com',
    image: require('../../../assets/imgs/bw.jpg'),
    comments: [{
      nickname: 'Crazy21',
      comment: 'Pasto ta seco em'
    }]
  }]  
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload          
        })
      }
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment)
            }
            else {
              post.comments = [action.payload.comment]
            }
          }
          return post
        })
      }
    default:
      return state
  }
}

export default reducer