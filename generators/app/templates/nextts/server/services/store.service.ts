import { IStoreState } from '../../store/reducers/index.reducer';

export async function getInitStoreStates(req): Promise<IStoreState> {
    const agentType = req.device.type;

    return {
        vm: {
            isPicOpen: false,
            agentType,
        },
    };
}
