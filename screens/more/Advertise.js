import React from 'react';
import {
  Platform,  
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Advertise extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStylesHeader}>We deliver the best pricing and advertising value on the Gold Coast</Text>
        <Text style={styles.textBox}>Enter description</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AAC7A9',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  textBox: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 332,
    height: 460
  },
  textStylesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textStyleBody: {
    fontSize: 16,
    fontWeight: 'light',
    marginBottom: 12
  },
});