import { combineReducers } from 'redux';
import { IAction } from '../actions/index.action';
import { IViewModelState, vm } from './vm.reducer';

export interface IStoreState {
    vm: IViewModelState;
}

const reducers = combineReducers<IStoreState, IAction>({
    vm,
});

export default reducers;
