import Joi from '@hapi/joi';
import { joiValidate } from '../helpers';

/**
 * Account validation schema
 */
const accountSchema = Joi.object().keys({
	name: Joi.string()
		.min(5)
		.trim()
		.required(),
	budget: Joi.number().required()
});

/**
 * Validate account body against defined schema
 */
export const validateAccountBody = (req, res, next) => {
	joiValidate(req, res, next, accountSchema);
};
