import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './app/slices-auth';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsApi } from './app/operation';
import filter from './app/app-phonebook-reducer';
const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};
const authPersisteReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
  reducer: {
    // contacts: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: authPersisteReducer,
    getFilter: filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      },
      //   ПЕРЕВІРИТИ ЧИ ВПЛИВАЄ НА ПЕРВІРКУ
    )
      // .concat(logger)
      .concat(contactsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
