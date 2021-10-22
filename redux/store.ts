/* eslint-disable @typescript-eslint/no-explicit-any */
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { applyMiddleware, Store, createStore } from 'redux';
import { rootReducer, RootState } from './reducers';
import rootSaga from './sagas';
import { INIT_AUTH_STATE } from './auth/reducer';
import { INIT_MAIN_STATE } from './main/reducer';

// Middleware: Redux Persist Config
const persistConfig: any = {
  // eslint-disable-line
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['auth', 'main'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
  stateReconciler: hardSet,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (
  initialState?: RootState,
): Store<RootState | undefined> => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(persistedReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').rootReducer; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export const store = configureStore({
  auth: INIT_AUTH_STATE,
  main: INIT_MAIN_STATE,
});

// Middleware: Redux Persist Persister
export const persistor = persistStore(store);
