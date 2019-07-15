import express from 'express';
import { validateAccountParam } from '../middleware';
import { validateAccountBody } from '../middleware/validateAccountBody';
import { addAccount, getAccounts, getAccountById } from '../controllers/accounts';

const router = express.Router();

router.param('id', validateAccountParam);

router
	.route('/accounts')
	.post(validateAccountBody, addAccount)
	.get(getAccounts);

router.route('/accounts/:id').get(getAccountById);

export { router as accountRouter };
