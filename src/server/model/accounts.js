'use strict';

import create from '../../db/helpers/accounts';

module.exports = knex => {
	const models = create({ modelName: 'Account', tableName: 'accounts', knex });

	return {
		...models
	};
};
