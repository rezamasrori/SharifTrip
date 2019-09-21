import React, { Component } from 'react'
import { View, Text, Dimensions, Image, SafeAreaView, Platform , TouchableOpacity , TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-crop-picker';
import Axios from 'axios';
import Modal from 'react-native-modalbox';
import Textarea from 'react-native-textarea';

const { height, width } = Dimensions.get('screen')

export default class SingIn extends Component {

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
                    <Text style={{fontSize:24 , color:'orange' , fontFamily:'IRANYekanBol'}}>
                        Let's Go
                    </Text>
                </View>
                <Image
                    style={{width:width*0.7, height:height*0.4 , alignSelf:'center'}}
                    resizeMode="cover"
                    source={require('../../../image/user_(1).png')}    
                    />
                <View style={{height:height*0.23 , justifyContent:'flex-end' , width}}>
                <TextInput style={{ height: height * 0.075, margin: 10 , padding:10, color: '#a2a2a2', width: '80%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#eee' }}
                        placeholder="Name"
                    />
                    <TextInput style={{ height: height * 0.075, margin: 10 , padding:10, color: '#a2a2a2', width: '80%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#eee' }}
                        placeholder="Phone OR email"
                    />
                </View>
                <TouchableOpacity
                    onPress={() => Navigation.push(this.props.componentId, { component: { name: 'English.Maps'} })}
                    style={{justifyContent:'center' , alignItems:'center' , backgroundColor:'orange', marginTop:30 , height:height*0.075 ,width:width*0.5 , borderRadius:30 , alignSelf:'center' }}>
                        <Text style={{color:'#fff' , fontFamily:'IRANYekanBold' , fontSize:20}}>
                            Submit
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Navigation.push(this.props.componentId, { component: { name: 'English.SingUp'} })}
 
                        style={{justifyContent:'center' , alignItems:'center', alignSelf:'center' , height:height*0.2 }}>
                        <Text style={{color:'#a2a2a2' , fontFamily:'IRANYekanBold' , fontSize:20}}>
                            Sing Up
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
