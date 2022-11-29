const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./db');

const verifyCallback = (username, password, done) => {
	const user = Users.GetUserByName(username);
	if (!user) {
		done(null, false);
	}

	const isValid = user.validPassword(password);
	if (isValid) {
		done(null, user);
	} else {
		done(null, false);
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
		done(null, false);
	} else {
		done(null, user);
	}
});
