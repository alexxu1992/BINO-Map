import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

// Import the neccerry root reducer
import root_reducer from './reducers/root_reducer';

// Create the initial state
const initialState = {
  maps:{
    isFetching:false,
    viewLocation:{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    gpsLocation:{},
    markers:[],
    err:''
  }
};

// Create redux store with middleware
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(root_reducer, initialState)

export default store;
