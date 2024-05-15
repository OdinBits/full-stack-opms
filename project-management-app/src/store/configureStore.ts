import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import paginationReducer from './paginationSlice';
import dashReducer from './Dashboard.slice';
import navigationPersistanceReducer from './navigationPersistanceSlice';
import takeProjectSubmissionState from './ProjectSubmissionSlice';
import barGraphSlice from './barGraphSlice';
import { projectReducer } from './AddProjectSlice';
import UpdateStatusSlice from './UpdateStatusSlice';
import flagReducer from './flagSlice';
import tableauSlice from './tableauChartSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    pagination: paginationReducer,
    dashboradState: dashReducer,
    navLinkStates: navigationPersistanceReducer,
    projectSubmissionState: takeProjectSubmissionState,
    barGraphState: barGraphSlice,
    projectSlice: projectReducer,
    statusSlice: UpdateStatusSlice,
    flag: flagReducer,
    tableauSlice : tableauSlice,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            ignoredPaths: ['items.dates'],
        },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;