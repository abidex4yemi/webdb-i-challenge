/**
 * Wrap all accounts model functions
 * 
 * @param {object} { modelObjName, tableName, knex }
 * @returns {object}
 */
export default ({ modelObjName = '', tableName = '', knex = {} }) => {
	function insert(account) {
		return knex(tableName)
			.insert(account)
			.then(([id]) => getById(id));
	}

	function getById(id) {
		return knex(tableName)
			.where({ id })
			.first();
	}

	function update(id, changes) {
		return knex(tableName)
			.where({ id })
			.update(changes)
			.then(count => (count > 0 ? getById(id) : null));
	}

	return {
		modelObjName,
		insert,
		getById,
		update
	};
};
