import React, { Component } from 'react'
import {View , Text , Dimensions , ImageBackground , TextInput , TouchableOpacity , Share} from 'react-native'
import background from '../../../image/Group_19.png'
import Icon from 'react-native-vector-icons/EvilIcons';
import Iconpluse from 'react-native-vector-icons/Entypo';



const {height , width} = Dimensions.get('screen')

class ProfileSetting extends Component {

    constructor(props) {
        super(props);
        this._shareMessage = this._shareMessage.bind(this);
        this._showResult = this._showResult.bind(this);
    }

    _showResult(result) {
        this.setState({ result })
    }
    _shareMessage() {
        Share.share({
            message:'لینگ زیر را با ایدی زیر وارد نمایید'
        }).then(this._showResult);
    }


    render() {
        return(
            <ImageBackground style={{height, width}}
                resizeMode="cover"
                source={background}
            >
                <View style={{height:height*0.15 , width , justifyContent:'center' , alignItems:'center'}}>
                    <Text style={{color:'orange' , fontFamily:'IRANYekanBold' , fontSize:24 , textAlign:'center'}}>
                        Profile Setting
                    </Text>
                </View>
                <View style={{height:height*0.3 , width , justifyContent:'center' , alignItems:'center'}}>
                   <Icon
                    name="user"
                    size={300}
                    color="#a2a2a2"
                   />
                </View>
                <View style={{height:height*0.25 , justifyContent:'flex-end' , width}}>
                <TextInput style={{ height: height * 0.075, margin: 10 , padding:10, color: '#a2a2a2', width: '80%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#eee' }}
                        placeholder="Name"
                    />
                    <TextInput style={{ height: height * 0.075, margin: 10 , padding:10, color: '#a2a2a2', width: '80%', alignSelf: 'center', borderRadius: 20, backgroundColor: '#eee' }}
                        placeholder="Phone OR email"
                    />
            </View>
            <View style={{height:height*0.2 , width}}>
                <TouchableOpacity
                onPress={() => this._shareMessage()}
                style={{height:'35%' , width:'50%', padding:25 , alignSelf:'center' , borderRadius:30 , backgroundColor:'orange' , justifyContent:'space-around' , flexDirection:'row' , alignItems:'center'}}>
                        
                <Iconpluse
                            name="plus"
                            size={30}
                            color="#fff"
                        />
                        <Text style={{color:'#fff' , textAlign:'center' , fontFamily:'IRANYekanBold' , fontSize:20}}>
                            invite freinds
                        </Text>
  
                </TouchableOpacity> 
            </View>
            </ImageBackground>
        )
    }
}

export default ProfileSetting;
