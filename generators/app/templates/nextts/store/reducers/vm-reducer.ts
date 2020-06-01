import { createReducer } from '@reduxjs/toolkit';
import { IViewModelState } from '~/models/vm';

import { togglePic } from '../actions/vm-actions';

export const defaultVmStates: IViewModelState = {
  isPicOpen: false,
};

export const vmReducer = createReducer<IViewModelState>(defaultVmStates, (builder) => {
  builder.addCase(togglePic, (state, action) => {
    state.isPicOpen = action.payload.isOpen;
  });
});
