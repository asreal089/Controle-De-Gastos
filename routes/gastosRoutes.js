const moongose = require('mongoose');
const endOfMonth = require('date-fns/endOfMonth');
const startOfMonth = require('date-fns/startOfMonth');
const Gasto = moongose.model('gasto');

module.exports = (app) => {
	app.get('/api/gastos', (req, res) => {
		const user_id = req.user.id;
		Gasto.find(
			{
				_user: user_id,
				data: {
					$gte: startOfMonth(new Date()),
					$lte: endOfMonth(new Date()),
				},
			},
			function (err, registros) {
				console.log(registros);
				res.send(registros);
			}
		);
	});

	app.put('/api/gastos', (req, res) => {
		const {
			tipo,
			descricao,
			valor,
			data,
			dataLancamento,
			isMensal,
			isRenda,
		} = req.body;
	});

	app.post('/api/gastos', (req, res) => {
		const { tipo, descricao, valor, data, isMensal, isRenda } = req.body;
		const user_id = req.user.id;
		const gasto = new Gasto({
			tipo,
			descricao,
			valor,
			data,
			dataLancmento: Date.now(),
			isMensal,
			isRenda,
			_user: user_id,
		}).save();
		return res.json({ gasto });
	});
};
