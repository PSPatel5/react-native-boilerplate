import { DefaultTheme, DarkTheme } from '@react-navigation/native';
const Colors = {
  red: '#ff0000',
  black: '#000000',
  transparentBlack: '#000000aa',
  transparentDark: '#444444aa',
  transparent: 'transparent',
  white: '#ffffff',
  darkBackground: '#1b262c',
  lightBackground: '#ffffff',
  darkPrimary: '#0f4c75',
  primary: '#0597fa',
  grey: '#5a5a5a',
  lightGrey: '#7a7a7a',
};

export default Colors;

export const darkColors = {
  ...DarkTheme.colors,
  background: '#1b262c',
  text: '#bbe1fa',
};

export const lightColors = {
  ...DefaultTheme.colors,
  background: '#ffffff',
  text: Colors.black,
};
