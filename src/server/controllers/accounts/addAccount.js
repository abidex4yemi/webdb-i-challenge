import { Account } from '../../model';
import { CREATED, responseDataFormat, createError, CONFLICT } from '../../helpers';

/**
 * Insert new account
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
export const addAccount = async (req, res, next) => {
	try {
		// Get account details from req body
		const accountDetails = req.body.sanitizedBody;

		// Insert new action
		const createdAccount = await Account.insert(accountDetails);

		return res.status(CREATED).json(
			responseDataFormat({
				data: createdAccount,
				message: 'Account created.'
			})
		);
	} catch (error) {
		if (error.code === 'SQLITE_CONSTRAINT') {
			return next(
				createError({
					status: CONFLICT,
					message: 'Account name already exist'
				})
			);
		}
		next(error);
	}
};
