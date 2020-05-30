import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Index from './src/index';

export default function App() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <Index />
    </>
  );
}
