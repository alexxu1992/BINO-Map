import {connect} from 'react-redux';
import root_actions from '../actions/root_actions';
import Map from '../components/Map';

//Transfer the received states to the related props
const mapStateToProps = (state)=>{
  return {
    viewLocation: state.maps.viewLocation,
    markers: state.maps.markers
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    fetchCurrentLocation:()=>{
      dispatch(root_actions.fetchCurrentLocation());
    },
    updateLocation:(region)=>{
      dispatch(root_actions.updateLocation(region));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
