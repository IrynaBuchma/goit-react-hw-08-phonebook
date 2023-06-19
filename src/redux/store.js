import { configureStore } from '@reduxjs/toolkit';
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
  import { contactsReducer } from './contacts/contactsSlice';
  import { authReducer } from './auth/authSlice';
  import { filterReducer } from './filter/filterSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  }

// const persistAddContactReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactsReducer,
      filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
  export const persistor = persistStore(store);