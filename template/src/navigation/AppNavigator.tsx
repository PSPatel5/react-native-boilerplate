import React, { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'services/NavigationService';
import { RootNavigator } from './RootNavigator';
import { darkColors, lightColors } from 'themes';
import { IState } from '@/utils/Interfaces';

export const AppNavigator = () => {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === 'dark');

  const currentTheme = useSelector((state: IState) => state.theme.theme);

  useEffect(() => {
    const eventListener = Appearance.addChangeListener(({ colorScheme }) => {
      if (currentTheme === 'System') {
        setIsDark(colorScheme === 'dark');
      }
    });
    if (currentTheme === 'System') {
      setIsDark(Appearance.getColorScheme() === 'dark');
    } else {
      setIsDark(currentTheme === 'Dark');
    }
    return () => eventListener.remove();
  }, [currentTheme]);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{ dark: isDark, colors: isDark ? darkColors : lightColors }}>
      <RootNavigator />
    </NavigationContainer>
  );
};
