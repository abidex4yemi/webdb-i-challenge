import express from 'express';
import { validateAccountBody } from '../middleware/validateAccountBody';
import { addAccount } from '../controllers/accounts';

const router = express.Router();

router.route('/accounts').post(validateAccountBody, addAccount);

export { router as accountRouter };
