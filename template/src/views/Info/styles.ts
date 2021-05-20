import { Platform, StyleSheet } from 'react-native';
import { Colors, normalize, screenHeight } from 'themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.select({ android: 40 }),
    paddingHorizontal: normalize(4),
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: screenHeight * 0.15,
  },
  text: {
    marginVertical: normalize(14),
    fontSize: normalize(15),
    lineHeight: normalize(16),
    textAlign: 'center',
  },
  smallText: {
    marginVertical: normalize(14),
    marginStart: normalize(12),
    textAlign: 'left',
    fontSize: normalize(13),
    lineHeight: normalize(17),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: normalize(6),
    width: '100%',
    justifyContent: 'space-evenly',
  },
  titleStyle: {
    color: Colors.white,
  },
});
