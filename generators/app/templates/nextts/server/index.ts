import { createServer } from 'http';
import config from '../config';
import app from './app';
import { logger } from './lib/logger';
import { nextApp } from './next-app';

nextApp.prepare().then(() => {
    const server = createServer(app);
    server.listen(config.port, () => logger.info(`Server listened on ${config.port}`));
});
