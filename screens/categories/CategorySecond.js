import React from 'react';
import {
  Platform,  
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class CategoryThird extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Category 2</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAC7A9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});