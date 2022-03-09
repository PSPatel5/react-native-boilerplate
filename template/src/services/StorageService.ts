import { MMKV } from 'react-native-mmkv';
const storage = new MMKV();
const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const setAccessToken = (token: string) => {
  try {
    storage.set(`Bearer ${ACCESS_TOKEN}`, token);
  } catch (error) {}
};

export const getAccessToken = (): string => {
  try {
    return storage.getString(ACCESS_TOKEN) || '';
  } catch (error) {
    return '';
  }
};

export const deleteAllLocalData = async () => {
  try {
    storage.clearAll();
  } catch (error) {}
};
