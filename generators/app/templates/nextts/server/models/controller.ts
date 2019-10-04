import { NextFunction, Request, RequestHandler, Response } from 'express';
import i18next from 'i18next';
import { IUser } from '../../shared-models/user';

interface IDictionary {
    [key: string]: any;
}

export interface IRequest<T extends IDictionary> extends Request {
    body: T;
    params: T;
    query: T;
    user?: IUser;
    i18n: i18next.i18n;
    t: i18next.TFunction;
}

export interface IResponse<T = any> extends Response {
    status(code: number): IResponse<T>;
    json(body?: T): IResponse<T>;
}

export interface IResponseError {
    code?: number;
    message?: string;
    exception?: any;
}

export interface IController<T = any, P = any> extends RequestHandler {
    (req: IRequest<P>, res: IResponse<T | IResponseError>, next: NextFunction): any;
}

export type IMiddleware<T = any, P = any> = (
    req: IRequest<P>,
    res: IResponse<T | IResponseError>,
    next: NextFunction,
) => void;
