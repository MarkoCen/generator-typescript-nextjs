import { Router } from 'express';
import { sendGreetings } from '../controllers/greetings.controller';
import { APIs } from '../lib/api-routes';

const router = Router();

router.route(APIs.greetings).get(sendGreetings);

export default router;
