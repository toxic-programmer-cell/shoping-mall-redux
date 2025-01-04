import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducer/reducer';
import rootSaga from '../sagas';
import storage from 'redux-persist/lib/storage'; 


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

// Persistor for Persist
const persistor = persistStore(store);

export { store, persistor };