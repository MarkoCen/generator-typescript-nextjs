import * as cors from 'cors';
import { IMiddleware } from '../models/controller';

const corsHandler: IMiddleware = cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    optionsSuccessStatus: 200,
});

export const corsAuth: IMiddleware = async (req, res, next) => {
    corsHandler(req, res, next);
};
