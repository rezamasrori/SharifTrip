import React, { Component } from 'react';
import { FlatList, Alert, StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { TextField } from "react-native-material-textfield";
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Navigation } from 'react-native-navigation';
import Mapbox from '@react-native-mapbox-gl/maps'
import Modal from 'react-native-modalbox';
import Stars from 'react-native-stars';

import amin from '../../../image/amin.png'
import { BottomTab } from './../Component'
const { height, width } = Dimensions.get("screen");
Mapbox.setAccessToken('pk.eyJ1IjoibWFoZGllaDAyMTQiLCJhIjoiY2p3YW1icXdiMGFoNTQ5czZ0ZGxpZmVkMSJ9.zO9CQ5shfXeeLl8AuTHIbw')
class OrginalGallery extends Component {
  state = {
    number: '',
    image: true,
    location: null,
    LAT: 0,
    LONG: 0,
    All:[
        {
            id:1,
            image:require('../../../image/index4.jpeg'),
            width:80,
            height:240, 
        },
        {
            id:2,
            image:require('../../../image/index4.jpeg'),
            width:80,
            height:230, 

        },
        {
            id:3,
            image:require('../../../image/index4.jpeg'),
            width:80,
            height:220, 

        },
        {
            id:4,
            image:require('../../../image/index4.jpeg'),
            width:80,
            height:235, 

        },
      { 
            id:5,
            image:require('../../../image/index4.jpeg'),
            width:80,
            height:210, 

        }
    ]
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

  render() {
    return (
      <ImageBackground 
      source={require('../../../image/Group_19.png')}
      resizeMode="cover"
      style={{ flex: 1}}>
           
          <View style={{justifyContent:'center' , alignItems:'center' , height:height*0.1 , width}}>
              <Text style={{fontSize:24 , color:'orange' , fontFamily:'IRANYekanBold'}}>
                  Gallery
              </Text>
          </View>
          <View style={{height:height*0.25 , width , overflow:'hidden' , justifyContent:'center' , alignItems:'center'}}>
              <Image
                style={{borderRadius:25 , width:'100%' , height:'100%'}}
                resizeMode="cover"
                source={require('../../../image/index4.jpeg')}
              />
          </View>
          <View style={{justifyContent:'space-around' , flexDirection:'row'}}>
                <View>
                    <Text style={{fontFamily:'IRANYekanBold' , color:'#000' , fontSize:20}}>
                mashhad , haram
                    </Text>
                </View>
                <View style={{marginTop:10}}>
                  <Stars
                    default={2.5}
                    count={5}
                    half={true}
                    starSize={50} 
                    fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                    emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                  />
                  </View>
          </View>
          <View style={{height:height*0.002 , width , backgroundColor:'#a2a2a2' , marginTop:10}}/>
          <View style={{justifyContent:'center' , alignItems:'center' , marginTop:5}}>
              <Text style={{fontSize:14 , fontFamily:'IRANYekanBold' , color:'#a2a2a2'}}>
                    5 se 2019
              </Text>
          </View>
<View style={{height:height*0.5, width ,  alignItems:'center'}}>
        <FlatList
        numColumns={2}
            data={this.state.All}
            renderItem={({item})=>{
                return(
                    <View style={{justifyContent:'center' , alignItems:"center" , alignSelf:'center'}}>
                        <Image
                            source={item.image}
                            style={{height:item.height, width:180 , borderRadius:20 , margin:3 , alignSelf:'center' }}
                            resizeMode="cover"
                        />
                        </View>
                )
            }}
        />
</View>

      </ImageBackground>




    );
  }
}

const styles = StyleSheet.create({
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        fontSize:15,
        // textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 1,
      },
      myEmptyStarStyle: {
        color: 'white',
      },
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

export default OrginalGallery;
