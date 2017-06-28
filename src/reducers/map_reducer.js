import root_actions from '../actions/root_actions';
import {generateMarkers} from '../scripts/map_features'

export default function maps(state={}, action){
  switch(action.type){
    case root_actions.REQUEST_CURRENT_LOCATION:
      return {
        ...state,
        isFetching:true
      }

    case root_actions.RECEIVE_CURRENT_LOCATION_FAILURE:
      return {
        ...state,
        isFetching:false,
        err:action.errInfo
      }

    case root_actions.RECEIVE_CURRENT_LOCATION_SUCCESS:
      let locationInfo = action.workload;
      let initialMarkers = generateMarkers(locationInfo.viewLocation);
      return {
        ...state,
        isFetching:false,
        viewLocation:locationInfo.viewLocation,
        gpsLocation:locationInfo.gpsLocation,
        markers:initialMarkers
      }

    case root_actions.UPDATE_LOCATION:
      let markers = generateMarkers(action.workload);
      return{
        ...state,
        viewLocation:action.workload,
        markers:markers
      }

    default:
      return state;
  }
}
