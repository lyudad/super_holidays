import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/slice';

export const store = configureStore({
  reducer: user,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production'
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
