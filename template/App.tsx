/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {AppNavigator} from 'navigation/AppNavigator';

const App: () => Node = () => {
  return <AppNavigator />;
};

export default App;
