import { RequestHandler } from 'express';
import { connection } from 'mongoose';

/**
 * Express middleware, that stops every request if the database is not present or isn't yet connected.
 * It is possible that requests may reach controllers during the connection period, so we block them.
 */
const databaseRequired: RequestHandler = (_req, _res, next) => {
    if (connection.readyState !== 1) return next(new Error('Connection to database was not established'))
    return next();
}

export default databaseRequired;