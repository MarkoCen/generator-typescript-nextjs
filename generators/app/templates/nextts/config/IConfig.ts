export default interface IConfig {
    port: string;
    sessionSecret: string;
    mongodb: {
        url: string;
        username: string;
        password: string;
    };
}
