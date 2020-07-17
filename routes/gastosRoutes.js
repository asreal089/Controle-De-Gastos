const moongose = require('mongoose');

const Gasto = moongose.model('gasto');
const ObjectID = require('mongodb').ObjectID;

module.exports = (app) => {
	app.get('/api/gastos', (req, res) => {
		Gasto.find({ _user: '5f11c24f5464c14e8e4c1ae4' }, function (
			err,
			registros
		) {
			res.send(registros);
		});
	});

	app.post('/api/gastos', (req, res) => {
		const { tipo, descricao, valor } = req.body;
		const user_id = '5f11c24f5464c14e8e4c1ae4';
		const gasto = new Gasto({
			tipo,
			descricao,
			valor,
			data: Date.now(),
			_user: user_id,
		}).save();
		return res.json({ gasto });
	});
};
