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
		const accounts = await Account.getAll();

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
