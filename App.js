// import React from 'react';
// import AppNavigator from './src/router';
// import {SafeAreaProvider} from 'react-native-safe-area-context';

// function App() {
//   return (
//     <SafeAreaProvider>
//       <AppNavigator />
//     </SafeAreaProvider>
//   );
// }

// export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src_Firebase/components/login';
import Signup from './src_Firebase/components/signup';
import Dashboard from './src_Firebase/components/dashboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Signup'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({title: 'Login'}, {headerLeft: null})}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({title: 'Dashboard'}, {headerLeft: null})}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
