import { ErrorRequestHandler } from 'express';
import Jobeat from '@interfaces/core';
import chalk from 'chalk';

const errorHandler: ErrorRequestHandler = (
    err: any,
    _req: Jobeat.Request,
    res: Jobeat.Response,
    next: Jobeat.NextFunction
) => {
    const message = err instanceof Error ? err.message : err;
    console.log(chalk.red('[Application] ') + (err instanceof Error ? err.message : err));
    res.status(500).json({
        error: message,
        status: 0,
    });
    next();
};

export default errorHandler;
