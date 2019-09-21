import {
  Navigation
} from 'react-native-navigation';
import * as Deepblue from './Deepblue '
import * as English from './English'
import * as Arabic from './Arabic'
import Axios from 'axios';
import { AsyncStorage, Platform } from 'react-native'
import React from 'react'
import { View, SafeAreaView } from 'react-native'
const wrapper = (Component, ...props) => {
  return class App extends React.Component {
    state = {
      ref: null
    }
    render() {
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }} >
            <Component
              {...{
                ...this.props,
                ...props
              }}
            />
          </SafeAreaView>

        </View>
      );
    }
  };
};


const registerScreens = () => {
  Navigation.registerComponent('English.OrginalGallery', () => English.OrginalGallery);
  Navigation.registerComponent('English.PlacesFavorite', () => English.PlacesFavorite);
  Navigation.registerComponent('English.PlacesGallery', () => English.PlacesGallery);
  Navigation.registerComponent('English.PlacesSeanplace', () => English.PlacesSeanplace);
  Navigation.registerComponent('English.ProfileSetting', () => English.ProfileSetting);
  Navigation.registerComponent('English.ChooseCity', () => English.ChooseCity);

  
  
  
  Navigation.registerComponent('English.SingIn', () => English.SingIn);
  Navigation.registerComponent('English.SingUp', () => English.SingUp);
  Navigation.registerComponent('English.Maps', () =>   English.Maps);
  Navigation.registerComponent('Arabic.SingUp', () =>  Arabic.SingUp);
  Navigation.registerComponent('Arabic.SingIn', () =>  Arabic.SignIn);
  Navigation.registerComponent('Arabic.Maps', () =>    Arabic.Maps);

  


  Navigation.registerComponent('Deepblue.ChangeLanguage', () => Deepblue.ChangeLanguage);
  Navigation.registerComponent('Deepblue.SingUp', () => Deepblue.SingUp);









}

const CONFIG = async () => {
  let token = await AsyncStorage.getItem('TOKEN');
  //  Axios.defaults.baseURL = Platform.OS == 'android' ? 'http://10.0.2.2:4001' : 'http://localhost:4001' ;
  console.log(token)
  //  console.log('fuck this page ')
  Axios.defaults.baseURL = 'http://185.4.30.50:4001'
  // Axios.defaults.baseURL = 'https://google.com'
  console.log('hi bithc :D ')
  // fetch({
  //   url:'https://google.com' 
  // }).then(res => console.log('res' , res)).catch(err => console.log('err' , err)).finally(fin => console.log('fin' , fin))
  Axios.get('/').then(res => console.log('res', res)).catch(err => console.log('err', err)).finally(suck => console.log('suck', suck))

  Axios.defaults.headers = {
    Authorization: token
  }

}
export {
  registerScreens,
  CONFIG
}