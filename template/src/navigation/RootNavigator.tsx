import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Info } from 'views/Info';
const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
};
