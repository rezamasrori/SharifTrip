import React, { Component } from 'react'
import { View, Text, Dimensions, Image, SafeAreaView, Platform, TouchableOpacity, TextInput } from 'react-native'
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
        image: null,
        name: '',
        matn: '',
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
           
            <View style={{ flex: 1, backgroundColor: '#fff', }} >
                <View style={{ height: height * 0.1, width, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, color: '#000', fontFamily: 'IRANYekanBol' }}>
                        لنذهب
                    </Text>
                    <Image
                    style={{width:200, height:200, marginTop:200}}
                    source={require('../../../image/user_(1).png')}    
                    />

                </View>
                <View style={{ height: height * 0.6, justifyContent: 'flex-end', width }}>
                    <TextInput style={{ height: height * 0.075, margin: 10, color: '#a2a2a2', width: '80%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#eee' }}
                        placeholder="اسم"
                    />
                    <TextInput style={{ height: height * 0.075, margin: 10, color: '#a2a2a2', width: '80%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#eee' }}
                        placeholder="الهاتف أو البريد الإلكتروني"
                    />
                </View>
                <TouchableOpacity
                    onPress={() => alert('wrong!')}
                    style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', marginTop: 30, height: height * 0.075, width: width * 0.5, borderRadius: 30, alignSelf: 'center' }}>
                    <Text style={{ color: '#000', fontFamily: 'IRANYekanBold', fontSize: 20 }}>
                        تقديم
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Navigation.push(this.props.componentId, { component: { name: 'Arabic.SingUp', passProps: { item }, options: { bottomTabs: { drawBehind: true, visible: false } } } })}

                    style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', height: height * 0.2 }}>
                    <Text style={{ color: '#a2a2a2', fontFamily: 'IRANYekanBold', fontSize: 20 }}>
                        سجل
                        </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
