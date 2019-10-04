import { ControllerError, GreetingsError } from '../../shared-models/errors';
import { logger } from '../lib/logger';
import { IController } from '../models/controller';

export const sendGreetings: IController<string, void> = async (req, res) => {
    try {
        res.json('greetings');
    } catch (ex) {
        ControllerError.handle(GreetingsError.FAILED_SEND_GREETINGS, 'Failed to send greetings', ex, res, logger);
    }
};
