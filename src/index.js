import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';

import Post from './components/Post';

import './config/DevToolsConfig';
import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE7777',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerText:{
    color: '#333333',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        key: 1, title: 'Aprendendo React Native', author: 'Douglas Figueiredo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nulla erat, in tempor tellus egestas elementum. Vivamus tempus rhoncus urna semper volutpat.',
      },
      {
        key: 2, title: 'Aprendendo React Native', author: 'Douglas Figueiredo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nulla erat, in tempor tellus egestas elementum. Vivamus tempus rhoncus urna semper volutpat.',
      },
      {
        key: 3, title: 'Aprendendo React Native', author: 'Douglas Figueiredo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nulla erat, in tempor tellus egestas elementum. Vivamus tempus rhoncus urna semper volutpat.',
      },
      {
        key: 4, title: 'Aprendendo React Native', author: 'Douglas Figueiredo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nulla erat, in tempor tellus egestas elementum. Vivamus tempus rhoncus urna semper volutpat.',
      },
      {
        key: 5, title: 'Aprendendo React Native', author: 'Douglas Figueiredo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nulla erat, in tempor tellus egestas elementum. Vivamus tempus rhoncus urna semper volutpat.',
      },
      {
        key: 6, title: 'Aprendendo React Native', author: 'Douglas Figueiredo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nulla erat, in tempor tellus egestas elementum. Vivamus tempus rhoncus urna semper volutpat.',
      },
      {
        key: 7, title: 'Aprendendo React Native', author: 'Douglas Figueiredo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nulla erat, in tempor tellus egestas elementum. Vivamus tempus rhoncus urna semper volutpat.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={ styles.header}>
          <Text style={styles.headerText}>
            GoNative App
          </Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          { posts.map(post => (
            <View key={post.key}>
              <Post
                title={post.title}
                author={post.author}
                description={post.description}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
