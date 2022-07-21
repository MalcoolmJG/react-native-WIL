import React from 'react';
import {
  Platform,  
  View,
  Text,
  StyleSheet,
  Button,
  Linking,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Contact extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <TouchableHighlight
          onPress={() => { Linking.openURL('https://facebook.com/GoldCoastDiscounts')}}
          underlayColor='transparent' >
      <View style= {styles.buttonDirectOne}>
        <Icon name='facebook-square' size={50} color='white' style={{flexDirection: 'columnn'}} >
          <Text style={styles.buttonText}>Follow our Facebook page</Text>
        </Icon>
      </View>
      </TouchableHighlight>
      <TouchableHighlight
          onPress={() => { Linking.openURL('https://freemealdeals.com.au')}}
          underlayColor='transparent' >
      <View style={styles.buttonDirectTwo}>
        <Icon name='desktop' size={50} color='white' >
        <Text style={styles.buttonText}>Follow our Website</Text>
        </Icon>
      </View>
      </TouchableHighlight>
      <View style={styles.textBox}>
        <Text style={styles.textBoxBody}>Phone: 0425 638 428</Text>
        <Text style={styles.textBoxBody}>Email: office@FreeMealDeals.com.au</Text>
        <Text style={styles.textBoxBodyHours}>Business Hours:</Text>
        <Text style={styles.textBoxBodyTwo}>Monday: nn:nn - nn:nn</Text>
        <Text style={styles.textBoxBodyTwo}>Tuesday: nn:nn - nn:nn</Text>
        <Text style={styles.textBoxBodyTwo}>Wednesday: nn:nn - nn:nn</Text>
        <Text style={styles.textBoxBodyTwo}>Thursday: nn:nn - nn:nn</Text>
        <Text style={styles.textBoxBodyTwo}>Friday: nn:nn - nn:nn</Text>
        <Text style={styles.textBoxBodyTwo}>Saturday: nn:nn - nn:nn</Text>
        <Text style={styles.textBoxBodyTwo}>Sunday: nn:nn - nn:nn</Text>
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AAC7A9',
    height: 2500 
  },
  buttonDirectOne: {
    backgroundColor:'#344145',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    height: 100,
    marginTop: 12,
    alignSelf: 'center'
  },
  buttonDirectTwo: {
    backgroundColor:'#344145',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    width: 300,
    height: 100,
    marginTop: 12,
    marginBottom: 15,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBox: {
    backgroundColor: 'white',
    width: 300,
    height: 250,
    borderRadius: 15,
    alignSelf:'center',
    justifyContent: 'center',
  },
  textBoxBody: {
    color: 'black',
    fontSize: 16,
    alignSelf:'center',
    marginTop: 2
  },
  textBoxBodyHours: {
    color: 'black',
    fontSize: 16,
    alignSelf:'center',
    marginTop: 8
  },
  textBoxBodyTwo: {
    color: 'black',
    fontSize: 14,
    alignSelf:'center',
    marginTop: 2
  } 
})