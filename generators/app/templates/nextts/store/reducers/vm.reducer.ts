import { IAction } from '../actions/index.action';
import { REHYDRATE, VM } from '../action-types';

export type AgentType = 'phone' | 'tablet' | 'desktop' | 'tv';

export interface IViewModelState {
    isPicOpen: boolean;
    agentType: AgentType;
}

const initStates: IViewModelState = {
    isPicOpen: false,
    agentType: 'desktop',
};

export function vm(state = initStates, action: IAction) {
    switch (action.type) {
        case REHYDRATE: {
            return action.payload && action.payload.vm ? { ...state } : state;
        }
        case VM.TOGGLE_PIC: {
            return { ...state, isPicOpen: action.payload };
        }
        default:
            return state;
    }
}
