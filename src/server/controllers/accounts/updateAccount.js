import { Account } from '../../model';
import { responseDataFormat, OK, createError, CONFLICT } from '../../helpers';

/**
 * Update account given the account id is valid
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const updateAccount = async (req, res, next) => {
	try {
		const accountDetails = req.body.sanitizedBody;

		const accountId = req.account.id;

		const updatedAccountDetails = await Account.update(accountId, accountDetails);

		return res.status(OK).json(
			responseDataFormat({
				data: updatedAccountDetails,
				message: 'Account updated successfully'
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
