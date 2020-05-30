import React from 'react';
import {Image, StatusBar} from 'react-native';
import Orientation from 'react-native-orientation';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from './layout/Home';
import Equalizer from './layout/Equalizer';

const home_normal = require('../src/assets/img/common/home_nor.png');
const home_active = require('../src/assets/img/common/home_act.png');
const equalizer_normal = require('../src/assets/img/common/equalizer_nor.png');
const equalizer_active = require('../src/assets/img/common/equalizer_act.png');

export default () => {
  Orientation.lockToPortrait();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconSource;
            if (route.name === 'home') {
              iconSource = focused ? home_active : home_normal;
            } else if (route.name === 'equalizer') {
              iconSource = focused ? equalizer_active : equalizer_normal;
            }

            // You can return any component that you like here!
            return (
              <Image
                source={iconSource}
                style={{width: size + 15, height: size + 15}}
              />
            );
          },
        })}
        tabBarOptions={{
          showLabel: false,
          style: {backgroundColor: '#000', borderTopWidth: 0},
        }}>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="equalizer" component={Equalizer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
