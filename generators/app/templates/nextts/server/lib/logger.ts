import fs from 'fs';
import path from 'path';
import * as winston from 'winston';

const isProd = process.env.NODE_ENV === 'production';

// create logs folder if not existed
if (!fs.existsSync(path.resolve(__dirname, 'logs'))) {
  fs.mkdirSync(path.resolve(__dirname, 'logs'));
}

const debugLogger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
    }),
  ],
});

const prologger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.File({
      level: 'error',
      filename: path.resolve(__dirname, `logs/error.log`),
      maxsize: 10000000, // 10mb per log file
      handleExceptions: true,
    }),
    new winston.transports.File({
      filename: path.resolve(__dirname, `logs/system.log`),
      maxsize: 10000000, // 10mb per log file
      handleExceptions: false,
    }),
  ],
});

const logger = isProd ? prologger : debugLogger;

export default logger;
