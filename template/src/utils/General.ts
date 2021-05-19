import { Permission, PermissionsAndroid, Platform } from 'react-native';

export const hasPermission = async (permissionName: Permission) => {
  try {
    if (Platform.OS === 'android') {
      const permission = {
        title: 'Permission Is Required',
        message: 'This Application Requires  Permission To Work Properly',
        options: ['Ask Me Later', 'Cancel', 'OK'],
      };
      const granted = await PermissionsAndroid.request(permissionName, {
        title: permission.title,
        message: permission.message,
        buttonNeutral: permission.options[0],
        buttonNegative: permission.options[1],
        buttonPositive: permission.options[2],
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};
