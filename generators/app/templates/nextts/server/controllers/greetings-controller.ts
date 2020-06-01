import { RequestHandler } from 'express-serve-static-core';
import { ControllerError, GreetingsError } from '~/models/errors';
import logger from '~/server/lib/logger';

export const sendGreetings: RequestHandler<undefined, string, void> = async (req, res) => {
  try {
    res.json('greetings');
  } catch (ex) {
    ControllerError.handle(
      GreetingsError.FAILED_SEND_GREETINGS,
      'Failed to send greetings',
      ex,
      res,
      logger,
    );
  }
};
