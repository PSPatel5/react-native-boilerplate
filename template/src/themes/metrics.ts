import { Dimensions, PixelRatio } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const scale = SCREEN_WIDTH / 320;

export const widthPercentageToDP = (widthPercent: string) => {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
};

export const heightPercentageToDP = (heightPercent: string) => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
};

export const normalize = (size: number) => {
  const newSize: number = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export default {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  widthPercentageToDP,
  heightPercentageToDP,
  normalize,
};
