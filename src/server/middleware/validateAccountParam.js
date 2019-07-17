'use strict';

import { Account } from '../model';
import { NOT_FOUND, createError } from '../helpers';

/**
 * Validate account request parameter
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @param {*} accountID 
 */
export const validateAccountParam = async (req, res, next, accountID) => {
	try {
		const account = await Account.getById(accountID);

		if (!account) {
			return next(
				createError({
					message: 'Account ID is invalid.',
					status: NOT_FOUND
				})
			);
		}

		req.account = account;

		next();
	} catch (error) {
		next(error);
	}
};
