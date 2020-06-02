export enum GreetingsError {
  FAILED_SEND_GREETINGS = 10000,
}

export class ControllerError {
  static handle(code: number, message: string, ex: any, res?: any, logger?: any) {
    const err =
      ex instanceof ControllerError
        ? ex
        : new ControllerError({
            code,
            message,
            exception: ex,
          });
    if (logger) {
      logger.error(err.toString(), ex);
    }
    if (res) {
      res.status(500).json(err.toObject());
    }
  }

  private errorCode: number;
  private errorMessage: string;
  private exception: any;

  constructor(payload: { code: number; exception?: any; message?: string }) {
    this.errorCode = payload.code;
    this.exception = payload.exception;
    if (payload.message) {
      this.errorMessage = payload.message;
    }
  }

  toString() {
    return `[${this.errorCode}] ${this.errorMessage}`;
  }

  toObject() {
    try {
      return {
        code: this.errorCode,
        message: this.errorMessage,
        exception: JSON.stringify(this.exception),
      };
    } catch (ex) {
      return {
        code: this.errorCode,
        message: this.errorMessage,
        exception: this.exception,
      };
    }
  }
}
