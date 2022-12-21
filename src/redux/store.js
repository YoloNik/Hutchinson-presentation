import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import departmetnSlice from './departmetn/departmetnSlice';
import teamSlice from './taem/teamSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistTokenConfig = {
  key: 'idToken',
  storage: storage,
  whitelist: ['idToken', 'refreshToken'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistTokenConfig, authSlice),
    department: departmetnSlice,
    team: teamSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);
export { store, persistor };
