import React, { Component } from 'react';
import {
  AppRegistry, View, Image, StyleSheet, Text, TouchableHighlight, Alert, Button, Modal, Linking, FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component {
  constructor() {
    super();
    //Global variable used for VoucherPreview
    global.SampleVar = 'testing'
  }

  //Fill array with vouchers
  state = {
    vouchers: [],
    modalVisible: false,
  };
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

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

  voucherPreview = () => {
    
  }

  render() {
    const { navigate } = this.props.navigation;
      return (
      <FlatList
        style={styles.container}
        data={this.state.vouchers}
        keyExtractor={(x, i) => i}
        renderItem={({ item }) =>
      
      <View style={styles.modalContainer}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          //Popup screen with enlarged voucher and redemption button
          <View style={styles.modalContainerTwo}>
            <View>
              <Image style={styles.modalImage} source={{ uri: item.better_featured_image.source_url }} />
              <Text>{item.title.rendered}</Text>
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
              
              //Button to close popup window
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                underlayColor='transparent' >
                <Text style={styles.modalText}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>         
        </Modal>
        
        //Content with blurred voucher and description
        <TouchableHighlight
          onPress={() => navigate('VoucherPreview')} >
          <View style={styles.contentContainer}>
            <Image
              resizeMode={'contain'}
              style={styles.image}
              source={{ uri: item.better_featured_image.source_url }}
              blurRadius={4}
            />
              <View style={styles.contentContainerTwo}>
                <Text style={styles.textStyleHeader}>{item.title.rendered}</Text>
                <Text style={styles.textStyleBody}>{item.content.rendered}</Text>
              </View>
          </View>
        </TouchableHighlight>
      </View>
        }
      />
      );
    }
  }

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
  contentContainer: {
    flex: 1,
    backgroundColor: '#AAC7A9',
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  contentContainerTwo: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 176,
    height: 250
  },
  textStyleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  textStyleBody: {
    fontSize: 16,
    fontWeight: 'light',
    marginBottom: 5
  },
  modalButton: {
    backgroundColor: '#344145',
    borderRadius: 10,
    marginTop: 10
  },
  modalText: {
    marginTop: 10,
    fontWeight: 'light',
    fontSize: '16',
  },
  image: {
    backgroundColor: 'white',
    width: 160,
    height: 250
  },
  modalImage: {
    backgroundColor: 'white',
    width: 260,
    height: 350
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