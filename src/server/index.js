'use strict';
/**
 * Application Main file
 */
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { allErrorHandler } from './middleware';
import { OK, responseDataFormat } from './helpers';
import { accountRouter } from './routes/accountRouter';

const app = express();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => {
	return res.status(OK).json(
		responseDataFormat({
			message: 'Welcome to home route...',
			data: []
		})
	);
});

app.use('/api/v1', [accountRouter]);

// Handle invalid request
app.all('*', (req, res) => {
	return res.status(404).json({
		success: false,
		message: 'Route does not exist...',
		body: []
	});
});

// handle all application error
app.use(allErrorHandler());

export default app;
