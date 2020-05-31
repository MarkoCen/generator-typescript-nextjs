import IConfig from './IConfig';

const prodConfig: IConfig = {
    port: process.env.LISTEN_PORT,
    sessionSecret: process.env.SESSION_SECRET,
    mongodb: {
        url: process.env.MONGODB_URL,
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD,
    },
};

export default prodConfig;
