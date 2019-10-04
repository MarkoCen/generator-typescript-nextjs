import { ServerResponse } from 'http';
import { applyMiddleware, compose, createStore as createReduxStore, Store } from 'redux';
import persistState from 'redux-localstorage';
import filter from 'redux-localstorage-filter';
import localStorageAdapter from 'redux-localstorage/lib/adapters/localStorage';
import thunk from 'redux-thunk';
import { IAction } from './actions/index.action';
import reducers, { IStoreState } from './reducers/index.reducer';

interface IReduxWrapperOptions {
    isServer: boolean;
    req?: any;
    res?: ServerResponse;
    query?: any;
}

export let store: Store<IStoreState, IAction>;

export function createStore(initStates: IStoreState, options: IReduxWrapperOptions) {
    const states = options.isServer && options.req ? options.req.body.initStates || initStates : initStates;
    const rootReducer = reducers;

    let enhancer;

    if (options.isServer) {
        enhancer = compose(applyMiddleware(thunk));
        store = createReduxStore<IStoreState, IAction, any, any>(rootReducer, states, enhancer);
    } else {
        const storage = compose(filter(['session.user', 'session.isAuth', 'vm.cateringSubmitTime']))(
            localStorageAdapter(window.localStorage),
        );
        // @ts-ignore
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(applyMiddleware(thunk), persistState(storage, 'bubblenation.store'));
        store = createReduxStore<IStoreState, IAction, any, any>(rootReducer, states, enhancer);
    }

    return store;
}
