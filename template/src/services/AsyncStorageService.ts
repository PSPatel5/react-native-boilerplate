import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const setAccessTokens = async (token: string) => {
  try {
    await AsyncStorage.setItem(`Bearer ${ACCESS_TOKEN}`, token);
  } catch (error) {}
};

export const getAccessToken = async (): Promise<string> => {
  try {
    return (await AsyncStorage.getItem(ACCESS_TOKEN)) || '';
  } catch (error) {
    return '';
  }
};

export const deleteAllLocalData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keys);
  } catch (error) {}
};
