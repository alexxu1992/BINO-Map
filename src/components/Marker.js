import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import MarkerContent from './MarkerContent';

class Marker extends React.Component{
  constructor(props, context){
    super(props, context)
  }

  _handleToNext(nextRoute){
    // inherite the navigator object from map view
    this.props.navigator.push(nextRoute)
  }

  render(){
    let coords = {
      latitude:this.props.latlng.lat,
      longitude:this.props.latlng.lng
    }
    const nextRoute = {
      component: MarkerContent,
      title: 'Weired Words',
      passProps: { myProp: 'bar' },
      interactivePopGestureEnabled:true
    };
    return (
      <View>
        <MapView.Marker
           coordinate={coords}
           onPress={()=>this._handleToNext(nextRoute)}
         />
      </View>
    )
  }
}



export default Marker;
