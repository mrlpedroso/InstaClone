import {ADD_POST, ADD_COMMENT} from './actionTypes'
import axios from 'axios'

export const addPost = post => {

///Objeto action///
//  return {
//    type: ADD_POST,
//    payload: post
//  }

  //https://us-central1-instaclone-f7b13.cloudfunctions.net/uploadImage
  axios({
    url: 'uploadImage',
    baseURL: 'https://us-central1-instaclone-f7b13.cloudfunctions.net',
    method: 'post',
    data: {
      image: post.image.base64
    }
  })
  .catch(err => console.log(err))
  .then(res => {
    return dispatch => {
      post.image = res.data.imageUrl //substitui a imagem pela url
      axios.post('/posts.json', {...post})
        .catch(err => console.log(err))
        .then(res => console.log('teste')
      )
    }
  })  
}

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  }
}