const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { validPassword } = require('../libs/passwordUtils');
const Users = require('./db');

const verifyCallback = (username, password, done) => {
	const user = Users.GetUserByName(username);
	if (!user) {
		return done(null, false);
	}

	const isValid = validPassword(password, user.password);
	if (isValid) {
		return done(null, user);
	} else {
		return done(null, false);
	}
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((userId, done) => {
	const user = Users.GetUserById(userId);
	if (!user) {
		return done(null, false);
	} else {
		return done(null, user);
	}
});
