import React, { Component } from 'react';
import {
  AppRegistry, View, Image, StyleSheet, Text, TouchableHighlight, Alert, Button, Linking, FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component {
  
  //Fill array with vouchers
  state = {
    vouchers: []
  };

  fetchVouchers = async () => {
    var a = 1;
    const response = await
    //Connects to wordpress, change to your IP address
      fetch(`http://192.168.43.187/wp-json/wp/v2/posts?per_page=100&page=${a}`);
    const posts = await response.json();
    this.setState({ vouchers: posts });
  }

  //Call fill 
  componentDidMount() {
    this.fetchVouchers();
  }

  render() {
      return (
      <FlatList
        style={styles.container}
        data={this.state.vouchers}
        keyExtractor={(x, i) => i}
        renderItem={({ item }) =>
      
      <View style={styles.modalContainer}>
          //Popup screen with enlarged voucher and redemption button
          <View style={styles.modalContainerTwo}>
            //item.categories === input ?
            <View>
              <Image style={styles.modalImage} source={{ uri: item.better_featured_image.source_url }} />
              <Text style={styles.voucherText}>{global.SampleVar}</Text>
              <Text style={styles.voucherText}>{item.title.rendered}</Text>
                <View style={styles.modalButton}>
                  <Button onPress={() => {
                    Alert.alert("Redeemed!")
                  }}
                  title="REDEEM"
                  color="white" >
                  </Button>
                </View>
            
              //Button to open Facebook page
              <TouchableHighlight
                onPress={() => { Linking.openURL('https://facebook.com/GoldCoastDiscounts')}}
                underlayColor='transparent' >
                <View style= {styles.buttonDirectOne}>
                  <Icon name='facebook-square' size={20} color='white' style={{flexDirection: 'columnn'}} >
                    <Text style={styles.buttonText}>Follow our Facebook page</Text>
                  </Icon>
                </View>
              </TouchableHighlight>
            </View>
            : null }
          </View>         
      </View>
        }
      />
      );
    }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAC7A9',
  },
  modalContainerTwo: {
    backgroundColor: '#AAC7A9',
    paddingVertical: 30,
    paddingHorizontal: 20,
    height: 700,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  voucherText: {
    fontSize: 16,
    fontWeight: 'light',
    alignSelf: 'center',
    marginTop: 5
  },
  modalButton: {
    backgroundColor: '#344145',
    borderRadius: 10,
    marginTop: 10
  },
  modalImage: {
    backgroundColor: 'white',
    width: 300,
    height: 390
  },
  buttonDirectOne: {
    backgroundColor:'#3B5998',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    width: 200,
    height: 75,
    marginTop: 12,
    alignSelf: 'center'
  }
  });