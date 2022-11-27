module.exports = function trace(req, res, next) {
	console.log(`Route ${req.method} ${req.originalUrl}`);
	console.log('Body', req.body);
	console.log('User', req.user?.username);
	console.log('===========================');
	next();
};
