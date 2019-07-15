import express from 'express';
import { validateAccountParam } from '../middleware';
import { validateAccountBody } from '../middleware/validateAccountBody';
import { addAccount, getAccounts, getAccountById, deleteAccount, updateAccount } from '../controllers/accounts';

const router = express.Router();

router.param('id', validateAccountParam);

router
	.route('/accounts')
	.post(validateAccountBody, addAccount)
	.get(getAccounts);

router
	.route('/accounts/:id')
	.get(getAccountById)
	.delete(deleteAccount)
	.put(validateAccountBody, updateAccount);

export { router as accountRouter };
