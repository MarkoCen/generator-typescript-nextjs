import { IAction } from '../actions/index.action';
import { VM } from '../action-types';

export const toggleItemModal = (isOpen: boolean): IAction => ({
    type: VM.TOGGLE_PIC,
    payload: isOpen,
});
