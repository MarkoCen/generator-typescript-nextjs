import { Router } from 'express';
import greetingsRouter from './greetings-router';
import nextRouter from './next-router';
import staticRouter from './static-router';

const rootRouter = Router();
const apiRouter = Router();

apiRouter.use(greetingsRouter);

rootRouter.use('/api', apiRouter);

rootRouter.use(staticRouter);
rootRouter.use(nextRouter);

export default rootRouter;
