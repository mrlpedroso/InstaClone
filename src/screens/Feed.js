import React, { Component } from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
  state = {
    posts: [{
      id: Math.random(),
      nickname: 'Rafael',
      email: 'rafinha@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
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
      image: require('../../assets/imgs/bw.jpg'),
      comments: [{
        nickname: 'Crazy21',
        comment: 'Pasto ta seco em'
      }]
    }]
  }

  render () {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList data={this.state.posts} keyExtractor={item => `${item.id}`} 
                  renderItem={({item}) => <Post key={item.id} {...item} /> } />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default Feed