import IConfig from './IConfig';

const devConfig: IConfig = {
    port: process.env.LISTEN_PORT_DEV,
    sessionSecret: process.env.SESSION_SECRET_DEV,
    mongodb: {
        url: process.env.MONGODB_URL_DEV,
        username: process.env.MONGODB_USERNAME_DEV,
        password: process.env.MONGODB_PASSWORD_DEV,
    },
};

export default devConfig;
