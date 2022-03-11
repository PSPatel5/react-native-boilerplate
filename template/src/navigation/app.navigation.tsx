import React, { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root.navigation';
import { navigationRef } from '@/services/navigation.service';
import { darkColors, lightColors } from '@/themes';
import { useSelector } from 'react-redux';
import { IRootState } from '@/redux/store';

export const AppNavigator = () => {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === 'dark');
  const currentTheme = useSelector(
    (state: IRootState) => state.theme.currentTheme,
  );

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
