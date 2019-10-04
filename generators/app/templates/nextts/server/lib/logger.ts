import * as fs from 'fs';
import * as path from 'path';
import * as winston from 'winston';

const baseFolder = path.dirname(require.main.filename);
const isProduction = process.env.NODE_ENV === 'production';
const LOGS_FOLDER_NAME = 'logs/';

// create logs folder if not existed
if (!fs.existsSync(path.resolve(baseFolder, LOGS_FOLDER_NAME))) {
    fs.mkdirSync(path.resolve(baseFolder, LOGS_FOLDER_NAME));
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
            filename: path.resolve(baseFolder, `${LOGS_FOLDER_NAME}system.log`),
            maxsize: 10000000, // 10mb per log file
            handleExceptions: true,
        }),
    ],
});

const logger = isProduction ? prologger : debugLogger;

export { logger };
