import {Platform} from 'react-native';
import { Constants, Permissions, Location} from 'expo';

async function fetchCurrent(){
  let {status} = await Permissions.askAsync(Permissions.LOCATION);
  if(status == 'granted'){
    return fetchCurrentData()
  }else{
    console.log('not allow using gps');
  }
}

function fetchCurrentData(){
  return new Promise((resolve, reject)=>{
    Location.getCurrentPositionAsync({enableHighAccuracy:true})
    .then(data => {
      if(data == null){
        reject('can not fetch gps data')
      }else{
        let gpsLocation = data;
        let viewLocation = {
          latitude: gpsLocation.coords.latitude,
          longitude: gpsLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
        let locationInfo = {viewLocation, gpsLocation};

        resolve(locationInfo)
      }
    })
  })
}

function generateMarkers(currentLocation){
  let markers = [];
  // console.log(currentLocation);
  for(let i=0;i<5;i++){
    let lat = currentLocation.latitude + 0.2*(2*Math.random()-1)*currentLocation.latitudeDelta;
    let lng = currentLocation.longitude + 0.2*(2*Math.random()-1)*currentLocation.longitudeDelta;
    markers.push({lat,lng})
  }

  return markers;
}

export {fetchCurrent, generateMarkers};
