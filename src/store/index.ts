import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userAuthApi, persistetUserAuth } from './userAuthApi/userAuthApi';
import { coursesApi, persistetCourses } from './coursesApi/coursesApi';
import { 
    persistedUserAuthClientDataSlice,
    persistedUserFavClientDataSlice,
    persistedUserProgressClientDataSlice 
} from './userClientDataSlise';

import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

export const store = configureStore({
    reducer: {
        userAuthApi: persistetUserAuth,
        coursesApi: persistetCourses,
        userAuthClientData: persistedUserAuthClientDataSlice,
        userProgressClientData: persistedUserProgressClientDataSlice,
        userFavClientData: persistedUserFavClientDataSlice,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }
    ), userAuthApi.middleware, coursesApi.middleware]
});

setupListeners(store.dispatch);

export type IStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './userAuthApi/userAuthApi';
export * from './coursesApi/coursesApi';
export * from './userClientDataSlise';
export const persistor = persistStore(store);