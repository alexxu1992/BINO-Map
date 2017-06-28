// ** Entry File
// Basic dependencies
import React from 'react';
import {Provider} from 'react-redux';

// Costume components
import store from './src/store';
// import Map_app from './src/containers/Map_Container';
import NavigatorIOSApp from './src/components/NavigatorIOSApp'


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOSApp />
      </Provider>
    );
  }
}
