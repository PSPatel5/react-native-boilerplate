import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root.reducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type IAppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof rootReducer>;
