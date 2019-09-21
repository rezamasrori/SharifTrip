import React, { Component } from 'react'
import { ImageBackground, Alert, FlatList, Text, View, Dimensions, ScrollView, Picker, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native'
import Voice from 'react-native-voice'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { Navigation } from 'react-native-navigation'
import IconV from 'react-native-vector-icons/dist/MaterialIcons'


import Mapbox from '@react-native-mapbox-gl/maps'
// import MapboxGL from '@react-native-mapbox-gl/maps';
import { BottomTab } from './../Component'
const { height, width } = Dimensions.get("screen")
Mapbox.setAccessToken('pk.eyJ1IjoibWFoZGllaDAyMTQiLCJhIjoiY2p3YW1icXdiMGFoNTQ5czZ0ZGxpZmVkMSJ9.zO9CQ5shfXeeLl8AuTHIbw')
class ChooseCity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: '',
      image: true,
      location: null,
      LAT: 0,
      LONG: 0,
      recognized: '',
      pitch: '',
      error: '',
      end: '',
      started: '',
      results: [],
      partialResults: [],
      active:false,
      City: [
        {
          id: 1,
          makan: 'mashhad',
          pictue: require('../../../image/index4.jpeg')
        },
        {
          id: 2,
          makan: 'tehran',
          pictue: require('../../../image/index4.jpeg')
        },
        {
          id: 3,
          makan: 'tabriz',
          pictue: require('../../../image/index4.jpeg')
        },
        {
          id: 4,
          makan: 'mashhad',
          pictue: require('../../../image/index4.jpeg')
        },
        {
          id: 5,
          makan: 'mashhad',
          pictue: require('../../../image/index4.jpeg')
        },
        {
          id: 6,
          makan: 'Iran',
          pictue: require('../../../image/index4.jpeg')
        }
      ],
      PickerValue: ''
    }
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart = e => {
    // eslint-disable-next-line
    console.log('onSpeechStart: ', e);
    this.setState({
      started: '√',
    });
  };

  onSpeechRecognized = e => {
    // eslint-disable-next-line
    console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = e => {
    // eslint-disable-next-line
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: '√',
    });
  };

  onSpeechError = e => {
    // eslint-disable-next-line
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechResults: ', e);
    this.setState({
      results: e.value[0],
    });
  };

  onSpeechPartialResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechPartialResults: ', e);
    this.setState({
      partialResults: e.value,
    });
  };

  onSpeechVolumeChanged = e => {
    // eslint-disable-next-line
    console.log('onSpeechVolumeChanged: ', e);
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      active:true,
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };

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
    const item = {}

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>

          <Mapbox.MapView
            ref={map => { this._map = map; }}
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={5}
            onRegionDidChange={async (e) => await

              this.setState({
                LONG: e.geometry.coordinates[0],
                LAT: e.geometry.coordinates[1]
              })
            }
            centerCoordinate={[11.256, 43.770]}
            initialCenterCoordinate={{ latitude: 40.444328, longitude: -79.953155 }}
            style={{ height: '100%', width: '100%' }}
            zoomEnabled={true}
            showUserLocation={true}
            onUpdateUserLocation={this.onUpdateUserLocation}
          >

            <Mapbox.Camera
              zoomLevel={15}
              centerCoordinate={this.state.location ? [this.state.location.coords.longitude, this.state.location.coords.latitude] : [59.513659, 36.320374]}
            />

            {
              this.state.location ?
                <Mapbox.PointAnnotation
                  coordinate={[this.state.location.coords.longitude, this.state.location.coords.latitude]}
                >
                  <View style={{ height: 20, width: 20, borderRadius: 20, backgroundColor: 'blue' }} >

                  </View>
                </Mapbox.PointAnnotation>
                : null
            }

          </Mapbox.MapView>
          <View style={{ position: 'absolute', height: height * 0.05, width: width * 0.12, alignSelf: 'center', bottom: 20 }} />
          <BottomTab route={1} />
          {/* <TouchableOpacity
            // onPress={()=> this.City()}
            style={{ justifyContent: 'center', flexDirection:'row',zIndex: 10, alignItems: 'center', position: 'absolute', height: height * 0.12, borderRadius: 40, width: width * 0.92, alignSelf: 'center', marginTop: 30, backgroundColor: 'rgb(250,250,250)', elevation: 3, shadowOffset: { width: 10, height: 10, }, shadowColor: 'orange', shadowOpacity: 2.0 }} > */}
          <View
            style={{ justifyContent: 'center', flexDirection: 'row', zIndex: 10, alignItems: 'center', position: 'absolute', height: height * 0.12, borderRadius: 40, width: width * 0.92, alignSelf: 'center', marginTop: 30, backgroundColor: 'rgb(250,250,250)', elevation: 3, shadowOffset: { width: 10, height: 10, }, shadowColor: 'orange', shadowOpacity: 2.0 }} >

            <TextInput
              value={this.state.results}
              onChangeText={(text) => this.setState({ results: text })}

              style={{ fontSize: 24, color: '#000', textAlign: 'left' }}
              placeholder="Where are you ?"

            />

            <View>
            </View>
            <IconV
              onPress={this._startRecognizing}
              color={this.state.active ? 'orange':  '#a2a2a2'}
              size={30}
              name="record-voice-over"
            />
            {
              console.log(1 ,this.state.results)
            }
            {
              this.state.results.length > 0 ?
                <View style={{ position: 'absolute', top: 100, height, width}}>

                  <FlatList
                    data={this.state.City.filter(city => city.makan.toLowerCase().includes(this.state.results.toLowerCase() ))}
                    // data={this.state.City}
                    renderItem={({ item }) => {
                      return (
                        <ScrollView>
                        <View
                        style={{ height: height * 0.2 , marginTop:15, width: '85%' , backgroundColor:'#fff' ,  alignSelf: 'center' , overflow:'hidden', borderRadius: 25, elevation: 3, shadowOffset: { width: 10, height: 10, }, shadowColor: 'black', shadowOpacity: 1.0 }}
                        >
                        <ImageBackground
                          style={{ height: height * 0.25, width: '85%' ,  alignSelf: 'center', borderRadius: 25}}
                          source={item.pictue}
                          resizeMode="cover"
                        >
                          <View style={{ height: '30%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'orange', fontSize: 18, fontFamily: 'IRANYekanBold', zIndex:1000 }}>
                              {item.makan}
                            </Text>
                          </View>
                          <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', bottom: 100 , height:height*0.25 , width:width*0.62 ,  left:0 }} />

                        </ImageBackground>
                        </View>
                        </ScrollView>
                      )
                    }}
                  />
                </View> :
              null
            }
          </View>
        </View>




      </View>




    );
  }
}

export default ChooseCity;
