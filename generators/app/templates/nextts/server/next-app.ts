import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextAppHandler = nextApp.getRequestHandler();

export { nextApp, nextAppHandler };
