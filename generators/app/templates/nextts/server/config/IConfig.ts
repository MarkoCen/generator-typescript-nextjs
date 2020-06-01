export default interface IConfig {
  port: string;
  mongodb: {
    url: string;
    username: string;
    password: string;
  };
}
