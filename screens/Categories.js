import React from 'react';
import {
  Platform,  
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class Categories extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style= {styles.buttonGroup}>
          <Button 
            onPress={() => navigate('CategoryFirst')}
            title='Food'
            color='black'
          />
        </View>
        <View style= {styles.buttonGroup}>
          <Button 
            onPress={() => navigate('CategorySecond')}
            title='Vehicles'
            color='black'
          />
        </View>
        <View style= {styles.buttonGroup}>
          <Button 
            onPress={() => navigate('CategoryThird')}
            title='Electronics'
            color='black'
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAC7A9',
    marginTop: 0,
    alignContent: 'center',  
  },
  buttonGroup: {
    backgroundColor:'white',
    padding: 10,
    borderTopColor: 'white',
    borderWidth: 1, 
  },

});