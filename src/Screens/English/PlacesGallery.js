import React, { Component } from 'react';
import { Platform, Alert, StyleSheet, Text, View, Dimensions, FlatList, TouchableNativeFeedback, TouchableOpacity, Image, TextInput } from 'react-native';
import { TextField } from "react-native-material-textfield";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Navigation } from 'react-native-navigation';
import Mapbox from '@react-native-mapbox-gl/maps'
import Modal from 'react-native-modalbox';
import Stars from 'react-native-stars';

import amin from '../../../image/amin.png'
import { BottomTab } from '../Component'
const { height, width } = Dimensions.get("screen");
Mapbox.setAccessToken('pk.eyJ1IjoibWFoZGllaDAyMTQiLCJhIjoiY2p3YW1icXdiMGFoNTQ5czZ0ZGxpZmVkMSJ9.zO9CQ5shfXeeLl8AuTHIbw')
class PlacesGallery extends Component {
  state = {
      All:[
          {
              id:1, 
              name:'mellat, mashhad',
              picture:require('../../../image/index4.jpeg'),
              matn:'Lorem Ipsom is a fictitious text produced by the inexplicable simplicity of the printing industry and by graphic designers. Printers and texts, but newspapers and magazines in columns and rows as needed, and current technology requirements and diverse applications aimed at improving utility. Many books in the past sixty-three percent, present and future, require a great deal of knowledge from the community and professionals to create more familiarity with software for computer designers, especially creative designers and leading Persian culture. In this case, one can hope that all the difficulty in presenting difficult typing solutions and conditions will end up requiring the key elements involved in typing the main achievements and answering frequently asked questions from the existing design world.',
          },
          {
            id:2, 
            name:'mellat, mashhad',
            picture:require('../../../image/index4.jpeg'),
            matn:'Lorem Ipsom is a fictitious text produced by the inexplicable simplicity of the printing industry and by graphic designers. Printers and texts, but newspapers and magazines in columns and rows as needed, and current technology requirements and diverse applications aimed at improving utility. Many books in the past sixty-three percent, present and future, require a great deal of knowledge from the community and professionals to create more familiarity with software for computer designers, especially creative designers and leading Persian culture. In this case, one can hope that all the difficulty in presenting difficult typing solutions and conditions will end up requiring the key elements involved in typing the main achievements and answering frequently asked questions from the existing design world.',
        },
        {
          id:3, 
          name:'mellat, mashhad',
          picture:require('../../../image/index4.jpeg'),
          matn:'Lorem Ipsom is a fictitious text produced by the inexplicable simplicity of the printing industry and by graphic designers. Printers and texts, but newspapers and magazines in columns and rows as needed, and current technology requirements and diverse applications aimed at improving utility. Many books in the past sixty-three percent, present and future, require a great deal of knowledge from the community and professionals to create more familiarity with software for computer designers, especially creative designers and leading Persian culture. In this case, one can hope that all the difficulty in presenting difficult typing solutions and conditions will end up requiring the key elements involved in typing the main achievements and answering frequently asked questions from the existing design world.',
      },
      {
        id:4, 
        name:'mellat, mashhad',
        picture:require('../../../image/index4.jpeg'),
        matn:'Lorem Ipsom is a fictitious text produced by the inexplicable simplicity of the printing industry and by graphic designers. Printers and texts, but newspapers and magazines in columns and rows as needed, and current technology requirements and diverse applications aimed at improving utility. Many books in the past sixty-three percent, present and future, require a great deal of knowledge from the community and professionals to create more familiarity with software for computer designers, especially creative designers and leading Persian culture. In this case, one can hope that all the difficulty in presenting difficult typing solutions and conditions will end up requiring the key elements involved in typing the main achievements and answering frequently asked questions from the existing design world.',
    },
    {
      id:5, 
      name:'mellat, mashhad',
      picture:require('../../../image/index4.jpeg'),
      matn:'Lorem Ipsom is a fictitious text produced by the inexplicable simplicity of the printing industry and by graphic designers. Printers and texts, but newspapers and magazines in columns and rows as needed, and current technology requirements and diverse applications aimed at improving utility. Many books in the past sixty-three percent, present and future, require a great deal of knowledge from the community and professionals to create more familiarity with software for computer designers, especially creative designers and leading Persian culture. In this case, one can hope that all the difficulty in presenting difficult typing solutions and conditions will end up requiring the key elements involved in typing the main achievements and answering frequently asked questions from the existing design world.',
  }
      ]
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'#fff'}}>
       <View style={{height:height*0.1 , width , justifyContent:'center' , alignItems:'center'}}>
        <Text style={{color:'orange' ,fontSize:24 , fontFamily:'IRANYekanBold' }}>
        Places Gallery
        </Text>
       </View>
       <FlatList
        data={this.state.All}
        renderItem={({item})=> {
          return(
              <View style={{height:height*0.2  , backgroundColor:'#fff' , marginTop:15 , borderRadius:3, width:'90%' , alignSelf:'center' , elevation:3 , shadowOffset:{  width: 10,  height: 10,  },shadowColor: 'black',shadowOpacity: 1.0}}>
               <Image
                style={{height:'70%' , width:'100%'}}
                resizeMode="cover"
                source={item.picture}
               />
               <View style={{flexDirection:'row' , justifyContent:'space-around' , width:'90%'}}>
                  <View style={{marginTop:10}}>
                  <Text style={{color:'#000' , fontFamily:'IRANYekanBold' , fontSize:14}}>
                   {item.name}
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

                </View>
            )
        }}
       />
                 <View style={{height:height*0.0181 , backgroundColor:'#FFF' , width}}/>

      </View>




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

export default PlacesGallery;
