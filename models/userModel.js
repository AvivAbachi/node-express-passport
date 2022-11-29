const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = class User {
	id;
	username;
	password;

	/**
	 * @param {number} id
	 * @param {string} username
	 * @param {string} password
	 */
	constructor(id, username, password) {
		this.id = id;
		this.username = username;
		this.password = bcrypt.hashSync(password, saltRounds);
	}

	/**
	 * @param {string} password
	 * @return {boolean}
	 */
	validPassword(password) {
		return bcrypt.compareSync(password, this.password);
	}
};
