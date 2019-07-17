import { Account } from '../../model';
import { OK, responseDataFormat } from '../../helpers';

/**
 * Get all account
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getAccounts = async (req, res, next) => {
	try {
		const limit = req.query.limit;
		const sortBy = req.query.sortBy;
		const sortDir = req.query.sortDir;

		const accounts = await Account.getAll({ limit, sortBy, sortDir });

		return res.status(OK).json(
			responseDataFormat({
				data: accounts,
				message: 'All accounts'
			})
		);
	} catch (error) {
		return next(error);
	}
};
