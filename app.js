const express = require('express');
const passport = require('passport');
const session = require('express-session');
const routes = require('./routes/userRoute');
const logger = require('./middlewares/logger');
require('dotenv').config();

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 60 * 24 },
	})
);
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.use(logger);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
