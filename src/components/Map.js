import React from 'react';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';
import MapView from 'react-native-maps';
import Marker from './Marker';



class Map extends React.Component{
  constructor(props, context) {
    super(props, context);
    this._onRegionChange = this._onRegionChange.bind(this);
  }

  componentWillMount(){
    this.props.fetchCurrentLocation();
  }

  _onRegionChange(region){
    //console.log('happen at the begininig ma');
    this.props.updateLocation(region);
  }

  _createMarkers(markers){
    //console.log(markers);
    if(markers.length > 0){
      return markers.map((item,index)=>{
        return <Marker
            key={index}
            navigator={this.props.navigator}
            latlng={item}
          />
      })
    }else{
      return null;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={this.props.viewLocation}
          onRegionChangeComplete={this._onRegionChange}
        >
          {this._createMarkers(this.props.markers)}
        </MapView>
      </View>
    );
  }
}

Map.propTypes = {
  viewLocation:React.PropTypes.object.isRequired,
  fetchCurrentLocation:React.PropTypes.func.isRequired,
  updateLocation:React.PropTypes.func.isRequired,
  markers:React.PropTypes.array
}

Map.defaultProps = {
  viewLocation:{},
  fetchCurrentLocation:()=>{},
  updateLocation:()=>{},
  markers:[]
}

export default Map;

var styles = StyleSheet.create({

})
