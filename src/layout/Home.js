import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './home/Index';
import Music from './music/Index';
import Radio from './radio/Index';

export default () => {
  return (
    <Stack.Navigator headerMode="none"  initialRouteName="home/index">
      <Stack.Screen name="home/index" component={Home} />
      <Stack.Screen name="home/music" component={Music} />
      <Stack.Screen name="home/radio" component={Radio} />
    </Stack.Navigator>
  );
};
