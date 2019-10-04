import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const baseURL = '/api/';

async function request<T>(method: Method, url: string, payload: T): Promise<T> {
    try {
        const headers = {};

        const config: AxiosRequestConfig = {
            url,
            method,
            baseURL,
            headers,
            params: method === 'GET' || method === 'DELETE' ? payload : null,
            data: method === 'GET' || method === 'DELETE' ? null : payload,
            responseType: 'json',
        };
        const res = await Axios.request<T>(config);
        return res.data;
    } catch (ex) {
        const { response } = ex as AxiosError;
        throw {
            status: response.status,
            code: response.data ? response.data.code : -1,
            message: response.data ? response.data.message : '',
        };
    }
}

export function get<T = any>(url: string, payload = null): Promise<T> {
    return request<T>('GET', url, payload);
}

export function post<T = any>(url: string, payload = null): Promise<T> {
    return request<T>('POST', url, payload);
}

export function put<T = any>(url: string, payload = null): Promise<T> {
    return request<T>('PUT', url, payload);
}

export function del<T = any>(url: string, payload = null): Promise<T> {
    return request<T>('DELETE', url, payload);
}

export function patch<T = any>(url: string, payload = null): Promise<T> {
    return request<T>('PATCH', url, payload);
}
