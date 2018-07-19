import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  post: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  postTitle: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postAuthor: {
    color: '#999999',
  },
  postDescription: {
    color: '#666666',
  },
  postDivider: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    marginVertical: 20,
  }
});

const Post = ({ title, author, description }) => (
  <View style={styles.post}>
    <Text style={styles.postTitle}>
      {title}
    </Text>
    <Text style={styles.postAuthor}>
      {author}
    </Text>
    <View style={styles.postDivider} />
    <Text style={styles.postDescription}>
      {description}
    </Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Post;
