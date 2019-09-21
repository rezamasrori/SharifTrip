import {
  Navigation
} from 'react-native-navigation';
import 'babel-polyfill';
import { AsyncStorage, I18nManager } from 'react-native'
import Pushe from 'react-native-pushe'
import Fastimage from 'react-native-fast-image'

import {
  registerScreens,
  CONFIG
} from './Screens';

const start = () => {


  Navigation.events().registerAppLaunchedListener(async () => {
    await registerScreens();
    await CONFIG();
    await Pushe.initialize(true);
    await I18nManager.forceRTL(false);
    await Navigation.setDefaultOptions({
      topBar: {
        visible: false,
        height: 0
      },
      bottomTabs: {
        visible: false,
        animate: false,
        drawBehind: true
      },
      statusBar: {
        backgroundColor: 'transparent',
        style: 'dark',
        drawBehind: true,
        visible: false
      },
      layout: {
        backgroundColor: 'white'
      },

    })
    // Navigation.setRoot({
    //   root:{
    //     component:{
    //       name:'Rezaii.Date'
    //     }
    //   }
    // })
    //await AsyncStorage.removeItem('TOKEN')
    let token = await AsyncStorage.getItem('TOKEN')
    if (token)
      await Navigation.setRoot({

        root: {
          bottomTabs: {
            id: 'REZA',
            options: {
              bottomTabs: {
                currentTabIndex: 1
              }
            },

            children: [

              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Deepblue.SingUp',
                        options: {
                          bottomTab: {
                            icon: require('./../image/t.png'),
                            iconInsets: { top: 5, bottom: -5 },
                          }
                        }
                      }
                    }
                  ]
                }
              },
   



            ]
          }
        }
      })
    else
      // return (
      //   <View style={{ flex: 1 }}>
      //     {setTimeout(() => {
      //       <Fastimage
      //         style={{ width, height }}
      //         source={require('../image/backgroundgif.gif')}
      //         resizeMode="contain"
      //       />
      //     }, 1000)}
      //   </View>
      // )
    await Navigation.setRoot({


      root: {
        stack: {
          id:'sajjad',
          children: [
            {
              component: {
                name: 'Deepblue.SingUp',
                // name: 'Rezaii.Profile',

                options: {
                  bottomTab: {
                    // text: 'اول',
                    icon: require('./../image/ttttt.png'),
                    iconInsets: { top: 5, bottom: -5 },
                    visible: false,

                  }
                }
              }
            }
          ]
        },

      }
    })
  })
}

export {

  start
}
