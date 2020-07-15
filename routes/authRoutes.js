const passport = require('passport');

module.exports = (app) => {
	app.get(
		'/auth',
		passport.authenticate('google', { scope: ['profile', 'email'] })
	);

	app.get('/auth/callback', passport.authenticate('google'), (req, res) => {
		res.redirect('/home');
	});

	app.get('/auth/current_user', (req, res) => {
		res.send(req.user);
	});
	app.get('/auth/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};
