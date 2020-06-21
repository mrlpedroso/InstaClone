import React, {Component} from 'react';
import Header from './src/components/Header'
import {View} from 'react-native'
import Post from './src/components/Post';


export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Mariazinha do grau',
      comment: 'uau que foto linda'
    }, {
      nickname: 'Billy',
      comment: 'kkkkkk'
    }]

    return (
      <View style={{flex: 1}} >
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
      </View>
    )
  }
}
