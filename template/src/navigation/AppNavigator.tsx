import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Info} from 'views/Info';
import {navigationRef} from 'services/NavigationService';
const Stack = createStackNavigator();
export type appThemes = 'System' | 'Day-Night' | 'Light' | 'Dark';
export const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
