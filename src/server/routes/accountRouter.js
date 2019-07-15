import express from 'express';
import { validateAccountBody } from '../middleware/validateAccountBody';
import { addAccount, getAccounts } from '../controllers/accounts';

const router = express.Router();

router
	.route('/accounts')
	.post(validateAccountBody, addAccount)
	.get(getAccounts);

export { router as accountRouter };
