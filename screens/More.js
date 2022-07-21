import React from 'react';
import {
  Platform,  
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class More extends React.Component {
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={{
          flex: 1,
          marginTop: 0,
          alignContent: 'center',
          backgroundColor: '#AAC7A9',  
        }}>
        <View style= {{ 
          backgroundColor:'white',
          padding: 10,
          borderColor: 'black',
          borderWidth: 1,
          }}>
          <Button 
            onPress={() => navigate('Advertise')}
            title='Advertise With Us'
            color='black'
          />
        </View>
        <View style= {{ 
          backgroundColor:'white',
          padding: 10,
          borderTopColor: 'white',
          borderWidth: 1,
          }}>
          <Button 
            onPress={() => navigate('Contact')}
            title='Contact Us'
            color='black'
          />
        </View>
        <View style= {{ 
          backgroundColor:'white',
          padding: 10,
          borderTopColor: 'white',
          borderWidth: 1,
          }}>
          <Button 
            onPress={() => navigate('About')}
            title='About Us'
            color='black'
          />
        </View>
        </View>
      );
    }
  };