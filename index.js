const express = require('express');
const moongose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/user');
require('./models/gastos');
require('./services/passport');
const cors = require('cors');

const app = express();
app.use(
	cors({
		methods: ['GET', 'POST'],
		credentials: true,
	})
);

app.use(cookieSession({ maxAge: 30 * 24 * 60 * 1000, keys: [keys.cookieKey] }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/gastosRoutes')(app);
require('./routes/resumoRoutes')(app);
moongose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.get('/home', (req, res) => {
	res.send('olar !!! você esta logado');
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
const PORT = process.env.PORT || 8585;
app.listen(PORT);
console.log('aplicação de pé na porta: ' + PORT);
