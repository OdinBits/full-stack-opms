import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {  persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import { NavReducer, loginReducer, CreateProjectReducer, PageNameReducer } from "./slices";

const persistConfig = {
    key: 'root',
    storage: storage,
}

const rootReducer = combineReducers({
    navLinks: NavReducer,
    loginState: loginReducer,
    createProject: CreateProjectReducer,
    pageName: PageNameReducer
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