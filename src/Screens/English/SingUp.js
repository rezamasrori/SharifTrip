import React, { Component } from 'react'
import { View, Text, Dimensions, Image, SafeAreaView, KeyboardAvoidingView , TouchableOpacity , TextInput , Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-crop-picker';
import Axios from 'axios';
import Modal from 'react-native-modalbox';
import Textarea from 'react-native-textarea';

const { height, width } = Dimensions.get('screen')

export default class SingUp extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }
    state = {
        image :null,
        name:'',
        matn:'',
    }
    // async _SendPayam() {
    //     try {
    //         let SendPayam = await Axios.post('/SendPayam' , {
    //             title: this.state.name , 
    //             matn: this.state.matn

    //         })
    //     } catch (error) {
            
    //     }
    // }


    render() {
        const item = {}

        return (
            <View style={{ flex: 1, backgroundColor:'#fff' }} >
                <View style={{height:height*0.1 , width , justifyContent:'center' , alignItems:'center'}}>
                    <Text style={{fontSize:24 , color:'orange' , fontFamily:'IRANYekanBold'}}>
                        Let's Go
                    </Text>
                </View>
                <Image
                    style={{width:width*0.7, height:height*0.4 , alignSelf:'center'}}
                    resizeMode="cover"
                    source={require('../../../image/user_(1).png')}    
                    />
                <View style={{height:height*0.3 , justifyContent:'center' , width}}>
                <TextInput
                autoFocus
                keyboardType="default"
                style={{ height: height * 0.075, margin: 10 , padding:10, color: '#a2a2a2', width: '80%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#eee' }}
                        placeholder="Name"
                    />
                <TextInput style={{ height: height * 0.075, margin: 10 , padding:10, color: '#a2a2a2', width: '80%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#eee' }}
                        placeholder="Phone OR email"
                    />
                <TextInput style={{ height: height * 0.075, margin: 10 , padding:10, color: '#a2a2a2', width: '80%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#eee' }}
                        placeholder="PassWord"
                    />
                </View>
                <TouchableOpacity
               onPress={() => Navigation.push(this.props.componentId, { component: { name: 'English.Maps' } })}
                style={{justifyContent:'center' , alignItems:'center' , backgroundColor:'orange', marginTop:10 , height:height*0.08 ,width:width*0.5 , borderRadius:30 , alignSelf:'center' }}>
                        <Text style={{color:'#fff' , fontFamily:'IRANYekanBold' , fontSize:20}}>
                            Submit
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
               onPress={() => Navigation.push(this.props.componentId, { component: { name: 'English.SingUp' } })}
               style={{justifyContent:'center' , alignItems:'center', alignSelf:'center' , height:height*0.1 }}>
                        <Text style={{color:'#a2a2a2' , fontFamily:'IRANYekanBold' , fontSize:20}}>
                            Sing Up
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
