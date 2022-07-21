import React from 'react';
import {
  Platform,  
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStylesHeader}>About Free Meal Deals</Text>
        <Image style={styles.image} source={{uri: "https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/38907511_2128163037256746_173167755615272960_n.png?_nc_cat=111&oh=f469385d32022b160246fae3b5db4b1b&oe=5C5FB4BC"}} />
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
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 15
  },
  textBox: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 332,
    height: 270
  },
  textStylesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  textStyleBody: {
    fontSize: 16,
    fontWeight: 'light',
    marginBottom: 12
  },
});