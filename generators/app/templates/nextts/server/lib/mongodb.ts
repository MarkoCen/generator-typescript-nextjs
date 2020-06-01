import mongoose from 'mongoose';
import config from '~/server/config';
import { logger } from './logger';

const connectStr = `mongodb://${config.mongodb.username}:${config.mongodb.password}@${config.mongodb.url}`;
const conn: mongoose.Connection = mongoose.createConnection(connectStr, {
  promiseLibrary: Promise,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  config: { autoIndex: false },
});

conn.on('connected', () => logger.info('MongoDB connected'));

conn.on('error', (err) => logger.error('Failed to connect to MongoDB', err));

export { conn };
