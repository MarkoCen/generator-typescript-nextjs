import { get } from '~/client/lib/ajax';
import { APIs } from '~/models/api';

export const requestGreetings = async (): Promise<string> => {
  return get<string>(APIs.greetings());
};
