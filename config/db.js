const User = require('../models/userModel');

class DB {
	/**
	 * @type {User[]}
	 */
	#users = [];

	constructor() {
		this.AddUser('AvivAb', '1234');
	}

	/**
	 * @param {string} username
	 * @param {string} password
	 * @return {boolean}
	 */
	AddUser(username, password) {
		const user = this.GetUserByName(username);
		if (!user) {
			this.#users.push(new User(this.#users.length + 1, username, password));
			return true;
		} else {
			return false;
		}
	}

	/**
	 * @param {string} username
	 * @returns {User | undefined}
	 */
	GetUserByName(username) {
		return this.#users.find((u) => u.username === username);
	}

	/**
	 * @param {number} id
	 * @returns {User | undefined}
	 */
	GetUserById(id) {
		return this.#users.find((u) => u.id === id);
	}
}

module.exports = new DB();
