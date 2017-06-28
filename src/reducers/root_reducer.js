import {combineReducers} from 'redux';
import maps from './map_reducer';

const root_reducer = combineReducers({
  maps
})

export default root_reducer;
