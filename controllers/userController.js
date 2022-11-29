const passport = require('passport');
const Users = require('../config/db');

module.exports.get = (req, res) => {
	res.render('index.ejs', { data: { isLogin: !!req.user } });
};

module.exports.getLogin = (req, res) => {
	res.render('login.ejs', { data: { isLogin: !!req.user } });
};

module.exports.postLogin = passport.authenticate('local', {
	failureRedirect: 'login',
	successRedirect: 'profile',
});

module.exports.getLogout = (req, res) => {
	req.logout(null, () => {
		res.redirect('/');
	});
};

module.exports.getRegister = (req, res) => {
	res.render('register.ejs', { data: { isLogin: !!req.user } });
};

module.exports.postRegister = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const isAdd = Users.AddUser(username, password);

	if (isAdd) {
		res.redirect('/login');
	} else {
		res.redirect('/register');
	}
};

module.exports.getProfile = (req, res) => {
	res.render('profile.ejs', {
		data: {
			id: req.user.id,
			username: req.user.username,
			isLogin: !!req.user,
		},
	});
};
