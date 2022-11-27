const { genPassword } = require('../libs/passwordUtils');

class DB {
	#users = [];

	constructor() {
		this.AddUser('AvivAb', '1234');
	}

	AddUser(username, password) {
		const user = this.GetUserByName(username);
		if (!user) {
			this.#users.push({
				id: this.#users.length + 1,
				username,
				password: genPassword(password),
			});
			return true;
		} else {
			return false;
		}
	}

	GetUserByName(username) {
		return this.#users.find((u) => u.username == username);
	}

	GetUserById(id) {
		return this.#users.find((u) => u.id === id);
	}
}

module.exports = new DB();
