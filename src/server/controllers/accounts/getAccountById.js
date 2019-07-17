'use strict';

import { responseDataFormat, OK } from '../../helpers';

/**
 * Get account by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getAccountById = (req, res) => {
	const account = req.account;

	return res.status(OK).json(responseDataFormat({ data: account }));
};
