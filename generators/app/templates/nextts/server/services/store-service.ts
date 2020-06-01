import { IStoreState } from '~/models/store';

export const getInitStoreStates = async (): Promise<IStoreState> => {
  return {
    vm: {
      isPicOpen: false,
    },
  };
};
