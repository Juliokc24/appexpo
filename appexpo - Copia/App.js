import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Linkagem from './src/linkagem';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content"/>
      <Linkagem/>
    </NavigationContainer>
  );
}

