const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports.genPassword = (password) => bcrypt.hashSync(password, saltRounds);

module.exports.validPassword = (password, hash) => bcrypt.compareSync(password, hash);
