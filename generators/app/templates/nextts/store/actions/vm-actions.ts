import { createAction } from '@reduxjs/toolkit';
import { VM } from '../action-types';

export const togglePic = createAction<{ isOpen: boolean }, VM.TOGGLE_PIC>(VM.TOGGLE_PIC);
