import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Info } from 'views/Info';
const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
};
