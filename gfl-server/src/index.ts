import { dbRequired, errorHandler } from "./middleware";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import morgan from 'morgan'


// Load environment variables
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production', });
console.log(process.env.NODE_ENV);

// Initiate DB connection
console.log(chalk.green('[Database] ') + `Connecting to mongo instance ${process.env.CONNECTION_STRING}.`);
mongoose.connect(process.env.CONNECTION_STRING as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .catch(err => {
        mongoose.connection.emit('error', err);
        process.exit(0);
    });
mongoose.connection.on('error', (err) => console.log(chalk.red('[Database] ') + err.message));
mongoose.connection.once('open', () => console.log(chalk.green('[Database] ') + 'Connected to the database!'));
mongoose.connection.on('disconnected', () => console.log(chalk.green('[Database] ') + 'Disconnected!'));



// Init express app
const app = express();

// Middleware
app.use(dbRequired);



// app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb',extended: true}));

app.use(function (req, res, next) {
    res.removeHeader("X-Powered-By");
    next();
  });

app.use(
    cors({
        origin: [],
        allowedHeaders: ['X-Requested-With', 'X-HTTP-Method-Override', 'Content-Type', 'Accept', 'Origin', 'Authorization', 'sentry-trace'],
        credentials: true,
    })
);

// Static files
app.use(express.static('public'));
app.use('/avatar', express.static('uploads/avatars')); // Deprecated
app.use('/cv', express.static('uploads/cvs')); // Deprecated


/* eslint-disable @typescript-eslint/no-var-requires */
app.use('/auth', require('./routes/auth'));

/* eslint-enable @typescript-eslint/no-var-requires */

//Admin routes
const CategoriesRouter = require("./routes/admin/categories");


//Use the Admin routes
app.use(CategoriesRouter);


// We have to use error handler after routes!
app.use(errorHandler as any);

app.listen(parseInt(process.env.PORT as string), '0.0.0.0', () => {
    console.log(chalk.green('[Application] ') + 'API server started!');
});

module.exports = app;
