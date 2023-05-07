import React, {useState} from 'react';
import {Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';


import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import themeReducer from './stores/themeReducer';

// import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import WalkthroughScreen from './screens/WalkthroughScreen';

import {MainLayout, CourseListing, CourseView} from './screens';

const Stack = createSharedElementStackNavigator();
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
  const [isLogIn, setIsLogin] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLogIn ? (
          <Stack.Navigator
            screenOptions={{
              useNativeDriver: true,
              headerShown: false,
            }}
            initialRouteName={'Dashboard'}
            detachInactiveScreens={false}>
            <Stack.Screen name="Dashboard" component={MainLayout} />

            <Stack.Screen
              name="CourseListing"
              component={CourseListing}
              options={() => options}
            />

            <Stack.Screen name="CourseDetails" component={CourseView} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName={'LoginScreen'}>
            <Stack.Screen
              name="LoginScreen"
              options={{headerShown: false}}
              component={LoginScreen}
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
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
