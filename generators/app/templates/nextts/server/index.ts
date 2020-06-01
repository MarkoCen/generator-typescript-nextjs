import http from 'http';
import { createApp } from '~/server/app';
import { nextApp } from '~/server/next-app';
import config from '~/server/config';
import logger from '~/server/lib/logger';

nextApp.prepare().then(async () => {
  const app = await createApp();
  const server = http.createServer(app);

  server.listen(config.port, () => {
    logger.info(`server listened on ${config.port}`);
  });
});
