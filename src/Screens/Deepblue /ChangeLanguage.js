import React, { Component } from 'react'
import { View, Text, Dimensions, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TextInput, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Navigation } from 'react-native-navigation';
import ImagePicker from 'react-native-image-crop-picker';
import Axios from 'axios';
import Modal from 'react-native-modalbox';
import Textarea from 'react-native-textarea';


const { height, width } = Dimensions.get('screen')

class ChangeLanguage extends Component {

    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }
    state = {
        image: null,
        name: '',
        matn: '',
    }





    async _SendPayam() {
        try {
            const fd = new FormData();
            let image = this.state.image
            fd.append('image', { uri: image.path, type: image.mime, size: image.size, name: 'file' })
            fd.append('title', this.state.name)
            fd.append('matn', this.state.matn)
            let SendPayam = await Axios.post('/SendPayam', fd)
            console.log(fd, this.state.image, 'fuvk this,stslmdc;s.image', this.state.image.name, this.state.name, this.state.matn)
            console.log(SendPayam)
        } catch (error) {

        }
    }

    render() {
        const item = {}

        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'orange', justifyContent: 'space-around' }} >
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', height: height * 0.2 }}>
                    <Text style={{ color: '#fff', fontFamily: 'IRANYekanBold', fontSize: 24 }}>
                        Languge ?
    </Text>
                </View>
                <View style={{ flexDirection: 'row', height: height * 0.4, width, justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        onPress={() => Navigation.push(this.props.componentId, { component: { name: 'English.SingIn', passProps: { item }, options: { bottomTabs: { drawBehind: true, visible: false } } } })}

                        style={{ height: height * 0.1, width: width * 0.4, backgroundColor: '#fff', elevation: 3, shadowColor: 'orange', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#000', fontSize: 18, fontFamily: 'IranYekanRegular' }}>
                            English
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: height * 0.1, width: width * 0.4, backgroundColor: '#fff', elevation: 3, shadowColor: 'orange', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() =>  Navigation.push(this.props.componentId, { component: { name: 'Arabic.SingIn', passProps: { item }, options: { bottomTabs: { drawBehind: true, visible: false } } } })}>

                        <Text style={{ color: '#000', fontSize: 18, fontFamily: 'IranYekanRegular' }}>
                            العربی
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


export default ChangeLanguage;
