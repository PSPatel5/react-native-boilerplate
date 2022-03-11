import { StyleSheet } from 'react-native';
import { normalize, Colors } from '@/themes';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(12),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderRadius: normalize(4),
    marginVertical: normalize(2),
    marginHorizontal: normalize(4),
  },
  disabledButton: {
    backgroundColor: Colors.lightGrey,
  },
  titleStyle: {
    textTransform: 'uppercase',
  },
});
