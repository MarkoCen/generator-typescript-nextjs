import { configureStore, compose, StoreEnhancer } from '@reduxjs/toolkit';
import persistState from 'redux-localstorage';
import filter from 'redux-localstorage-filter';
import localStorageAdapter from 'redux-localstorage/lib/adapters/localStorage';
import { defaultStoreStates, rootReducer } from '~/store/reducers';

const buildLocalStorageEnhancer = () => {
  const storage = compose(filter(['formatters', 'minifiers']))(
    localStorageAdapter(window.localStorage),
  );
  return persistState(storage, '456tool.store');
};

export const createStore = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const enhancers =
    typeof window !== 'undefined' ? [buildLocalStorageEnhancer() as StoreEnhancer] : [];

  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NEXTJS_ENV !== 'production',
    preloadedState: defaultStoreStates,
    // enhancers,
  });
};
