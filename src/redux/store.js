import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers';

export const store = configureStore({
  reducer: rootReducers,
  preloadedState: {},
  // devTools: true, // opcjonalne – domyślnie true w dev
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});

export default store;
