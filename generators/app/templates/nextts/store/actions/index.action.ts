import { Action } from 'redux';
import { VM } from '../action-types';

export interface IAction extends Action {
    type: VM;
    payload: any;
}
