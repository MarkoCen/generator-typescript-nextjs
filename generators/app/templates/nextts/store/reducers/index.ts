import { combineReducers } from '@reduxjs/toolkit';
import { IStoreState } from '~/models/store';
import { vmReducer, defaultVmStates } from '~/store/reducers/vm-reducer';

const rootReducer = combineReducers<IStoreState>({
  vm: vmReducer,
});

const defaultStoreStates: IStoreState = {
  vm: defaultVmStates,
};

export { rootReducer, defaultStoreStates };
