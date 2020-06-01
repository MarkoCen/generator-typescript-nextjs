import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import nextI18NextMiddleware from 'next-i18next/middleware';
import { nextI18Next } from '~/i18n/config';
import routers from './routers';

export const createApp = async () => {
  const app = express();

  // setup Express Helmet
  app.use(helmet());
  app.use(helmet.referrerPolicy());

  // setup i18n
  await nextI18next.initPromise;
  app.use(nextI18NextMiddleware(nextI18Next));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(routers);

  return app;
};
