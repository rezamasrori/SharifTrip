import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, Platform, TouchableOpacity, Image  , ScrollView} from 'react-native';
import { Navigation } from 'react-native-navigation';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons'



import image from '../../../image/index.jpeg'
const { height, width } = Dimensions.get('window')
const Slider = props => (
  <View>
    <View
      style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <Image style={{ height: '100%', width: '100%', resizeMode: "contain" , borderTopLeftRadius:20 , borderTopRightRadius:20 }} source={props.uri} />

    </View>

  </View>
)

class SingUp extends Component {


  state = {
    sing: [
      {
        id: 1,
        image: require('../../../image/1.png'),
        textOne: 'hi',
        textTwo:'Lorem Ipsom is a fictitious text produced by the inexplicable simplicity of the printing industry and by graphic designers.'
      },
      {
        id: 2,
        image: require('../../../image/2.png'),
        textOne: 'hi',
        textTwo:'Lorem Ipsom is a fictitious text produced by the inexplicable simplicity of the printing industry and by graphic designers. '


      },
      {
        id: 3,
        image: require('../../../image/3.png'),
        textOne: 'hi',
        textTwo:'Lorem Ipsom is a fictitious text produced by the inexplicable simplicity of the printing industry and by graphic designers. ',
        Textbutton:'GetStart',
        color:'orange'


      }
    ]
  }

  render() {
      const item = {}

    return (
      <View style={{ flex: 1 }}>
        <View style={{width , height:height*0.06 , backgroundColor:'orange'}}>
          <Text style={{ textAlign: 'center', color: '#fff', fontFamily: 'IRANYekanBold', fontSize: 24 }}>
            Lorem
          </Text>
        </View>
        <View
          style={{ height:600, borderRadius: 39, width: '99%' , marginTop:10 }}

        >
          <Swiper
            onIndexChanged={this.onSwip}
            height={100}
            width={'100%'}
            dot={<View style={{ width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3  , bottom:30 }} />}
            activeDot={<View style={{ width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 , bottom:30   }} />}

            // autoplay
          >
            {
              this.state.sing.map((item, i) =>
                <View>
               <View style={{height:height*0.3 , width }}>
               <Slider uri={{ uri: item.image }}
                    uri={item.image}
                    key={i}

                  />
               </View>
                  <View style={{ height: height*0.071 , justifyContent:'center' , color:"skyblue", width:'90%', alignItems:'center'  , marginTop:40}}>
                    <Text style={{fontSize:24 , color:'#000'}}>
                      {item.textOne}
                    </Text>
                  </View>
             <View style={{height:height*0.3 , width , justifyContent:'center'}}>
             <ScrollView style={{ width:'100%' , paddingHorizontal:10}}>
                    <Text style={{fontSize:16, color:'#a2a2a2' , textAlign:'center'}}>
                      {item.textTwo}
                    </Text>
                  </ScrollView>

             </View>
             <View style={{}}>
                     <TouchableOpacity

                     style={{ height:height*0.081 , width:width*0.5 , backgroundColor:item.color , alignSelf:'center' , borderRadius:20 , justifyContent:'center' , alignItems:'center' }}
                     onPress={() => Navigation.push(this.props.componentId, { component: { name: 'Deepblue.ChangeLanguage', passProps: { item }, options: { bottomTabs: {drawBehind:true, visible: false } } } })}

                     >
                   <Text style={{color:'#fff' , fontFamily:'IRANYekanBold' , fontSize:20}}>
                     {item.Textbutton}
                   </Text>
                     </TouchableOpacity>
                 </View>

                </View>

              )
            }
          </Swiper>
        </View>


      </View>

    );
  }

}

export default SingUp;
