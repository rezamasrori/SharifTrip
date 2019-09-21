import React, { Component } from 'react';
import { Platform, Alert, StyleSheet, Text, View, Dimensions, Image, TouchableNativeFeedback, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { TextField } from "react-native-material-textfield";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Navigation } from 'react-native-navigation';
import Mapbox from '@react-native-mapbox-gl/maps'
import Modal from 'react-native-modalbox';

import amin from '../../../image/amin.png'
import { BottomTab } from './../Component'
const { height, width } = Dimensions.get("screen");
Mapbox.setAccessToken('pk.eyJ1IjoibWFoZGllaDAyMTQiLCJhIjoiY2p3YW1icXdiMGFoNTQ5czZ0ZGxpZmVkMSJ9.zO9CQ5shfXeeLl8AuTHIbw')
class Gallery extends Component {
  state = {
    number: '',
    image: true,
    location: null,
    LAT: 0,
    LONG:0
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        image: false
      })
    }, 500);
  }

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = (position);
        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
//hjk
  render() {
    return (
      <View style={{ flex: 1 , backgroundColor:'rgba(0, 0, 0, 0.8)'  , justifyContent:'flex-end' , overflow:'hidden'}}>
             <View style={{backgroundColor:'orange' , height:'25%'   , borderTopLeftRadius:35, borderTopRightRadius:35 , justifyContent:'center' , alignItems:'center'}} >
               <TouchableOpacity
          
                      onPress={() => Navigation.push(this.props.componentId, { component: { name: 'Deepblue.PlacesGallery'} })}

               style={{height:height*0.075 , width:'75%' , alignSelf:'center' , justifyContent:'center' , alignItems:'center' , backgroundColor:'#fff' , borderRadius:30}}>
              <Text style={{textAlign:'center' , fontFamily:'IRANYekanBold' , fontSize:24 , color:'#000'}}>
            Gallery
              </Text>
               </TouchableOpacity>
                    </View>
          

      </View>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },
  header: {

  },
  headerImage: {
    height: 55,
    width: 110,
    marginLeft: 15
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    height: 65,
    width: width * 0.8,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  circle: {
    height: 18,
    width: 18,
    borderRadius: 15,
    backgroundColor: '#2c3093',
  },
  circleEnd: {
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#c37df8',
  },
  line: {
    width: width * 0.13,
    borderBottomWidth: 2,
    borderColor: '#2c3093'
  },
  TextInput: {
    textAlign: "right",
    fontFamily: "Yekan",
    fontSize: 40,
    height: height * 0.088
  },
  text1: {
    color: '#2c3093',
    fontSize: 17
  },
  two: {
    marginRight: 5,
    height: 20,
    width: 20,
    borderRadius: (height + width) / 2,
    backgroundColor: '#470095',
  },
  one: {
    marginRight: 5,
    height: 20,
    width: 20,
    borderRadius: (height + width) / 2,
    borderWidth: 5,
    borderColor: '#470095',
    backgroundColor: '#fff'
  }
})

export default Gallery;
