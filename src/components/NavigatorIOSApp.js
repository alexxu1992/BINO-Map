import React from 'react';
import { Button, NavigatorIOS, Text, View } from 'react-native';
import Map from '../containers/Map_Container'

class NavigatorIOSApp extends React.Component{
  render(){
    return (
      <NavigatorIOS
        initialRoute={{
         component: Map,
         title: 'Alex BINO',
         backButtonTitle: 'back',
         translucent:true,
         navigationBarHidden: true
        }}
        interactivePopGestureEnabled = {true}
        style={{flex: 1}}
     />
    )
  }
}

export default NavigatorIOSApp;
