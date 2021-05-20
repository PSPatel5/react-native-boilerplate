import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'services/NavigationService';
import { RootNavigator } from './RootNavigator';
export type appThemes = 'System' | 'Day-Night' | 'Light' | 'Dark';
export const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};
