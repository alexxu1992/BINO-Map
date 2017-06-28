import {fetchCurrent} from '../scripts/map_features';

const current_location_actions = {
  REQUEST_CURRENT_LOCATION:'REQUEST_CURRENT_LOCATION',
  RECEIVE_CURRENT_LOCATION_SUCCESS:'RECEIVE_CURRENT_LOCATION_SUCCESS',
  RECEIVE_CURRENT_LOCATION_FAILURE:'RECEIVE_CURRENT_LOCATION_FAILURE',

  requestCurrentLocation:()=>{
    return {
      type:map_actions.REQUEST_CURRENT_LOCATION
    }
  },

  requestCurrentLocationSuccess:(locationData)=>{
    return {
      type:map_actions.RECEIVE_CURRENT_LOCATION_SUCCESS,
      workload: locationData
    }
  },

  requestCurrentLocationFailure:(errInfo)=>{
    return {
      type:map_actions.REQUEST_CURRENT_LOCATION_FAILURE,
      errInfo:errInfo
    }
  },


  fetchCurrentLocation:()=>{
    return (dispatch)=>{
      dispatch(map_actions.requestCurrentLocation());
      fetchCurrent()
      .then(locationData => {
        dispatch(map_actions.requestCurrentLocationSuccess(locationData));
      })
      .catch((err) => {
        console.log('there is something wrong happen');
        throw err;
      })
    }
  }

}

const update_location_actions = {
  UPDATE_LOCATION:'UPDATE_LOCATION',

  updateLocation:(region)=>{
    return {
      type:map_actions.UPDATE_LOCATION,
      workload:region
    }
  }

}

const map_actions = {
  ...current_location_actions,
  ...update_location_actions
}

module.exports = map_actions
