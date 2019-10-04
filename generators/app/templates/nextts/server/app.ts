import * as bodyParser from 'body-parser';
import * as connectMongo from 'connect-mongo';
import * as express from 'express';
import * as device from 'express-device';
import * as expressSession from 'express-session';
import * as helmet from 'helmet';
import nextI18NextMiddleware from 'next-i18next/middleware';
import config from '../config';
import { nextI18Next } from '../i18n/i18n-client';
import { conn } from './lib/mongodb';
import routers from './routers';

const app = express();

// setup Express Helmet
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'ASP.NET' }));

// setup user agent middleware
app.use(device.capture());

// setup session cookie
const MongoStore = connectMongo(expressSession);
app.enable('trust proxy');
app.use(
    expressSession({
        cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7, secure: false },
        name: '<%= app.name %>.sid',
        proxy: process.env.NODE_ENV === 'production',
        resave: false,
        saveUninitialized: false,
        secret: config.sessionSecret,
        unset: 'destroy',
        store: new MongoStore({ mongooseConnection: conn, autoRemove: 'interval', autoRemoveInterval: 60 }),
    }),
);

// setup i18n
app.use(nextI18NextMiddleware(nextI18Next));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routers);

export default app;
