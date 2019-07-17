import { Account } from '../../model';
import { OK, responseDataFormat } from '../../helpers';

/**
 * Delete an account given the id is valid
 * 
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
export const deleteAccount = async (req, res, next) => {
	try {
		const { id } = req.account;

		// Delete account from database
		await Account.remove(id);

		return res.status(OK).json(
			responseDataFormat({
				success: true,
				message: 'Action deleted successfully',
				data: req.account
			})
		);
	} catch (error) {
		next(error);
	}
};
