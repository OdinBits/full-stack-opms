import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {  persistStore } from "redux-persist";
//import logoutReducer from "./store/Authentication/logoutSlice";
import navigationReducer from './Navigation/NavSlice';
import refreshTokenReducer from "./Authentication/refreshTokenSlice";
import persistReducer from "redux-persist/es/persistReducer";
import loginSlice from './Authentication/loginSlice';
import createProjectReducer  from "./Projects/CreateProjectSlice";

const persistConfig = {
    key: 'root',
    storage: storage,
}

const rootReducer = combineReducers({
    navLinkStates: navigationReducer,
    refreshToken: refreshTokenReducer,
    loginState: loginSlice,
    createProject: createProjectReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            ignoredPaths: ['items.dates'],
        },
    }),
})

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;