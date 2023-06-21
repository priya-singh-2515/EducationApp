import React from 'react';
import {Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import themeReducer from './stores/themeReducer';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import WalkthroughScreen from './screens/WalkthroughScreen';

import {MainLayout, CourseListing, CourseView} from './screens';

const Stack = createNativeStackNavigator();
const options = {
  gestureEnabled: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {duration: 400, easing: Easing.inOut(Easing.ease)},
    },
    close: {
      animation: 'timing',
      config: {duration: 400, easing: Easing.inOut(Easing.ease)},
    },
  },
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const store = createStore(themeReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            useNativeDriver: true,
            headerShown: false,
            animation: 'simple_push',
          }}
          initialRouteName={'SignUp'}
          detachInactiveScreens={false}>
          <Stack.Screen name="Dashboard" component={MainLayout} />

          <Stack.Screen
            name="CourseListing"
            component={CourseListing}
            options={() => options}
          />

          <Stack.Screen name="CourseDetails" component={CourseView} />

          <Stack.Screen
            name="SignIn"
            options={{headerShown: false}}
            component={SignInScreen}
          />
          <Stack.Screen
            name="WalkthroughScreen"
            options={{headerShown: false}}
            component={WalkthroughScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{headerShown: false}}
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
