import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ImagePicker from 'react-native-image-crop-picker';
import camera1 from '../.../../../../image/camera1.png'
import account1 from '../../../image/account1.png'
import home1 from '../../../image/home1.png'
import phone from '../../../image/phone.png'
import location from '../../../image/location.png'
import ic_select_all_24px from '../../../image/ic_select_all_24px.png'
import camera from '../../../image/camera.png'
import shadow from '../../../image/shadow.png'
const { height, width } = Dimensions.get('screen');


export default class bottomTabs extends Component {
  constructor() {
    super();
    this.state = {
      pan: new Animated.ValueXY(),
      showDraggable: true,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      home: false,
      account: false,
      camera: false,
      phone: false,
      map: false,
      active:true,
      changeColor:false,
      checkColor:true,
      // xyValueCamera: new Animated.ValueXY(),

    };
  }

  // _moveLogIn = () => {
  //   // this.setState({ colorLogIn: '#c37df8', colorSignIn: 'transparent' });
  //   // Animated.parallel
  //   Animated.timing(this.state.xyValueCamera, {
  //     toValue: { x=width/2 , y=height*0.7},
  //     duration: 1000,
  //     asing: Easing.linear,
  //   }).start();
  // }
    timeout(ms){
      return new Promise(resole => setTimeout(resole , ms))
    }

  componentDidMount(){
    if(this.state.checkColor)
        this.interval = setInterval( async () => {
          if(this.state.checkColor)
          await this.setState({changeColor:!this.state.changeColor})
          else null
       } , 1500);

  }
  componentDidUnmount() {
    clearInterval(this.interval);
  }
  componentWillMount() {

    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => {
        this._show()
      },
      onStartShouldSetPanResponderCapture: (e, gesture) => {
        this._show()
      },
      onMoveShouldSetPanResponder: () => true,
      // onPanResponderMove: Animated.event([
      //   null, { dx: this.state.pan.x, dy: this.state.pan.y },
      // ]),


      onPanResponderMove: (e, gesture) => {
        this.setState({checkColor:false});
        console.log(this.state.checkColor);
        const { dx, dy } = gesture;
        let Y = -dy
        Y = Y * Y
        let X = dx
        X = X * X
        this.setState({active:false});
        if (((X / (width * 55)) + (Y / (height * 8)) <= 1)) {
          Animated.event([null, { dx: (this.state.pan.x), dy: (this.state.pan.y) }])(e, gesture);
        } else {
        }
        if (0 < -dy && -dy < height * 0.04 && dx > -(width * 0.47) && -(width * 0.27) > dx) {
          console.log('hi there')
          this.setState({
            home: true,
            account: false,
            camera: false,
            phone: false,
            map: false
          })
        }
        else if (height * 0.04 < -dy && -dy < height * 0.15 && dx > -(width * 0.28) && -(width * 0.12) > dx) {
          this.setState({
            home: false,
            account: true,
            camera: false,
            phone: false,
            map: false
          })
        }
        else if (height * 0.07 < -dy && -dy < height * 0.14 && dx > -(width * 0.05) && width * 0.05 > dx) {
          this.setState({
            home: false,
            account: false,
            camera: true,
            phone: false,
            map: false
          })
        }
        else if (height * 0.06 < -dy && -dy < height * 0.13 && dx > width * 0.17 && width * 0.267 > dx) {
          this.setState({
            home: false,
            account: false,
            camera: false,
            phone: true,
            map: false
          })
        }
        else if (0 < -dy && -dy < height * 0.057 && dx > width * 0.279 && width * 0.389 > dx) {
          this.setState({
            home: false,
            account: false,
            camera: false,
            phone: false,
            map: true
          })
        }
        else {
          this.setState({
            home: false,
            account: false,
            camera: false,
            phone: false,
            map: false
          })
        }
      },
      onPanResponderRelease: (e, gesture) => {
        this.setState({active:true});
        this.setState({checkColor:true});
        const { dx, dy } = gesture;
        let Y = -dy
        let X = dx
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 },
          friction: 5,
          useNativeDriver: true
        }).start();
       if (0 < Y && Y < height * 0.04 && X > -(width * 0.47) && -(width * 0.27) > X) {
          Navigation.push('sajjad', {
            
            component: {
              name: 'English.PlacesGallery'
            }
          })
        }
        else if (height * 0.04 < Y && Y < height * 0.15 && X > -(width * 0.28) && -(width * 0.12) > X) {
          Navigation.push('sajjad', {
            component: {
                name: 'English.ProfileSetting'
            }
        })
    }
        else if (height * 0.07 < Y && Y < height * 0.14 && X > -(width * 0.05) && width * 0.05 > X) {
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
          });
          
        }
        else if (height * 0.06 < Y && Y < height * 0.13 && X > width * 0.17 && width * 0.267 > X) {
          Navigation.push('sajjad', {

            component: {
                name: 'English.OrginalGallery'
            }
        })
    }
        else if (0 < Y && Y < height * 0.057 && X > width * 0.279 && width * 0.389 > X) {
          Navigation.push('sajjad', {
            component: {
                name: 'English.SingIn'
            }
        })
    }
        else {
          this._close()
        }
      },
    });
    this.state.pan.setValue({ x: 0, y: 0 })
  }
  _show() {
    if (!this.state.isShow) {
      this.setState({
        isShow: true
      })

    }
  }

  _close() {
    if (this.state.isShow) {
      this.setState({
        isShow: false
      })
    }
  }

  isDropArea(gesture) {
    return ((height * 0.876 < (gesture.moveY) < (height * 0.92)) && (width * 0.126 < (gesture.moveX) < width * 0.22));
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (
      <Animated.View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
        <View

          style={this.state.isShow ? { borderWidth: 3, borderColor: 'orange', height: height * 0.7, width: width * 0.97, borderRadius: height * 0.8, position: 'absolute', top:-120 } : null}>

        </View>
        {/* <TouchableOpacity
          style={this.state.isShow ? { height: 40, width: 40, backgroundColor: 'blue', position: 'absolute', top: -15 } : null}
          onPress={() => Navigation.mergeOptions('TAB', {
            bottomTabs: {
              currentTabIndex: 0
            }
          })}>
        </TouchableOpacity> */}

        {
          this.state.isShow ?
            <Image
              source={this.state.camera ? camera1 : camera1}
              style={this.state.camera ? { width: 50, height: 50, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: -25 } : { width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom:100}} />
            : null
        }
        {
          this.state.isShow ?
            <Image
              source={this.state.account ? account1 : account1}
              style={this.state.account ? { width: 50, height: 50, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '1%', left: '24%' } : { width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute',bottom:70, left: '24%' }} />
            : null
        }
        {
          this.state.isShow ?
            <Image

              source={ this.state.home ? home1 : home1 }
              style={this.state.home ? { width: 50, height: 50, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '42%', left: '8%' } : { width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute',bottom:35, left: '8%' }} />
            : null
        }
        {
          this.state.isShow ?
            <Image
              source={this.state.phone ? phone : phone}
              style={this.state.phone ? { width: 50, height: 50, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '1%', right: '24%' } : { width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom:70, right: '24%' }} />
            : null
        }
        {
          this.state.isShow ?
            <Image
              source={this.state.map ?location : location}
              style={this.state.map ? { width: 50, height: 50, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '42%', right: '8%' } : { width: 40, height: 40, borderRadius: 50, backgroundColor: '#fff', borderColor: 'orange', borderWidth: 3, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom:35, right: '8%' }} />
            : null
        }
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[panStyle, styles.circle]}
        >
          {/* <View style={{flexDirection:'column', height:30 , justifyContent:'center' , backgroundColor:'red' }} > */}
          <Image
            style={{ width: 26, height:26 , marginTop: 30 }}
            source={ !this.state.checkColor ? ic_select_all_24px:this.state.changeColor ?ic_select_all_24px : camera }
            resizeMode="contain"
          />
            <Image
            style={{ width:65, height:25 }}
            source={ this.state.active ? shadow : null}
            resizeMode="contain"
           />
          {/* </View> */}
        </Animated.View>
      </Animated.View>
    );
  }
}

let styles = StyleSheet.create({
  circle: {
    // backgroundColor: "skyblue",
    width: 60,
    height: 60,
    borderRadius: 60,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
