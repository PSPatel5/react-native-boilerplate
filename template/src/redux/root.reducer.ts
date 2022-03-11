import { combineReducers } from '@reduxjs/toolkit';
import { themeReducer } from './slice';

export const rootReducer = combineReducers({
  theme: themeReducer,
});
