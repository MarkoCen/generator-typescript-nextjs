import Axios, { AxiosRequestConfig } from 'axios';

interface IRequestOptions<Body = any> {
  path: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'HEAD' | 'PUT';
  body?: Body;
  query?: { [key in string]: string };
}

const request = async <T>(opts: IRequestOptions): Promise<T> => {
  const config: AxiosRequestConfig = {
    url: `/api${opts.path}`,
    method: opts.method,
  };

  if (opts.method === 'POST' || opts.method === 'PUT' || opts.method === 'PATCH') {
    config.data = opts.body || {};
  }

  if (opts.method === 'GET' || opts.method === 'DELETE') {
    config.params = opts.query;
  }

  const response = await Axios.request<T>(config);
  return response.data;
};

export const get = <T = any>(path: string, query: { [key in string]: string }): Promise<T> =>
  request<T>({
    path,
    method: 'GET',
    query,
  });

export const post = <T = any>(path: string, body: any): Promise<T> =>
  request<T>({
    path,
    method: 'POST',
    body,
  });

export const del = <T = any>(path: string, query: { [key in string]: string }): Promise<T> =>
  request<T>({
    path,
    method: 'DELETE',
    query,
  });

export const put = <T = any>(path: string, body: any): Promise<T> =>
  request<T>({
    path,
    method: 'PUT',
    body,
  });

export const patch = <T = any>(path: string, body: any): Promise<T> =>
  request<T>({
    path,
    method: 'PATCH',
    body,
  });

export const head = <T = any>(path: string, query: { [key in string]: string }): Promise<T> =>
  request<T>({
    path,
    method: 'HEAD',
    query,
  });
