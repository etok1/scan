import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "../slices/authSlice";
import paramReducer from "../slices/ParamSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'; 
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";





const persistConfig = {
  key: 'root',
  storage, // The storage type (localStorage in this case)
};

const rootReducer = combineReducers({
  auth: authReducer,
  param: paramReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
