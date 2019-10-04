import { Router } from 'express';
import { corsAuth } from '../middlewares/cors.middleware';
import greetingsRouter from './greetings.router';
import nextRouter from './next.router';
import staticRouter from './static.router';

const rootRouter = Router();
const apiRouter = Router();

apiRouter.use(greetingsRouter);

rootRouter.use('/api', corsAuth, apiRouter);

rootRouter.use(staticRouter);
rootRouter.use(nextRouter);

export default rootRouter;
