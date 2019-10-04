import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

import devConfig from './dev.config';
import prodConfig from './prod.config';

const baseConfig = {};

const config =
    process.env.NODE_ENV === 'production' ? { ...baseConfig, ...prodConfig } : { ...baseConfig, ...devConfig };

export default config;
