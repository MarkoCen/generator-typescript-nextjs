import { get } from '../lib/ajax';
import api from '../lib/api';

export const requestGreetings = async (): Promise<string> => {
    return get<string>(api.greetings);
};
