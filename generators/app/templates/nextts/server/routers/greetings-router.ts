import { Router } from 'express';
import { sendGreetings } from '~/server/controllers/greetings-controller';
import { APIs } from '~/models/api';

const router = Router();

router.route(APIs.greetings()).get(sendGreetings);

export default router;
