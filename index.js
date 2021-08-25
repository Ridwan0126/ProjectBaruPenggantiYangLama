/**
 * @format
 */
// import React from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import {Provider} from 'react-redux';
// import configureStore from './store';
// import {SQLiteContext, SQLite3} from './config/sqlite';

// const store = configureStore();

// const RNRedux = () => (
//   <Provider store={store}>
//     <SQLiteContext.Provider value={new SQLite3()}>
//       <App />
//     </SQLiteContext.Provider>
//   </Provider>
// );

// AppRegistry.registerComponent(appName, () => RNRedux);

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
